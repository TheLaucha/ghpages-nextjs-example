import styles from "./Footer.module.css"

const Footer = () => {
  // Get year
  let currentYear = new Date().getFullYear()

  return (
    <footer className={`container ${styles.footer}`} id='contacto'>
      <h2 className='section__title'>Contacto</h2>
      <div className='social__media'>
        <a target='_blank' href='https://www.instagram.com/nickko.ok/'>
          <img className='social__media__logo' src='./assets/instagram.svg' alt='instagram icon' />
        </a>
        <a target='_blank' href='https://www.tiktok.com/@nicoaguirre.fit'>
          <img className='social__media__logo' src='./assets/tiktok.svg' alt='tiktok icon' />
        </a>
        <a
          target='_blank'
          href='https://api.whatsapp.com/send?phone=+5491144088053&text=HOLA%20BUEN%20DIA'
        >
          <img className='social__media__logo' src='./assets/wsp.png' alt='tiktok icon' />
        </a>
      </div>
      <p>
        Copyright <span className='year'>{currentYear}</span> © Nicolas Aguirre
      </p>
    </footer>
  )
}

export default Footer
