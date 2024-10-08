import { ProductCard } from '../components/ProductCard'

const product = {
  id: '1',
  title: 'Coffee Mug',
  img: './coffee-mug.png',
}
export const ShoppingPage = () => {
  return (
    <div>
      <h1>Shopping Page</h1>
      <hr />
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '20px',
          flexWrap: 'wrap',
        }}
      >
        <ProductCard product={product}>
          <ProductCard.Image />
          <ProductCard.Title />
          <ProductCard.Buttons />
        </ProductCard>
        <ProductCard product={product}>
          <ProductCard.Image />
          <ProductCard.Title title="Hola" />
          <ProductCard.Buttons />
        </ProductCard>
        <ProductCard product={product}>
          <ProductCard.Image />
          <ProductCard.Title />
          <ProductCard.Buttons />
        </ProductCard>
      </div>
    </div>
  )
}
