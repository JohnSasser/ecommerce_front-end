import Center from '@/components/center';
import Header from '@/components/header';
import ProductGrid from '@/components/productGrid';
import Title from '@/components/title.js';
import { mongooseConnect } from '@/lib/mongoose';
import { Product } from '@/models/product_model';

export default function ProductsPage({ products }) {
  return (
    <>
      <Header />
      <Center>
        <Title>All Products</Title>
        <ProductGrid products={products} />
      </Center>
    </>
  );
}

export async function getServerSideProps() {
  await mongooseConnect();
  const products = await Product.find({}, null, { sort: { _id: -1 } });

  return {
    props: {
      products: JSON.parse(JSON.stringify(products)),
    },
  };
}
