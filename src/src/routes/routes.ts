import { lazy } from "react"
import NoLazy from "../01-lazyload/pages/NoLazy"


const loadLayout = lazy(() => import('../01-lazyload/pages/LazyLayout'))

export const routes = [
  {
    path: '/lazy-load/*',
    to: '/lazy-load/',
    name: 'Lazy Load',
    Component: loadLayout,
  },
  {
    path: 'no-lazy',
    to: '/no-lazy',
    name: 'No Lazy',
    Component: NoLazy
  }

]