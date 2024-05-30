import React from 'react'
// import classes from './menu.module.css'
import { Button, SimpleGrid } from '@mantine/core'

export const Menu = () => {
  return (
    <SimpleGrid cols={1} spacing="xs" verticalSpacing="xs" style={{ position: 'absolute' }}>
      <Button variant="transparent">
        {/* leftIcon={`${icon}`} */}
        Button 1
      </Button>
      <Button variant="transparent">Button 1</Button>
      <Button variant="transparent">Button 1</Button>
      <Button variant="transparent">Button 1</Button>
      <Button variant="transparent">Button 1</Button>
    </SimpleGrid>
  )
}
