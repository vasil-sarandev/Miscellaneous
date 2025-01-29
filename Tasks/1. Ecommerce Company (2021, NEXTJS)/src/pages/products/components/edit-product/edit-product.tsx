import { FC } from 'react'
import { Modal, ProductType } from '@shared'
import { useProjects } from '../../context'
import { ProductForm } from '../product-form'
import './edit-product.scss'

export const EditProduct: FC = () => {
  const {
    updateProductLoading,
    updateProduct,
    fetchProducts,
    updateProductData,
    setUpdateProductData
  } = useProjects()

  const handleSubmit = async (product: ProductType) => {
    await updateProduct(product)
    // close the modal and refresh table once edit is successful.
    setUpdateProductData(null)
    fetchProducts()
  }

  return (
    <Modal
      visible={!!updateProductData}
      setVisible={() => {
        setUpdateProductData(null)
      }}
    >
      <div className='edit-product'>
        <div className='edit-product__title'>Edit Product</div>
        <ProductForm
          loading={updateProductLoading}
          onSubmit={handleSubmit}
          buttonLabel='Edit Product'
        />
      </div>
    </Modal>
  )
}
