import facebook from "./facebook.svg";
import twitter from "./twitter.svg";
import instagram from "./instagram.svg";

import styles from "./footer.module.scss";

export default function Footer() {
  const socialMedia = [
    {
      link: "https://www.facebook.com/AluraCursosOnline/",
      name: "Facebook",
      image: facebook,
    },
    {
      link: "https://twitter.com/aluraonline?lang=en",
      name: "twitter",
      image: twitter,
    },
    {
      link: "https://www.instagram.com/aluraonline/?hl=en",
      name: "instagram",
      image: instagram,
    },
  ];

  return (
    <footer className={styles.rodape}>
      <div className={styles.rodape__icones}>
        {socialMedia.map((sm) => (
          <a key={sm.name} href={sm.link} target="_blank" rel="noreferrer">
            <img src={sm.image} alt={`logo do ${sm.name}`} />
          </a>
        ))}
      </div>
      <p>Desenvolvido por Alura</p>
    </footer>
  );
}
