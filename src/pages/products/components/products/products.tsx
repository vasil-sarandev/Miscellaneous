import { FC } from 'react'
import { ProductType, RefreshIcon } from '@shared'
import { ProductsTable } from '../products-table'
import './products.scss'

interface Props {
  data: ProductType[] | null
  loading: boolean
  refresh: () => void
}

export const ProductsPageComponent: FC<Props> = ({ data, loading, refresh }) => (
  <div className='products-page'>
    <div className='products-page__actions'>
      <div className='product-page__refresh' onClick={refresh}>
        <RefreshIcon />
      </div>
      <div className='product-page__add-product'>Add Product</div>
    </div>
    <ProductsTable data={data} loading={loading} />
  </div>
)
