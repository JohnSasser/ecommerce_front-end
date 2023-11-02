import styled from 'styled-components';
import Center from './center';

const StyledDiv = styled.div`
  background-color: #222;
  color: #fff;
  padding: 50px 0;
`;

const Title = styled.h2`
  margin: 0;
  font-weight: normal;
`;

const Desc = styled.p`
  color: #aaa;
  font-size: 0.8rem;
`;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  img {
    max-width: 100%;
    max-height: 200px;
  }
`;



export default function FeaturedProduct() {
  return (
    <StyledDiv>
      <Center>
        <Wrapper>
          <div className="col_1">
            <Title>Featured Product</Title>
            <Desc>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Dignissimos, nemo repellendus beatae nam, voluptatibus adipisci
              modi impedit in deleniti placeat maxime eius officiis vero, sint
              quae dolorum facilis odio distinctio?
            </Desc>
          </div>
          <div
            className="col_2"
            style={{ display: 'flex', justifyContent: 'center' }}
          >
            <img
              src="https://sasser-next-ecommerce-admin-image-bucket.s3.amazonaws.com/1696267814460-iphone-14-pro.png"
              alt="Featured Product Image"
            />
          </div>
        </Wrapper>
      </Center>
    </StyledDiv>
  );
}
