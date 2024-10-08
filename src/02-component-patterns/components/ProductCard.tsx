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
interface ProductButtonsProps {
  count: number
  handleAdd: () => void
  handleMinus: () => void
}
export const ProductImage = ({ img = '' }) => {
  return (
    // eslint-disable-next-line jsx-a11y/img-redundant-alt
    <img
      className={styles.productImg}
      src={img ?? noImage}
      alt="Product Image"
    />
  )
}

export const ProductTitle = ({ title }: { title: string }) => {
  return <span className={styles.productDescription}>{title}</span>
}

export const ProductButtons = ({
  count,
  handleAdd,
  handleMinus,
}: ProductButtonsProps) => {
  return (
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
  )
}

export const ProductCard = ({ product }: ProductCardProps) => {
  const { count, handleAdd, handleMinus } = useProduct()

  return (
    <div className={styles.productCard}>
      <ProductImage img={product.img} />
      <ProductTitle title={product.title} />
      <ProductButtons
        count={count}
        handleAdd={handleAdd}
        handleMinus={handleMinus}
      />
    </div>
  )
}
