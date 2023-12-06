import Link from 'next/link';
import { useContext, useState } from 'react';
import styled from 'styled-components';
import { CartContext } from '../../context/CartContext';
import Center from '../center';
import Hamburger from '../icons/burger';

const StyledHeader = styled.header`
  background-color: #222;
  font-size: 1.35em;
`;

const Logo = styled(Link)`
  color: #fff;
  text-decoration: none;
  z-index: 3;
  font-size: 1.5em;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
`;

const NavLink = styled(Link)`
  display: block;
  margin-left: 15px;
  color: #aaa;
  text-decoration: none;
  padding: 10px 0;
  @media screen and (min-width: 768px) {
    padding: 0;
  }
`;

const StyledNav = styled.nav`
  ${props =>
    props.$mobileNav ? 'display: block; z-index: 2;' : 'display: none;'}
  gap: 15px;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 80px 20px 20px;
  background-color: #222;
  @media screen and (min-width: 768px) {
    display: flex;
    position: static;
    padding: 0;
  }
  @media screen and (max-width: 768px) {
    padding-top: 120px;
  }
`;

const NavButton = styled.button`
  background-color: transparent;
  width: 50px;
  height: 50px;
  border: 0;
  color: white;
  cursor: pointer;
  position: relative;
  z-index: 3;
  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export default function Header() {
  const { cartProducts } = useContext(CartContext);
  const [mobileNav, setMobileNav] = useState(false);

  return (
    <StyledHeader>
      <Center>
        <Wrapper>
          <Logo href={'/'}>Ecommerce</Logo>

          <StyledNav $mobileNav={mobileNav}>
            <NavLink
              onClick={mobileNav ? () => setMobileNav(false) : null}
              href={'/'}
            >
              Home
            </NavLink>
            <NavLink href={'/products'}>All Products</NavLink>
            <NavLink href={'/categories'}>Categories</NavLink>
            <NavLink href={'/account'}>Account</NavLink>
            <NavLink href={'/cart'}>Cart ({cartProducts.length})</NavLink>
          </StyledNav>

          <NavButton onClick={() => setMobileNav(prev => !prev)}>
            <Hamburger />
          </NavButton>
        </Wrapper>
      </Center>
    </StyledHeader>
  );
}
