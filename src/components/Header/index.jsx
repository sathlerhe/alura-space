import Logo from "./logo.png";
import Search from "./search.png";

import styles from "./header.module.scss";

export default function Header() {
  return (
    <header className={styles.cabecalho}>
      <img src={Logo} alt="Alura Space" />
      <div className={styles.cabecalho__container}>
        <input
          className={styles.cabecalho__input}
          type="text"
          placeholder="O que você procura?"
        />
        <img src={Search} alt="ícone de lupa" />
      </div>
    </header>
  );
}
