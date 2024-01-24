import React from "react"
import styles from "./Logo.module.css"

const Logo = () => {
  return (
    <div className={styles.wrapper}>
      <a href='/#' data-text='N'></a>
      <a href='/#' data-text='A'></a>
    </div>
  )
}

export default Logo
