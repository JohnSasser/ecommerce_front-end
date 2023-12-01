import Button from '@/components/button/Button';
import Center from '@/components/center';
import Header from '@/components/header';
import CartIcon from '@/components/icons/cart';
import ProductImages from '@/components/productImages';
import Title from '@/components/title.js';
import WhiteBox from '@/components/whiteBox';
import { CartContext } from '@/context/CartContext';
import { mongooseConnect } from '@/lib/mongoose';
import { Product } from '@/models/product_model';
import { useContext } from 'react';
import styled from 'styled-components';

const ColumnWrapper = styled.div`
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: 40px;
  margin-top: 20px;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    margin-bottom: 50px;
  }
`;

const PriceRow = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const PriceBox = styled.div`
  font-size: 1.25em;
  font-weight: 500;
`;

export default function ProductPage({ product }) {
  const { addProduct } = useContext(CartContext);

  return (
    <>
      <Header />
      <Center>
        <ColumnWrapper>
          <WhiteBox>
            <ProductImages images={product.images} />
          </WhiteBox>
          <div>
            <Title>{product.title}</Title>
            <p>{product.description}</p>

            <PriceRow>
              <PriceBox>$ {product.price}</PriceBox>
              <Button
                $dark
                onClick={() => addProduct(product._id)}
                $size="large"
              >
                <CartIcon style={{ marginRight: '8px' }} />
                Add To Cart
              </Button>
            </PriceRow>
          </div>
        </ColumnWrapper>
      </Center>
    </>
  );
}

// next native function to pre-render page with api response;
export async function getServerSideProps(context) {
  await mongooseConnect();
  const { id } = context.query;
  const product = await Product.findById(id);
  return {
    props: {
      product: JSON.parse(JSON.stringify(product)),
    },
  };
}
