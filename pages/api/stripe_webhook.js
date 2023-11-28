import { mongooseConnect } from '@/lib/mongoose';
import { Order } from '@/models/Order';
import { buffer } from 'micro';
const stripe = require('stripe')(process.env.STRIPE_PK);

export default async function handler(req, res) {
  await mongooseConnect();

  const sig = req.headers['stripe-signature'];
  const endpointSecret =
    'whsec_5eab1fbdd6ffe4828fc9bc71d7fdbd3ae7e014f6418b2f6b8734cb0523209f8d';

  let event;

  try {
    event = stripe.webhooks.constructEvent(
      await buffer(req),
      sig,
      endpointSecret
    );
  } catch (err) {
    res.status(400).send(`Webhook Error: ${err.message}`);
    return;
  }

  // Handle the event
  switch (event.type) {
    case 'checkout.session.completed':

    // collect the obj id from metadata passed in checkout
    // update the order status
      const data = event.data.object;
      const order_id = data.metadata.orderID;
      const paid = data.payment_status === 'paid';

      if (order_id && paid) {
        await Order.findByIdAndUpdate(order_id, { paid: true });
      }
      break;
  }
  res.status(200).send(`stripe order resolved`);
}

export const config = {
  api: { bodyParser: false },
};

// acct ID:
// acct_1OEwuKCu0c7seMRJ
