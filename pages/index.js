import Header from '@/components/header';
import FeaturedProduct from '@/components/featuredProduct';
import { Product } from '@/models/product_model';
import { mongooseConnect } from '@/lib/mongoose';
import NewProducts from '@/components/newProducts';
import { CartContext } from '@/context/CartContext';
import styled from 'styled-components';

const AppContainer = styled.div`
  margin-bottom: 50px;
  @media screen and (max-width: 768px) {
    margin-bottom: 20px;
  }
`;

export default function Home({ featured_product, new_products }) {
  console.log(featured_product, new_products);
  return (
    <AppContainer>
      <Header />
      <FeaturedProduct featured_product={featured_product} />
      <NewProducts new_products={new_products} />
    </AppContainer>
  );
}

// next native function to pre-render page with api response;
export async function getServerSideProps() {
  const featuredProductID = '651dc19342246534583237e2';

  await mongooseConnect();
  const featuredProduct = await Product.findById(featuredProductID);
  const newProducts = await Product.find({}, null, {
    sort: { _id: -1 },
    limit: 10,
  });
  return {
    props: {
      featured_product: JSON.parse(JSON.stringify(featuredProduct)),
      new_products: JSON.parse(JSON.stringify(newProducts)),
    },
  };
}
