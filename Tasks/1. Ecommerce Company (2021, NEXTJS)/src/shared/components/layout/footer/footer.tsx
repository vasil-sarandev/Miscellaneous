import { FC } from 'react'
import { Link } from 'react-router-dom'
import { STATIC_ROUTES } from '@routes'
import { FacebookIcon, InstagramIcon } from '@shared'
import './footer.scss'

type FooterLinks = {
  label: string
  to: string
}[]

export const Footer: FC = () => {
  const footerLinks: FooterLinks = [
    { label: 'Начало', to: STATIC_ROUTES.homepage },
    { label: 'Продукти', to: STATIC_ROUTES.products }
  ]

  return (
    <footer className='footer'>
      <div className='footer__inner'>
        <div className='footer__left'>
          <div className='footer__navigation-title'>Навигация</div>
          <div className='footer__navigation-links'>
            {footerLinks.map((link) => (
              <div className='footer__navigation-link' key={link.to}>
                <Link to={link.to}>{link.label}</Link>
              </div>
            ))}
          </div>
        </div>
        <div className='footer__middle'>
          <div className='footer__socials'>
            <div>
              <a href='https://facebook.com' target='_blank' rel='noreferrer'>
                <FacebookIcon />
              </a>
            </div>
            <div>
              <a href='https://instagram.com' target='_blank' rel='noreferrer'>
                <InstagramIcon />
              </a>
            </div>
          </div>
        </div>
        <div className='footer__right'>
          <Link to={STATIC_ROUTES.homepage}>
            <div className='footer__logo'>kidso.bg</div>
          </Link>
        </div>
      </div>
    </footer>
  )
}
