import React from 'react'
import { HeaderMenu } from '@/widgets/header'
import { Menu } from '../../menu/ui/menu'

export const PageTemplate = ({ children }) => {
  return (
    <div>
      <HeaderMenu />
      <Menu />
      {children}
    </div>
  )
}
