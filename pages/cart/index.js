import Button from '@/components/button/Button';
import Center from '@/components/center';
import Header from '@/components/header';
import Table from '@/components/table';
import Input from '@/components/input';

import { CartContext } from '@/context/CartContext';
import { useContext, useEffect, useState } from 'react';
import { useUrl } from 'nextjs-current-url';

import axios from 'axios';
import styled from 'styled-components';

const ColumnsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1.3fr 0.7fr;
  gap: 40px;
  margin-top: 40px;
  div:nth-child(1) {
    order: 0;
  }
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    margin-bottom: 50px;

    div:nth-child(1) {
      order: 2;
    }
  }
`;

const Box = styled.div`
  background-color: #fff;
  border-radius: 10px;
  padding: 30px;
  height: fit-content;
`;

const ProductInfoCell = styled.td`
  padding: 10px;
  text-align: center;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const TitleBox = styled.div`
  font-size: larger;
  font-weight: 400;
`;

const QuantityLabel = styled.span`
  padding: 0 5px;
  display: block;
  @media screen and (min-width: 768px) {
    display: inline-block;
  }
`;

const ProductImageBox = styled.div`
  max-width: 135px;
  max-height: 135px;
  padding: 15px;
  box-shadow: 0 0 8px #aaa;
  margin: 10px 0;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    max-width: 120px;
    max-height: 120px;
  }
`;

const ProductQuantityBox = styled.td`
  width: 120px;
  text-align: center;

  span {
    padding-top: 3px;
  }

  @media screen and (max-width: 768px) {
    width: 65px;
  }
`;

const TotalPriceBox = styled.span`
  display: flex;
  flex-direction: row;
  align-items: center;
  /* margin for the price in the price-box */
  :nth-child(2) {
    margin-left: 15px;
  }
`;

const AddressBox = styled.span`
  display: flex;
  gap: 5px;
`;

export default function CartPage() {
  const { cartProducts, addProduct, removeProduct, clearCart } =
    useContext(CartContext);
  const [products, setProducts] = useState([]);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [street, setStreet] = useState('');
  const [city, setCity] = useState('');
  const [zip, setZip] = useState('');
  const [country, setCountry] = useState('');

  const { href: currentUrl, pathname } = useUrl() ?? {};
  const [paymentComplete, setPaymentComplete] = useState(false);

  useEffect(() => {
    const url = '/api/cart';
    if (cartProducts.length > 0) {
      axios.post(url, { ids: cartProducts }).then(res => {
        setProducts(res.data);
      });
    }
    setProducts([]);
  }, [cartProducts]);

  useEffect(() => {
    //if url has success=true,
    //empty cart, and set state to show thanks for order card
    if (currentUrl?.includes('success=true')) {
      setProducts([]), clearCart(), setPaymentComplete(true);
    }
  }, [pathname]);

  const getTotal = () => {
    let totalPrice = 0;
    for (const productID of cartProducts) {
      // iterate over the products and return a product price where ids match.
      const price = products.find(
        p => p._id === productID && p.price !== 0
      ).price;
      totalPrice += price;
    }

    return totalPrice.toFixed(2);
  };

  async function checkoutSubmission(e) {
    e.preventDefault();

    const productOrder = {};
    cartProducts.forEach(el => {
      productOrder[el] = (productOrder[el] || 0) + 1;
    });

    const data = {
      name,
      email,
      street,
      city,
      zip,
      country,
      productOrder,
    };

    const response = await axios.post('/api/checkout', data);
    const stripe_redirect = response.data.url;

    if (response.status === 200) {
      window.location.assign(stripe_redirect);
    } else err => console.error(err);
  }

  if (paymentComplete === true) {
    return (
      <>
        <Header />
        <Center>
          <Box>
            <h2>Thanks for your order!</h2>
            <p>
              We will be sending the order details shortly.
              <br />
            </p>
          </Box>
        </Center>
      </>
    );
  }
  return (
    <>
      <Header />
      <Center>
        <ColumnsWrapper>
          {!products.length > 0 ? (
            <Box>Cart is empty</Box>
          ) : (
            <Box>
              <h2>Cart</h2>
              <Table>
                <thead>
                  <tr>
                    <th>Products</th>
                    <th>Quantity</th>
                    <th>Price</th>
                  </tr>
                </thead>
                {products
                  ? products.map(product => (
                      <tbody key={product._id}>
                        <ProductInfoCell>
                          <ProductImageBox>
                            <img
                              src={product.images[0]}
                              alt={`product image for ` + product.title}
                            />
                          </ProductImageBox>
                          <TitleBox>{product.title}</TitleBox>
                        </ProductInfoCell>
                        {/* number of items */}
                        <ProductQuantityBox>
                          <Button
                            $size="small"
                            onClick={() => removeProduct(product._id)}
                          >
                            -
                          </Button>
                          <QuantityLabel>
                            {
                              cartProducts.filter(id => id === product._id)
                                .length
                            }
                          </QuantityLabel>
                          <Button
                            $size="small"
                            onClick={() => addProduct(product._id)}
                          >
                            +
                          </Button>
                        </ProductQuantityBox>
                        {/* quantity calculated price, per item */}
                        <td>
                          ${' '}
                          {(
                            cartProducts.filter(id => id === product._id)
                              .length * product.price
                          ).toFixed(2)}
                        </td>
                      </tbody>
                    ))
                  : null}{' '}
                <tr>
                  {/* total price */}
                  <td>
                    <TotalPriceBox>
                      <h4>Total: </h4>
                      <span>
                        $ {products && cartProducts ? getTotal() : null}
                      </span>
                    </TotalPriceBox>
                  </td>
                </tr>
              </Table>
            </Box>
          )}

          {/* order info */}
          {!!cartProducts?.length && (
            <Box>
              <h2>Order Info</h2>

              <form onSubmit={checkoutSubmission}>
                <Input
                  type="text"
                  placeholder="Name"
                  required={true}
                  name="name"
                  value={name}
                  onChange={e => setName(e.target.value)}
                />
                <Input
                  type="email"
                  placeholder="Email"
                  required={true}
                  name="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                />
                <Input
                  type="text"
                  placeholder="Street Address"
                  required={true}
                  name="street"
                  value={street}
                  onChange={e => setStreet(e.target.value)}
                />
                <AddressBox>
                  <Input
                    type="text"
                    placeholder="City"
                    required={true}
                    name="city"
                    value={city}
                    onChange={e => setCity(e.target.value)}
                  />
                  <Input
                    type="text"
                    placeholder="Postal Code"
                    required={true}
                    name="zip"
                    value={zip}
                    onChange={e => setZip(e.target.value)}
                  />
                </AddressBox>
                <Input
                  type="text"
                  required={true}
                  placeholder="Country"
                  name="country"
                  value={country}
                  onChange={e => setCountry(e.target.value)}
                />

                <Button $dark $size={'large'}>
                  Continue Checkout
                </Button>
              </form>
            </Box>
          )}
        </ColumnsWrapper>
      </Center>
    </>
  );
}
