import React, { useState } from 'react';
import styled from 'styled-components';
import CartIcon from '../icons/cart';
import Button from '../button/Button';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

const IconButtonWrapper = styled.div`
  transform: rotate(0deg);
  overflow: hidden;
  transition: all 0.3s ease-out;
  transform: ${props => (props.$rotate ? `rotate(360deg)` : '')};
`;

export default function AddToCartButtonContainer(props) {
  const { addProduct } = useContext(CartContext);
  const [rotate, setRotate] = useState(false);

  function handleClick() {
    setRotate(!rotate), addProduct(props.prod_ID);
  }
  console.log(props);

  const sizeCase = function () {
    if (props.$size === 'large') return 'large';
    else if (props.$size === 'small') return 'small';
    else return null;
  };
  const Icon = () => (
    <Button
      $primary={props.$primary === 'true' ? 'true' : null}
      $outline={props.$outline === 'true' ? 'true' : null}
      $size={sizeCase()}
    >
      <CartIcon />
      Add To Cart
    </Button>
  );

  return (
    <IconButtonWrapper
      key={props.prod_ID}
      $rotate={rotate}
      onClick={() => handleClick()}
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Icon />
    </IconButtonWrapper>
  );
}
