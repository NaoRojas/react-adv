import styles from '../styles/styles.module.css'
import noImage from '../assets/no-image.jpg'
import { useProduct } from '../custom-hook/useProduct'

interface ProductCardProps {
  product: Product
}
interface Product {
  id: string
  title: string
  img?: string
}

export const ProductCard = ({ product }: ProductCardProps) => {
  const { count, handleAdd, handleMinus } = useProduct()

  return (
    <div className={styles.productCard}>
      <img className={styles.productImg} src={product.img ?? noImage} />
      <span className={styles.productDescription}>{product.title}</span>
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
