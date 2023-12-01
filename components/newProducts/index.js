import styled from 'styled-components';
import Center from '../center';
import ProductGrid from '../productGrid';


export default function NewProducts({ new_products }) {
  return (
    <Center>
      <ProductGrid products={...new_products} />
    </Center>
  );
}
