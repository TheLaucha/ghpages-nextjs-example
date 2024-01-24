import styles from "./Card.module.css"

const Card = ({ href, title, body }) => {
  return (
    <li className={styles.linkCard}>
      <a href={href}>
        <h2>
          {title}
          <span>&rarr;</span>
        </h2>
        <p>{body}</p>
      </a>
    </li>
  )
}

export default Card
