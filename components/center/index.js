import styled from 'styled-components';

const StyledDiv = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 20px 50px;
`;

export default function Center({ children }) {
  return <StyledDiv>{children}</StyledDiv>;
}
