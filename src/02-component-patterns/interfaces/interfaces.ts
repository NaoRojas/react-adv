import { ReactElement } from 'react'
export interface Props {
  product: Product
  children?: ReactElement | ReactElement[]
}
export interface Product {
  id: string
  title: string
  img?: string
}
export interface ProductButtonsProps {
  count: number
  handleAdd: () => void
  handleMinus: () => void
}
export interface ProductContextProps {
  count: number
  handleAdd: () => void
  handleMinus: () => void
  product: Product
}
