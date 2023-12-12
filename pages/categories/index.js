import Center from '@/components/center';
import Header from '@/components/header';
import { mongooseConnect } from '@/lib/mongoose';
import { Product } from '@/models/product_model';

export default function CatagoriesPage({ products }) {
  let properties;
  products.filter(x => {
    if (x.properties != null || undefined) {
      properties = Object.keys(x.properties);
    }
  });

  console.log('properties: ', properties);
  return (
    <>
      <Header />
      <Center>
        {properties?.map(p => (
          <>
            <p>{p.toLowerCase()}</p>
          </>
        ))}
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
