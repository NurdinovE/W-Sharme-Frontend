import { Route, Routes, createBrowserRouter } from 'react-router-dom'
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
    element: <Profile isEdit={false} />
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

export const Rout = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/chat" element={<Chat />} />
      <Route path="/community" element={<Community />} />
      <Route path="/admin-community" element={<AdminCommunity />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/account/edit" element={<Profile isEdit={true} />} />
      <Route path="/account/settings" element={<Profile isEdit={false} />} />
    </Routes>
  )
}
