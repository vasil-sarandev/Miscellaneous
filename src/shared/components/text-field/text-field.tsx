import { FC } from 'react'
import './text-field.scss'

interface Props {
  value?: string
  // typescript eslint being funny - CBA to invest the time into investigating this.
  // eslint-disable-next-line no-unused-vars
  onChange: (val: string) => void
  disabled?: boolean
  label?: string
  required?: boolean
  type?: string
}

export const TextField: FC<Props> = ({
  value,
  onChange,
  disabled,
  label,
  required,
  type = 'text'
}) => {
  const handleChange = (e: any) => {
    onChange(e.target.value)
  }
  return (
    <div className='text-field'>
      {label && <div className='text-field__label'>{label}</div>}
      <input
        type={type}
        value={value}
        onChange={handleChange}
        disabled={disabled}
        required={required}
      />
    </div>
  )
}
