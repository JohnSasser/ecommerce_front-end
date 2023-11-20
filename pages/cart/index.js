import Button from '@/components/button/Button';
import Center from '@/components/center';
import Header from '@/components/header';

import { CartContext } from '@/context/CartContext';
import { useContext, useEffect, useState } from 'react';
import axios from 'axios';

import styled from 'styled-components';
import Table from '@/components/table';

const ColumnsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1.4fr 0.6fr;
  gap: 40px;
  margin-top: 40px;
`;

const Box = styled.div`
  background-color: #fff;
  border-radius: 10px;
  padding: 30px;
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

export default function CartPage() {
  const { cartProducts, addProduct, removeProduct } = useContext(CartContext);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const url = '/api/cart';
    if (cartProducts.length > 0) {
      axios.post(url, { ids: cartProducts }).then(res => {
        console.log('products: ', res);
        setProducts(res.data);
      });
    }
  }, [cartProducts]);


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
                  <th>Products</th>
                  <th>Quantity</th>
                  <th>Price</th>
                </thead>
                {products
                  ? products.map(product => (
                      <tbody>
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
                        <td>
                          <Button onClick={() => removeProduct(product._id)}>
                            -
                          </Button>
                          <QuantityLabel>
                            {
                              cartProducts.filter(id => id === product._id)
                                .length
                            }
                          </QuantityLabel>
                          <Button onClick={() => addProduct(product._id)}>
                            +
                          </Button>
                        </td>
                        {/* quantity calculated price */}
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
              </Table>
            </Box>
          )}

          {!!cartProducts?.length && (
            <Box>
              <h2>Order Info</h2>
              <input type="text" placeholder="Address" />
              <input type="text" placeholder="Address 2" />
              <Button block $dark size={'large'}>
                Continue Checkout
              </Button>
            </Box>
          )}
        </ColumnsWrapper>
      </Center>
    </>
  );
}
