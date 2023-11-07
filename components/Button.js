import { css, styled } from 'styled-components';

const StyledButton = styled.button`
  border: 0;
  padding: 4px 8px;
  border-radius: 4px;
  display: inline-flex;
  align-items: center;
  cursor: pointer;

  svg {
    height: 16px;
    margin-right: 8px;
  }

  ${props =>
    props.$white &&
    !props.$outline &&
    css`
      background-color: #fff;
      color: #000;
    `}
  ${props =>
    props.$white &&
    props.$outline &&
    css`
      background-color: transparent;
      color: #fff;
      border: 1px solid #fff;
    `}
  ${props =>
    props.$primary &&
    css`
      background-color: #2563eb;
      color: #fff;
      border: 1px solid #2563eb;
    `}
  ${props =>
    props.size === 'large' &&
    css`
      font-size: 1rem;
      padding: 15px;
      margin: 25px 5px;
    `}
`;

export default function PrimaryButton({ children, ...props }) {
  return <StyledButton {...props}>{children}</StyledButton>;
}
