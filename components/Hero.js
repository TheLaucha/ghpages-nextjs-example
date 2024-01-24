import styles from "./Hero.module.css"

const Hero = () => {
  return (
    <section className={`container ${styles.home}`} id='home'>
      <header className={styles.presentation}>
        <h1 className={styles.presentation__title}>Nicolas Aguirre</h1>
        <h2 className={styles.presentation__subtitle}>Nutricion y Entrenamiento</h2>
        <p className={styles.presentation__paragraph}>
          Planificación nutricional, programación de entrenamientos, perdida de grasa corporal,
          aumento de masa muscular y mejora de salud.
        </p>
        <a href='#asesorias' className={`${styles.presentation__btn} ${styles.btn_home}`}>
          <span>QUIERO ASESORARME</span>
        </a>
      </header>
      <div className={styles.home_image}>
        <img className={styles.perfil_img} src='/assets/prefil.jpeg' alt='' />
      </div>
    </section>
  )
}

export default Hero
