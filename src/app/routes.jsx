import { createBrowserRouter } from 'react-router-dom'
import { Chat } from '@/pages/chat/chat'
import { AdminCommunity, Community, HomePage, LoginPage, RegisterPage } from '@/pages'
import { Profile } from '../pages/profile/profile'
import { Question } from '../pages/questions/question'
import { Announcement } from '../pages/announcement/announcement'
import { User } from '../pages/user/user'
import { MainCommunity } from '../pages/main-community/main-community'

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
    path: '/main-community',
    element: <MainCommunity />
  },
  {
    path: '/profile',
    element: <Profile />
  },
  {
    path: '/question',
    element: <Question />
  },
  {
    path: '/announcement',
    element: <Announcement />
  },
  {
    path: '/user',
    element: <User />
  }
])
