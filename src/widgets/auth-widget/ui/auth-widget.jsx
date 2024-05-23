import React from 'react'
import classes from './auth-widget.module.css'
import { Paper } from '@mantine/core'

export const AuthTemplate = ({ children }) => {
  return (
    <div className={classes.wrapper}>
      {children}
      <Paper className={classes.image}></Paper>
    </div>
  )
}
