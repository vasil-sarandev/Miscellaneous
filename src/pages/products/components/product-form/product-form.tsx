import { FC } from 'react'
import { Button, TextField } from '@shared'
import { ProductFormState } from './container'
import './product-form.scss'

interface Props {
  values: ProductFormState
  handleSubmit: () => void
  loading: boolean
  disableId?: boolean
  buttonLabel: string
  // typescript eslint being funny - CBA to invest the time into investigating this.
  // eslint-disable-next-line no-unused-vars
  setField: (k: string) => (v: string) => void
}

export const ProductFormComponent: FC<Props> = ({
  values,
  setField,
  handleSubmit,
  loading,
  disableId = false,
  buttonLabel
}) => {
  const formSubmit = (e: any) => {
    e.preventDefault()
    handleSubmit()
  }

  return (
    <div className='product-form'>
      <form onSubmit={formSubmit}>
        <TextField
          label='ID'
          value={values.id}
          onChange={setField('id')}
          required
          disabled={disableId}
        />
        <TextField label='Name' value={values.name} onChange={setField('name')} required />
        <TextField
          label='Description'
          value={values.description}
          onChange={setField('description')}
          required
        />
        <TextField label='Image' value={values.image} onChange={setField('image')} type='url' />
        <div className='product-form__submit'>
          <Button label={buttonLabel} onClick={() => {}} type='submit' loading={loading} />
        </div>
      </form>
    </div>
  )
}
