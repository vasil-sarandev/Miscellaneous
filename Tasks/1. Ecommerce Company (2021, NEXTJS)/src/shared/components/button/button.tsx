import { FC } from 'react'
import './button.scss'

interface ButtonProps {
  disabled?: boolean
  onClick: () => void
  label: string
  loading?: boolean
  type?: 'button' | 'reset' | 'submit'
}

export const Button: FC<ButtonProps> = ({ type = 'button', disabled, onClick, label, loading }) => {
  const handleClick = () => {
    if (!loading) onClick()
  }

  return (
    <button
      // eslint-disable-next-line react/button-has-type
      type={type}
      className={`button ${loading ? 'button--loading' : ''}${disabled ? 'button--disabled' : ''}`}
      onClick={handleClick}
    >
      {loading ? 'Loading...' : <>{label}</>}
    </button>
  )
}
