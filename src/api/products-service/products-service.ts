/* eslint-disable global-require */
import { ProductType } from '@shared'

const API_DELAY = 500

const wait = () =>
  new Promise((resolve) => {
    setTimeout(resolve, API_DELAY)
  })

const getProductsData = async (): Promise<ProductType[]> => {
  await wait()
  // eslint-disable-next-line no-undef
  const productsFromLocalStorage = localStorage.getItem('products_data')
  const productsData = productsFromLocalStorage
    ? JSON.parse(productsFromLocalStorage)
    : require('./products.json')
  return productsData
}

const addProduct = async (product: ProductType): Promise<void> => {
  const products = await getProductsData()
  const newProducts = [...products, product]
  // eslint-disable-next-line no-undef
  localStorage.setItem('products_data', JSON.stringify(newProducts))
}

const deleteProduct = async (id: string): Promise<void> => {
  const products = await getProductsData()
  const newProducts = products.filter((p) => p.id !== id)
  // eslint-disable-next-line no-undef
  localStorage.setItem('products_data', JSON.stringify(newProducts))
}

const modifyProduct = async (product: ProductType): Promise<void> => {
  const products = await getProductsData()
  const match = products.find((p) => p.id === product.id)
  const index = products.indexOf(match as ProductType)
  const newProducts = [
    ...products.slice(0, index),
    product,
    ...products.slice(index + 1, products.length)
  ]
  // eslint-disable-next-line no-undef
  localStorage.setItem('products_data', JSON.stringify(newProducts))
}

export const ProductsService = {
  getProductsData,
  addProduct,
  modifyProduct,
  deleteProduct
}
