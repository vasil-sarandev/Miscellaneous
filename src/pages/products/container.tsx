import { FC, useEffect, useReducer } from 'react'
import { ProductsService } from '@api'
import { ProductType } from '@shared'
import { ProductsPageComponent } from './components'

interface ProductsPageState {
  data: ProductType[] | null
  loading: boolean
}

type Action =
  | { type: 'setData'; data: ProductType[] | null }
  | { type: 'setLoading'; loading: boolean }

const pageReducer = (state: ProductsPageState, action: Action) => {
  switch (action.type) {
    case 'setData':
      return { ...state, data: action.data }
    case 'setLoading':
      return { ...state, loading: action.loading }
    default:
      throw new Error()
  }
}

const initialState = {
  data: null,
  loading: false
}

const ProductsPageContainer: FC = () => {
  const [state, dispatch] = useReducer(pageReducer, initialState)

  const { data, loading } = state

  const setLoading = (val: boolean) => dispatch({ type: 'setLoading', loading: val })
  const setData = (productsData: ProductType[] | null) =>
    dispatch({ type: 'setData', data: productsData })

  const fetchProducts = async () => {
    setLoading(true)
    try {
      const resp = await ProductsService.getProductsData()
      setData(resp)
    } catch (e) {
      throw new Error()
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchProducts()
  }, [])

  return <ProductsPageComponent data={data} loading={loading} refresh={fetchProducts} />
}

export { ProductsPageContainer as ProductsPage }
