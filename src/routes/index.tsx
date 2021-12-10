import { FC } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { HomePage, ProductsPage } from '@pages'
import { Layout } from '@shared'

export const STATIC_ROUTES = {
  homepage: '/',
  products: '/products'
}

interface AppRoute {
  path: string
  component: FC
  layoutProps?: {
    hasHeader?: boolean
    hasFooter?: boolean
  }
}

const appRoutes: AppRoute[] = [
  { path: STATIC_ROUTES.homepage, component: HomePage, layoutProps: { hasHeader: false } },
  { path: STATIC_ROUTES.products, component: ProductsPage }
]

export const AppRouter = () => (
  <BrowserRouter>
    <Routes>
      {appRoutes.map((route) => (
        <Route
          path={route.path}
          element={
            <Layout {...route.layoutProps}>
              <route.component />
            </Layout>
          }
        />
      ))}
    </Routes>
  </BrowserRouter>
)
