import styled from 'styled-components';
import Center from '../center';
import Button from '../button/Button';
import ButtonLink from '../button/ButtonLink';
import CartIcon from '../icons/cart';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

const StyledDiv = styled.div`
  background-color: #222;
  color: #fff;
  padding: 50px 0;
`;

const Title = styled.h1`
  margin: 0;
  /* font-weight: bold; */
  font-size: xxx-large;
`;

const Desc = styled.p`
  color: #aaa;
  font-size: 0.8rem;
  text-align: center;
`;

const ColumnsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1.1fr 0.8fr;
  gap: 40px;
  img {
    max-width: 100%;
    max-height: 200px;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-around;
`;

const Column = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export default function FeaturedProduct({ featured_product }) {
  // console.log(featured_product);
  const { addProduct } = useContext(CartContext);
  const addFeaturedtoCart = function () {
    console.log('fire');
    setCartProducts(prev => [...prev, featured_product._id]);
  };

  return (
    <StyledDiv>
      <Center>
        <ColumnsWrapper>
          <Column className="col_1">
            <Title>{featured_product.title}</Title>
            <Desc>{featured_product.description}</Desc>
            <ButtonWrapper>
              <ButtonLink
                href={'/products/' + featured_product._id}
                $outline
                $white
                $size="large"
              >
                Read More
              </ButtonLink>

              <Button
                onClick={() => addProduct(featured_product._id)}
                $size="large"
              >
                <CartIcon style={{ marginRight: '8px' }} />
                Add To Cart
              </Button>
            </ButtonWrapper>
          </Column>

          <Column
            className="col_2"
            style={{ display: 'flex', justifyContent: 'center' }}
          >
            <img
              src="https://sasser-next-ecommerce-admin-image-bucket.s3.amazonaws.com/1698952903547-macbookpro.png"
              alt="Featured Product Image"
            />
          </Column>
        </ColumnsWrapper>
      </Center>
    </StyledDiv>
  );
}
