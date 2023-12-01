import styled from 'styled-components';
import ProductBox from '../productBox';

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  padding-top: 30px;

  @media screen and (min-width: 768px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }

  @media screen and (max-width: 400px) {
    grid-template-columns: 1fr;
  }
`;

export default function ProductGrid({ products }) {
  return (
    <Grid>
      {products?.length > 0 &&
        products.map(product => <ProductBox key={product._id} {...product} />)}
    </Grid>
  );
}
