import styled from 'styled-components';
import Button from './Button';
import CartIcon from './icons/cart';

const ProductsWrapper = styled.div``;

const WhiteBox = styled.div`
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

const Title = styled.div`
  font-weight: none;
  font-size: 1rem;
  text-align: center;
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
  return (
    <ProductsWrapper>
      <WhiteBox>
        <div>
          <img src={images[0]} alt={title[0] + 'image'} />
        </div>
      </WhiteBox>
      <ProductInfoBox>
        <Title>{title}</Title>
        <PriceBox>
          <Price>${price}</Price>
          <Button primary outline>
            <CartIcon />
          </Button>
        </PriceBox>
      </ProductInfoBox>
    </ProductsWrapper>
  );
}
