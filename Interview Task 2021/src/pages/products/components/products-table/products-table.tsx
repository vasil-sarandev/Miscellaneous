import { FC } from 'react'
import { DeleteIcon, EditIcon, ProductType } from '@shared'
import { useProjects } from '../../context'
import './products-table.scss'

interface Props {
  data: ProductType[] | null
  loading: boolean
}

export const ProductsTable: FC<Props> = ({ data, loading }) => {
  const { deleteProduct, fetchProducts, setUpdateProductData } = useProjects()

  const tableData = !data && loading ? Array(10).fill({}) : data

  const handleDelete = async (id: string) => {
    await deleteProduct(id)
    fetchProducts()
  }

  return (
    <div className='products-table'>
      <table>
        <colgroup>
          <col span={1} style={{ width: '5%' }} />
          <col span={1} style={{ width: '15%' }} />
          <col span={1} style={{ width: '25%' }} />
          <col span={1} style={{ width: '50%' }} />
          <col span={1} style={{ width: '5%' }} />
        </colgroup>
        <thead>
          <tr>
            <th> </th>
            <th>ID</th>
            <th>Name</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {tableData ? (
            tableData.map((row, index) => (
              <tr key={row.id ? row.id : index}>
                <td className='products-table__product-image'>
                  {loading ? (
                    <>...</>
                  ) : (
                    <img
                      src={row.image ? row.image : 'https://via.placeholder.com/24'}
                      alt='product media'
                    />
                  )}
                </td>
                <td className='products-table__product-id'>{loading ? <>...</> : <>{row.id}</>}</td>
                <td className='products-table__product-name'>
                  {loading ? <>...</> : <>{row.name}</>}
                </td>
                <td className='products-table__product-description'>
                  {loading ? <>...</> : <>{row.description}</>}
                </td>
                <td className='products-table__product-actions'>
                  {loading ? (
                    <>...</>
                  ) : (
                    <>
                      <div onClick={() => setUpdateProductData(row)}>
                        <EditIcon />
                      </div>
                      <div onClick={() => handleDelete(row.id)}>
                        <DeleteIcon />
                      </div>
                    </>
                  )}
                </td>
              </tr>
            ))
          ) : (
            <>No products found.</>
          )}
        </tbody>
      </table>
    </div>
  )
}
