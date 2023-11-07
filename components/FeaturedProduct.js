import styled from 'styled-components';
import Center from './center';
import Button from './Button';


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
  console.log(featured_product);
  return (
    <StyledDiv>
      <Center>
        <ColumnsWrapper>
          <Column className="col_1">
            <Title>{featured_product.title}</Title>
            <Desc>{featured_product.description}</Desc>
            <ButtonWrapper>
              <Button $outline $white size="large">
                Read More
              </Button>
              <Button $primary size="large">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6"
                >
                  <path d="M2.25 2.25a.75.75 0 000 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 00-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 000-1.5H5.378A2.25 2.25 0 017.5 15h11.218a.75.75 0 00.674-.421 60.358 60.358 0 002.96-7.228.75.75 0 00-.525-.965A60.864 60.864 0 005.68 4.509l-.232-.867A1.875 1.875 0 003.636 2.25H2.25zM3.75 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM16.5 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" />
                </svg>
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
