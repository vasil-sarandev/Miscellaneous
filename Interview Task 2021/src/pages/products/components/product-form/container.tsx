import { FC, useState } from 'react'
import { useProjects } from '../../context'
import { ProductFormComponent } from './product-form'

export type ProductFormState = {
  id: string
  name: string
  description: string
  image: string
}

interface Props {
  loading: boolean
  buttonLabel: string
  // typescript eslint being funny - CBA to invest the time into investigating this.
  // eslint-disable-next-line no-unused-vars
  onSubmit: (form: ProductFormState) => void
}

const defaultState: ProductFormState = {
  id: '',
  name: '',
  description: '',
  image: ''
}

export const ProductForm: FC<Props> = ({ loading, onSubmit, buttonLabel }) => {
  const { updateProductData } = useProjects()
  const [state, setState] = useState<ProductFormState>(
    updateProductData ? (updateProductData as ProductFormState) : defaultState
  )

  const setField = (which: string) => (val: string) => {
    setState((prevState) => ({ ...prevState, [which]: val }))
  }

  return (
    <ProductFormComponent
      buttonLabel={buttonLabel}
      values={state}
      setField={setField}
      handleSubmit={() => onSubmit(state)}
      loading={loading}
      disableId={!!updateProductData}
    />
  )
}
