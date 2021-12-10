import { ProductType } from '@shared'

const API_DELAY = 500

const wait = () =>
  new Promise((resolve) => {
    setTimeout(resolve, API_DELAY)
  })

const getProductsData = async (): Promise<ProductType[]> => {
  await wait()
  // eslint-disable-next-line global-require
  const productsData = require('./products.json')
  return productsData
}

export const ProductsService = {
  getProductsData
}
