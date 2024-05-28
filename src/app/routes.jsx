import { createBrowserRouter } from 'react-router-dom'
import { AdminCommunity, Community, HomePage, LoginPage, RegisterPage } from '@/pages'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />
  },
  {
    path: '/login',
    element: <LoginPage />
  },
  {
    path: '/register',
    element: <RegisterPage />
  },
  {
    path: '/community',
    element: <Community />
  },
  {
    path: '/admin-community',
    element: <AdminCommunity />
  }
])
