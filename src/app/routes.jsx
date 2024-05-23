import { createBrowserRouter } from 'react-router-dom'
import { HomePage, LoginPage, RegisterPage } from '@/pages'
import { Chat } from '../pages/chat/chat'

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
    path: '/chat',
    element: <Chat />
  }
  // {
  //   path: '/announcement',
  //   element: < />
  // },
  // {
  //   path: '/community',
  //   element: < />
  // },
  // {
  //   path: '/question',
  //   element: < />
  // },
  // {
  //   path: '/profile',
  //   element: < />
  // }
])
