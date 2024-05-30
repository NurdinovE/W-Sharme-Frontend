import React from 'react'
import { HeaderMenu } from '@/widgets/header'
import { Sidebar } from '../../sidebar'
import cls from './pagetemplate.module.scss'

export const PageTemplate = ({ children }) => {
  return (
    <div>
      <HeaderMenu />
      <div className="container">
        <div className={cls.pages}>
          <Sidebar />
          <div>{children}</div>
        </div>
      </div>
    </div>
  )
}
