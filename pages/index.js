import Header from '@/components/Header';
import FeaturedProduct from '@/components/FeaturedProduct';
import { Product } from '@/models/product_model';
import { mongooseConnect } from '@/lib/mongoose';

export default function Home({ featured_product }) {
  return (
    <div>
      <Header />
      <FeaturedProduct featured_product={featured_product} />
    </div>
  );
}

export async function getServerSideProps() {
  const featuredProductID = '651dc19342246534583237e2';

  await mongooseConnect();
  const featuredProduct = await Product.findById(featuredProductID);
  return {
    props: { featured_product: JSON.parse(JSON.stringify(featuredProduct)) },
  };
}
