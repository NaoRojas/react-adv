import styles from '../styles/styles.module.css'
import noImage from '../assets/no-image.jpg'
import { useProduct } from '../custom-hook/useProduct'
export const ProductCard = () => {
  const { count, handleAdd, handleMinus } = useProduct()

  return (
    <div className={styles.productCard}>
      {/* <img
        className={styles.productImg}
        src="./coffee-mug.png"
        alt="Coffee Mug"
      /> */}
      <img className={styles.productImg} src={noImage} alt="No Image" />
      <span className={styles.productDescription}>Coffee Mug</span>
      <div className={styles.buttonsContainer}>
        <button
          className={styles.buttonMinus}
          onClick={() => handleMinus()}
          disabled={count === 0}
        >
          -
        </button>
        <div className={styles.countLabel}>{count}</div>
        <button className={styles.buttonAdd} onClick={() => handleAdd()}>
          +
        </button>
      </div>
    </div>
  )
}
