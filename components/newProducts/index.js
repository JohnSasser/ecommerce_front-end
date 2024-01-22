import Center from '../center';
import ProductGrid from '../productGrid';

export default function NewProducts({ new_products }) {
  let spread_products = { ...new_products };
  return (
    <Center>
      <ProductGrid products={spread_products} />
    </Center>
  );
}
