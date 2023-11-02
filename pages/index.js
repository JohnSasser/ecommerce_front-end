import styles from '@/styles/Home.module.css';
import Header from '@/components/Header';
import FeaturedProduct from '@/components/FeaturedProduct';

export default function Home() {
  return (
    <>
      <div>
        <Header />
        <FeaturedProduct />
      </div>
    </>
  );
}
