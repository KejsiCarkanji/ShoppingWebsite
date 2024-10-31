import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
import ProductDetails from './pages/ProductDetails'
import { RouterProvider, createBrowserRouter} from 'react-router-dom'
import HomePage from './pages/HomePage.jsx'
import Cart from './pages/Cart.jsx'
import { ProductContextProvider } from './store/useProductsContext.jsx'

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
    <ProductContextProvider>
      <RouterProvider router={router} />
    </ProductContextProvider>
  </StrictMode>,
)
