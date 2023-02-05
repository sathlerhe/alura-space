import { useState } from "react";

import Tags from "../Tags";
import Cards from "./Cards";
import styles from "./galery.module.scss";

import pictures from "./pictures.json";

export default function Galery() {
  const [items, setItems] = useState(pictures);
  const tags = [...new Set(pictures.map((picture) => picture.tag))];

  const filterPictures = (tag) => {
    const newPictures = pictures.filter((picture) => picture.tag === tag);

    setItems(newPictures);
  };

  return (
    <section className={styles.galeria}>
      <h2>Navegue pela galeria</h2>
      <Tags tags={tags} filterPictures={filterPictures} setItems={setItems} />
      <Cards items={items} styles={styles} />
    </section>
  );
}
