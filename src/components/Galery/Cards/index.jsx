import favorite from "./favorito.png";
import open from "./open.png";

export default function Cards({ items, styles }) {
  return (
    <ul className={styles.galeria__cards}>
      {items.map((item) => (
        <li key={item.id} className={styles.galeria__card}>
          <img
            src={item.imagem}
            alt={item.titulo}
            className={styles.galeria__imagem}
          />
          <p className={styles.galeria__descricao}>{item.titulo}</p>
          <div>
            <p>{item.creditos}</p>
            <span>
              <img src={favorite} alt="Ícone de curtir" />
              <img src={open} alt="Ícone de abrir modal" />
            </span>
          </div>
        </li>
      ))}
    </ul>
  );
}
