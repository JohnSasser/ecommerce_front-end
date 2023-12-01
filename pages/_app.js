// import '@/styles/globals.css'
import { createGlobalStyle } from 'styled-components';
import { Poppins } from 'next/font/google';
import { CartContextProvider } from '@/context/CartContext';

const poppins = Poppins({
  weight: ['400', '500', '700', '900'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
});

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background-color: #eee;
  }
`;

export default function App({ Component, pageProps }) {
  return (
    <main className={poppins.className}>
      <CartContextProvider>
        <Component {...pageProps} />
      </CartContextProvider>
      <GlobalStyle />
    </main>
  );
}
