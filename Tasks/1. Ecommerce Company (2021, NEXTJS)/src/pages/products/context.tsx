/* eslint-disable no-unused-vars */
import { FC, useReducer, createContext, useContext } from 'react'
import { ProductsService } from '@api'
import { ProductType } from '@shared'

interface ContextState {
  data: ProductType[] | null
  loading: boolean
  addModalVisible: boolean
  addProductLoading: boolean
  updateProductLoading: boolean
  updateProductData: ProductType | null
}

interface ProductsContextPayload extends ContextState {
  fetchProducts: () => Promise<void>
  setAddModalVisible: (v: boolean) => void
  addProduct: (p: ProductType) => Promise<void>
  deleteProduct: (id: string) => Promise<void>
  updateProduct: (p: ProductType) => Promise<void>
  setUpdateProductData: (p: ProductType | null) => void
}

type Action =
  | { type: 'setData'; data: ProductType[] | null }
  | { type: 'setLoading'; loading: boolean }
  | { type: 'setAddModalVisible'; visible: boolean }
  | { type: 'setAddProductLoading'; loading: boolean }
  | { type: 'setUpdateProductLoading'; loading: boolean }
  | { type: 'setUpdateProductData'; product: ProductType | null }

const pageReducer = (state: ContextState, action: Action) => {
  switch (action.type) {
    case 'setData':
      return { ...state, data: action.data }
    case 'setLoading':
      return { ...state, loading: action.loading }
    case 'setAddModalVisible':
      return { ...state, addModalVisible: action.visible }
    case 'setAddProductLoading':
      return { ...state, addProductLoading: action.loading }
    case 'setUpdateProductLoading':
      return { ...state, addProductLoading: action.loading }
    case 'setUpdateProductData':
      return { ...state, updateProductData: action.product }
    default:
      throw new Error()
  }
}

const initialState = {
  data: null,
  loading: false,
  addModalVisible: false,
  addProductLoading: false,
  updateProductLoading: false,
  updateProductData: null
}

const ProductsContext = createContext<ProductsContextPayload>({
  ...initialState,
  fetchProducts: () => Promise.resolve(),
  setAddModalVisible: () => Promise.resolve(),
  addProduct: () => Promise.resolve(),
  deleteProduct: () => Promise.resolve(),
  updateProduct: () => Promise.resolve(),
  setUpdateProductData: () => Promise.resolve()
})

export const ProductsContextProvider: FC = ({ children }) => {
  const [state, dispatch] = useReducer(pageReducer, initialState)

  const {
    data,
    loading,
    addModalVisible,
    addProductLoading,
    updateProductLoading,
    updateProductData
  } = state

  const setLoading = (val: boolean) => dispatch({ type: 'setLoading', loading: val })
  const setData = (productsData: ProductType[] | null) =>
    dispatch({ type: 'setData', data: productsData })
  const setAddModalVisible = (val: boolean) =>
    dispatch({ type: 'setAddModalVisible', visible: val })
  const setAddProductLoading = (val: boolean) =>
    dispatch({ type: 'setAddProductLoading', loading: val })
  const setUpdateProductLoading = (val: boolean) =>
    dispatch({ type: 'setUpdateProductLoading', loading: val })
  const setUpdateProductData = (product: ProductType | null) =>
    dispatch({ type: 'setUpdateProductData', product })

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

  const addProduct = async (product: ProductType) => {
    setAddProductLoading(true)
    try {
      await ProductsService.addProduct(product)
    } catch (e) {
      throw new Error()
    } finally {
      setAddProductLoading(false)
    }
  }

  const deleteProduct = async (id: string) => {
    setLoading(true)
    try {
      await ProductsService.deleteProduct(id)
    } catch (e) {
      throw new Error()
    } finally {
      setLoading(false)
    }
  }

  const updateProduct = async (product: ProductType) => {
    setUpdateProductLoading(true)
    try {
      await ProductsService.modifyProduct(product)
    } catch (e) {
      throw new Error()
    } finally {
      setLoading(false)
    }
  }

  return (
    <ProductsContext.Provider
      value={{
        data,
        loading,
        fetchProducts,
        addModalVisible,
        setAddModalVisible,
        addProductLoading,
        addProduct,
        deleteProduct,
        updateProductLoading,
        updateProduct,
        updateProductData,
        setUpdateProductData
      }}
    >
      {children}
    </ProductsContext.Provider>
  )
}

export const useProjects = () => useContext(ProductsContext)
