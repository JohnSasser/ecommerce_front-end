import { mongooseConnect } from '@/lib/mongoose';
import { Order } from '@/models/Order';
import { Product } from '@/models/product_model';

const stripe = require('stripe')(process.env.STRIPE_SK);
const checkout_url = 'http://localhost:3000';

export default async function handler(req, res) {
  await mongooseConnect();
  const { method } = req;

  if (method === 'POST') {
    const order_items = [];
    // productOrder is obj of objs with product_ids and order quantity key values;
    let { name, email, street, city, zip, county, productOrder } = req.body;

    let productArr = Object.keys(productOrder);
    const productInfo = await Product.find({ _id: productArr });

    productInfo.map(order => {
      let quantity = productOrder[order._id];

      order_items.push({
        quantity: quantity,
        price_data: {
          currency: 'USD',
          product_data: { name: order.title },
          unit_amount: order.price * 100,
        },
      });
    });

    const order_document = await Order.create({
      line_items: order_items,
      name: name,
      email: email,
      city: city,
      zip: zip,
      county: county,
      paid: false,
    });

    const session = await stripe.checkout.sessions.create({
      line_items: order_items,
      mode: 'payment',
      customer_email: email,
      success_url: checkout_url + '/cart?success=true',
      cancel_url: checkout_url + '/cart?canceled=true',
      metadata: {
        orderID: order_document._id.toString(),
      },
    });

    res.json({ url: session.url });
  } else res.status(500).json({ message: 'bad request' });
}
