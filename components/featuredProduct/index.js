import styled from 'styled-components';
import Center from '../center';
import Button from '../button/Button';
import ButtonLink from '../button/ButtonLink';
import CartIcon from '../icons/cart';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import IconButtonContainer from '../button/iconButton';
import Image from 'next/image';

const StyledDiv = styled.div`
  background-color: #222;
  color: #fff;
  padding: 0;

  @media screen and (min-width: 786px) {
    padding: 20px 0;
  }
`;

const Title = styled.h1`
  margin: 0;
  font-size: 1.75em;

  @media screen and (min-width: 768px) {
    font-size: xxx-large;
  }
`;

const Desc = styled.p`
  color: #aaa;
  font-size: 0.8rem;
  text-align: center;
`;

const ColumnsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px 40px;

  div:nth-child(1) {
    order: 2;
  }
  img {
    max-width: 100%;
    max-height: 120px;
  }

  @media screen and (min-width: 768px) {
    grid-template-columns: 1.1fr 0.8fr;
    div:nth-child(1) {
      order: 0;
    }
    img {
      max-width: 100%;
      max-height: 200px;
    }
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
                $outline={'true'}
                $white={'true'}
                $size="large"
              >
                Read More
              </ButtonLink>
              <IconButtonContainer
                $size={'large'}
                $primary={'false'}
                prod_ID={featured_product._id}
              />
            </ButtonWrapper>
          </Column>

          <Column
            className="col_2"
            style={{ display: 'flex', justifyContent: 'center' }}
          >
            <Image
              src="https://sasser-next-ecommerce-admin-image-bucket.s3.amazonaws.com/1698952903547-macbookpro.png"
              alt="Featured Product Image"
            />
          </Column>
        </ColumnsWrapper>
      </Center>
    </StyledDiv>
  );
}
