import { css, styled } from 'styled-components';

export const ButtonStyle = css`
  border: 0;
  padding: 4px 8px;
  border-radius: 4px;
  display: inline-flex;
  align-items: center;
  text-decoration: none;
  cursor: pointer;

  svg {
    height: 16px;
    margin-right: 8px;
  }

  ${props =>
    props.white &&
    !props.outline &&
    css`
      background-color: #fff;
      color: #000;
    `}
  ${props =>
    props.white &&
    props.outline &&
    css`
      background-color: transparent;
      color: #fff;
      border: 1px solid #fff;
    `}
${props =>
    props.primary &&
    !props.outline &&
    css`
      background-color: #2563eb;
      color: #fff;
      border: 1px solid #2563eb;
    `}
    ${props =>
    props.primary &&
    props.outline &&
    css`
      background-color: transparent;
      color: #2563eb;
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

export const StyledButton = styled.button`
  ${ButtonStyle}
`;

export default function Button({ children, ...props }) {
  return <StyledButton {...props}>{children}</StyledButton>;
}
