import React from "react";

import styles from "./tags.module.scss";

import pictures from '../Galery/pictures.json'

export default function Tags({ tags, filterPictures, setItems }) {
  return (
    <div className={styles.tags}>
      <p>Filtre por tags:</p>
      <ul className={styles.tags__lista}>
        {tags.map((tag) => (
          <li key={tag} onClick={() => filterPictures(tag)}>
            {tag}
          </li>
        ))}

        <li onClick={() => setItems(pictures)}>Todas</li>
      </ul>
    </div>
  );
}
