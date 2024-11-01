import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import ProductDetails from './pages/ProductDetails'
import { RouterProvider, createBrowserRouter} from 'react-router-dom'
import HomePage from './pages/HomePage.jsx'
import Cart from './pages/Cart.jsx'
import { ProductContextProvider } from './store/useProductsContext.jsx'
import { ThemeContextProvider } from './store/useThemeContext.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/:id',
    element: <ProductDetails />
  },
  {
    path: '/cart',
    element: <Cart />
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeContextProvider>
    <ProductContextProvider>
      <RouterProvider router={router} />
    </ProductContextProvider>
    </ThemeContextProvider>
  </StrictMode>,
)
