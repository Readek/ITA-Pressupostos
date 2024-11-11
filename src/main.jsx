import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './assets/index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Root from './routes/root.jsx'
import ErrorPage from './error-page.jsx'
import App from './routes/App.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    errorElement: <ErrorPage />,
  },
  {
    path: "/Pressupostos",
    element: <App/>,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
