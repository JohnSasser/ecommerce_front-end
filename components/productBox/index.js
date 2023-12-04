import Link from 'next/link';
import styled from 'styled-components';
import Button from '../button/Button';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import CartIcon from '../icons/cart';
import AddToCartButtonContainer from '../icons/iconButton';

const ProductsWrapper = styled.div``;

const WhiteBox = styled(Link)`
  background-color: white;
  padding: 20px;
  height: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  img {
    max-width: 100%;
    max-height: 100px;
  }
`;

const ProductInfoBox = styled.div`
  margin-top: 10px;
`;

const Title = styled(Link)`
  font-weight: none;
  font-size: 1rem;
  text-align: center;
  color: inherit;
  text-decoration: none;
`;

const PriceBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-top: 2px;
`;

const Price = styled.div`
  font-size: 1.3rem;
  font-weight: 700;
`;

export default function ProductBox({ _id, title, description, images, price }) {
  const { addProduct } = useContext(CartContext);
  const url = '/products/' + _id;

  return (
    <ProductsWrapper key={_id}>
      <div>
        <WhiteBox href={url}>
          <div>{<img src={images?.[0]} alt={title + 'image'} />}</div>
        </WhiteBox>
        <ProductInfoBox>
          <Title href={url}>{title}</Title>
          <PriceBox>
            <Price>${price}</Price>

            <AddToCartButtonContainer
              prod_ID={_id}
              $primary={'true'}
              $outline={'true'}
            />
          </PriceBox>
        </ProductInfoBox>
      </div>
    </ProductsWrapper>
  );
}
