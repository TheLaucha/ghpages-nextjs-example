import styles from "./Product.module.css"

const Product = ({ url_img, titulo, descripcion, precio }) => {
  const arrayDescripcion = descripcion.split("-")

  return (
    <div className={styles.product}>
      <img src={url_img} alt='product cover' className={styles.product__image} loading='lazy' />
      <div className={styles.product__info}>
        <div className={styles.top}>
          <h4 className={styles.product__title}>{titulo}</h4>
          {arrayDescripcion.map((item, i) => {
            return <p key={i}>{item}</p>
          })}
          <p className='product__price'>${precio}</p>
        </div>
        <div className='bottom'>
          <button className='btn_home btn_open_modal' data-target='modal'>
            SOLICITAR
          </button>
        </div>
      </div>
    </div>
  )
}

export default Product
