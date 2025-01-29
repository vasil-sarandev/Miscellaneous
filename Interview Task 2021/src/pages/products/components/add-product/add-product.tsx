import { FC } from 'react'
import { Modal, ProductType } from '@shared'
import { useProjects } from '../../context'
import { ProductForm } from '../product-form'
import './add-product.scss'

export const AddProduct: FC = () => {
  const { addProductLoading, addProduct, fetchProducts, setAddModalVisible, addModalVisible } =
    useProjects()

  const handleSubmit = async (product: ProductType) => {
    await addProduct(product)
    // close the modal and refresh table once add is successful.
    setAddModalVisible(false)
    fetchProducts()
  }

  return (
    <Modal visible={addModalVisible} setVisible={setAddModalVisible}>
      <div className='add-product'>
        <div className='add-product__title'>Add Product</div>
        <ProductForm
          loading={addProductLoading}
          onSubmit={handleSubmit}
          buttonLabel='Add Product'
        />
      </div>
    </Modal>
  )
}
