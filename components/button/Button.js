import { PrimaryColor, PrimaryColorDark } from '@/lib/colors';
import { useState } from 'react';
import { css, styled } from 'styled-components';

export const ButtonStyle = css`
  border: 0;
  margin: 0 8px;
  padding: 4px 8px;
  border-radius: 4px;
  display: inline-flex;
  align-items: center;
  text-decoration: none;
  font-weight: 700;
  font-family: 'Poppins', sans-serif;
  cursor: pointer;

  svg {
    height: 16px;
    margin-right: 8px;
    padding: 4px;
  }

  /* $white button styling */
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

    /* purple button */
  ${props =>
    props.$dark &&
    !props.$outline &&
    css`
      background-color: #222222;
      color: #fff;
    `}
    
  ${props =>
    props.$dark &&
    props.$outline &&
    css`
      background-color: transparent;
      color: #222222;
      border: 1px solid #222222;
    `}


    /* purple button & out */
  ${props =>
    props.$primary &&
    !props.$outline &&
    css`
      background-color: ${PrimaryColorDark};
      color: #fff;
      border: 1px solid ${PrimaryColorDark};
    `}

    ${props =>
    props.$primary &&
    props.$outline &&
    css`
      background-color: transparent;
      color: ${PrimaryColorDark};
      border: 2px solid ${PrimaryColorDark};
    `}

    /* large button */
  ${props =>
    props.$size === 'large' &&
    css`
      font-size: 1rem;
      padding: 15px;
      margin: 25px 5px;
    `}

    /* small button */
${props =>
    props.$size === 'small' &&
    css`
      font-size: 0.75rem;
      padding: 8px;
      margin: 0 5px;
      max-height: 20px;
      max-width: 25px;
    `}
`;

export const StyledButton = styled.button`
  ${ButtonStyle}
`;

export default function Button({ children, ...props }) {
  const [clicked, setClicked] = useState();
  return (
    <StyledButton
      $clicked={clicked}
      onClick={() => setClicked(!clicked)}
      {...props}
    >
      {children}
    </StyledButton>
  );
}
