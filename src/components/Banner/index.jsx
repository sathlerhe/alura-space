import banner from "./banner.png";

import styles from './banner.module.scss'

export default function Banner() {
  return (
    <div className={styles.imagem}>
      <h1>A galeria mais completa do espaço</h1>
      <img src={banner} alt="A imagem da Terra vista do espaço" />
    </div>
  );
}
