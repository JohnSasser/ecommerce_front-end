import Center from '@/components/center';
import Header from '@/components/header';
import ProductImages from '@/components/productImages';
import Title from '@/components/title.js';
import WhiteBox from '@/components/whiteBox';
import { mongooseConnect } from '@/lib/mongoose';
import { Product } from '@/models/product_model';
import styled from 'styled-components';

const ColumnWrapper = styled.div`
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: 40px;
  margin-top: 20px;
`;

export default function ProductPage({ product }) {
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
