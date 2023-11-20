import styled from 'styled-components';

const StyledInput = styled.input`
  width: 100%;
  padding: 5px;
  margin-bottom: 8px;
  border: 1px #222222 solid;
  box-sizing: border-box;
  border-radius: 2px;
  font-size: 12px;
`;

export default function Input(children) {
  return <StyledInput {...children} />;
}
