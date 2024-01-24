import Center from '../center';
import ProductGrid from '../productGrid';

export default function NewProducts({ new_products }) {
  // let spread_products = { new_products };
  // console.log(spread_products);
  return (
    <Center>
      <ProductGrid products={new_products} />
    </Center>
  );
}
