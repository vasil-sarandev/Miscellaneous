import { FC } from 'react'
import { Button, RefreshIcon } from '@shared'
import { ProductsTable } from '../products-table'
import { useProjects } from '../../context'
import './products.scss'

export const ProductsPageComponent: FC = () => {
  const { data, loading, fetchProducts, setAddModalVisible } = useProjects()
  return (
    <div className='products-page'>
      <div className='products-page__actions'>
        <div className='products-page__refresh' onClick={fetchProducts}>
          <RefreshIcon />
        </div>
        <div className='products-page__add-product'>
          <Button onClick={() => setAddModalVisible(true)} label='Add Product' />
        </div>
      </div>
      <ProductsTable data={data} loading={loading} />
    </div>
  )
}
