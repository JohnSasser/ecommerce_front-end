import styled from 'styled-components';

const StyledTable = styled.table`
  width: 100%;

  th {
    text-align: left;
    text-transform: uppercase;
    color: #aaa;
    font-weight: 600;
    font-size: 0.85rem;
  }
  td {
    border-top: 1px solid rgba(0, 0, 0, 0.2);
  }
`;

export default function Table(children) {
  return <StyledTable {...children}></StyledTable>;
}
