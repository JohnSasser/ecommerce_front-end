import styled from 'styled-components';
import Center from '../center';
import ProductBox from '../productBox';

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 40px;
  padding-top: 30px;
`;

export default function NewProducts({ new_products }) {
  return (
    <Center>
      <ProductGrid>
        {new_products.length > 0
          ? new_products.map(product => (
              <ProductBox key={product._id} {...product}>
                {' '}
              </ProductBox>
            ))
          : null}
      </ProductGrid>
    </Center>
  );
}
