import { useState } from 'react';
import styled, { css } from 'styled-components';

const StyledImage = styled.img`
  max-width: 100%;
  max-height: 100%;
`;

const PremierImage = styled.img`
  max-width: 100%;
  max-height: 500px;
`;

const PremierImageWrapper = styled.div`
  text-align: center;
`;

const ImageButtons = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 10px;
  margin-top: 10px;
`;

const ImageButton = styled.div`
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4px 2px;
  /* :hover {
    padding: 6px;
    border: 2px solid #ccc;
    border-radius: 4px;
  } */
  ${props =>
    props.active === 'true'
      ? `opacity: .6`
      : css`
          cursor: pointer;
          &:hover {
            padding: 6px;
            border: 2px solid #ccc;
            border-radius: 4px;
          }
        `}
`;

export default function ProductImages({ images }) {
  const [activeImage, setActiveImage] = useState(images?.[0]);

  return (
    <>
      <PremierImageWrapper>
        <PremierImage src={activeImage} alt="product image" />
      </PremierImageWrapper>

      <ImageButtons>
        {images.map((x, idx) => (
          <ImageButton
            key={x + '_' + idx}
            active={activeImage === x ? 'true' : 'false'}
          >
            <StyledImage
              onClick={() => setActiveImage(x)}
              src={x}
              alt={'image' + idx}
            />
          </ImageButton>
        ))}
      </ImageButtons>
    </>
  );
}
