import { FC, useEffect } from 'react'
import { useProjects } from '../../context'
import { ProductsPageComponent } from './products'

export const ProductsContainer: FC = () => {
  const { fetchProducts } = useProjects()
  useEffect(() => {
    fetchProducts()
  }, [])
  return <ProductsPageComponent />
}
