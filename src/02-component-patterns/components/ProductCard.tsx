import styles from '../styles/styles.module.css'
import noImage from '../assets/no-image.jpg'
import { useProduct } from '../custom-hook/useProduct'
import { createContext, useContext } from 'react'
import { ProductContextProps, Props } from '../interfaces/interfaces'

const ProductContext = createContext({} as ProductContextProps)

const { Provider } = ProductContext

export const ProductImage = () => {
  const { product } = useContext(ProductContext)

  return (
    // eslint-disable-next-line jsx-a11y/img-redundant-alt
    <img
      className={styles.productImg}
      src={product.img ?? noImage}
      alt="Product Image"
    />
  )
}

export const ProductTitle = ({ title }: { title?: string }) => {
  const { product } = useContext(ProductContext)
  return (
    <span className={styles.productDescription}>{title ?? product.title}</span>
  )
}

export const ProductButtons = () => {
  const { count, handleAdd, handleMinus } = useContext(ProductContext)
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

export const ProductCard = ({ product, children }: Props) => {
  const { count, handleAdd, handleMinus } = useProduct()

  return (
    <div className={styles.productCard}>
      <Provider value={{ count, handleAdd, handleMinus, product }}>
        {children}
      </Provider>
    </div>
  )
}

ProductCard.Title = ProductTitle
ProductCard.Image = ProductImage
ProductCard.Buttons = ProductButtons
