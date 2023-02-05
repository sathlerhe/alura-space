import Banner from "../../components/Banner";
import Footer from "../../components/Footer";
import Galery from "../../components/Galery";
import Header from "../../components/Header";
import Menu from "../../components/Menu";
import Populars from "../../components/Populars";

import styles from "./homePage.module.scss";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <section className={styles.principal}>
          <Menu />
          <Banner />
        </section>
        
        <div className={styles.galeria}>
          <Galery />
          <Populars />
        </div>
      </main>

      <Footer />
    </>
  );
}
