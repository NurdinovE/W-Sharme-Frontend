import { createBrowserRouter } from 'react-router-dom'
import { Chat } from '@/pages/chat/chat'
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
    path: '/chat',
    element: <Chat />
  },
  {
    path: '/community',
    element: <Community />
  },
  {
    path: '/admin-community',
    element: <AdminCommunity />
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
