import popularsPics from './populars.json'

import styles from './populars.module.scss'

export default function Populars() {
  return (
    <aside className={styles.populares}>
      <h2>Populares</h2>
      <ul className={styles.populares__imagens}>
        {popularsPics.map(popular => (
          <li key={popular.id}>
            <img src={popular.path} alt={popular.alt} />
          </li>
        ))}
      </ul>

      <button>Ver mais fotos</button>
    </aside>
  )
}
