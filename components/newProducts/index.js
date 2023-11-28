import styled from 'styled-components';
import Center from '../center';
import ProductBox from '../productBox';
import ProductGrid from '../productGrid';


export default function NewProducts({ new_products }) {
  return (
    <Center>
      <ProductGrid products={...new_products} />
    </Center>
  );
}
