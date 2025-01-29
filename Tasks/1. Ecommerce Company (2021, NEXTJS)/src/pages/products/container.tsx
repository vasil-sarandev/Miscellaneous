import { FC } from 'react'
import { ProductsContainer, AddProduct, EditProduct } from './components'
import { ProductsContextProvider } from './context'

export const ProductsPage: FC = () => (
  <ProductsContextProvider>
    <ProductsContainer />
    <AddProduct />
    <EditProduct />
  </ProductsContextProvider>
)
