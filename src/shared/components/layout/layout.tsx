import { FC } from 'react'
import { Footer } from './footer'
import { Header } from './header'
import './layout.scss'

export interface LayoutProps {
  hasHeader?: boolean
  hasFooter?: boolean
}

export const Layout: FC<LayoutProps> = ({ hasHeader = true, hasFooter = true, children }) => (
  <div className='layout'>
    {hasHeader && <Header />}
    <main className='layout__main'>{children}</main>
    {hasFooter && (
      <div className='layout__footer'>
        <Footer />
      </div>
    )}
  </div>
)
