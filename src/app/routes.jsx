import { createBrowserRouter } from 'react-router-dom'
import { AdminCommunity, Community, HomePage, LoginPage, RegisterPage, Profile, Chat } from '@/pages'
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
  },
  {
    path: '/profile',
    element: <Profile />
  },
  {
    path: '/account/edit',
    element: <Profile isEdit={true} />
  },
  {
    path: '/account/settings',
    element: <Profile isEdit={true} />
  }

  // {
  //   path: '/announcement',
  //   element: < />
  // },
  // {
  //   path: '/question',
  //   element: < />
  // },
])
