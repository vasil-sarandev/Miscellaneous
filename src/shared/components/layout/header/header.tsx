import { STATIC_ROUTES } from '@routes'
import { FC } from 'react'
import { Link } from 'react-router-dom'
import { ProfileIcon } from '@shared'
import './header.scss'

export const Header: FC = () => (
  <div className='header'>
    <div className='header__inner'>
      <div className='header__left'>
        <Link to={STATIC_ROUTES.homepage}>
          <div className='header__logo'>kidso.bg</div>
        </Link>
      </div>
      <div className='header__right'>
        <div className='header__profile-icon'>
          <ProfileIcon />
        </div>
      </div>
    </div>
  </div>
)
