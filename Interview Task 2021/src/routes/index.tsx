import { FC } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { HomePage, ProductsPage } from '@pages'
import { Layout, LayoutProps } from '@shared'

export const STATIC_ROUTES = {
  homepage: '/',
  products: '/products'
}

interface AppRoute {
  path: string
  component: FC
  layout: {
    component: FC
    props?: LayoutProps
  }
}

const appRoutes: AppRoute[] = [
  {
    path: STATIC_ROUTES.homepage,
    component: HomePage,
    layout: { component: Layout, props: { hasHeader: false } }
  },
  {
    path: STATIC_ROUTES.products,
    component: ProductsPage,
    layout: {
      component: Layout
    }
  }
]

export const AppRouter = () => (
  <BrowserRouter>
    <Routes>
      {appRoutes.map((route) => (
        <Route
          path={route.path}
          key={route.path}
          element={
            <route.layout.component {...route.layout.props}>
              <route.component />
            </route.layout.component>
          }
        />
      ))}
    </Routes>
  </BrowserRouter>
)
