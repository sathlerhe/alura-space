import homeIcon from "../../assets/icones/home.png";
import moreLikedIcon from "../../assets/icones/mais-curtidas.png";
import moreViwedIcon from "../../assets/icones/mais-vistas.png";
import newestsIcon from "../../assets/icones/novas.png";
import surpriseMeIcon from "../../assets/icones/surpreenda.png";

import styles from "./menu.module.scss";

export default function Menu() {
  const links = [
    {
      title: "Início",
      icon: homeIcon,
      link: "",
      alt: "Ícone de uma casa",
    },
    {
      title: "Mais curtidas",
      icon: moreLikedIcon,
      link: "",
      alt: "Ícone com polegar para cima",
    },
    {
      title: "Mais vistas",
      icon: moreViwedIcon,
      link: "",
      alt: "Ícone de olho",
    },
    {
      title: "Novas",
      icon: newestsIcon,
      link: "",
      alt: "Ícone de estrela brilhando",
    },
    {
      title: "Surpreenda-me",
      icon: surpriseMeIcon,
      link: "",
      alt: "Ícone de lâmpada",
    },
  ];

  return (
    <nav className={styles.menu}>
      <ul className={styles.menu__lista}>
        {links.map((link) => (
          <li key={link.alt} className={styles.menu__item}>
            <img src={link.icon} alt={link.alt} />
            <a href={link.link}>{link.title}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
