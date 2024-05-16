import { TextInput, PasswordInput, Anchor, Title, Text, Container, Button } from '@mantine/core'
import classes from './register-form.module.css'
import { NavLink } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import React, { useState } from 'react'
import { registerByUsername } from '../../model/services/registerByUsername.js'

export function RegisterForm() {
  const dispatch = useDispatch()
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    password: ''
  })
  const handleChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = e => {
    console.log(formData)
    e.preventDefault()
    dispatch(registerByUsername(formData))
  }

  return (
    <Container size={420} my={40}>
      <Title ta="center" className={classes.title}>
        Регистрация
      </Title>
      <Text c="dimmed" size="sm" ta="center" mt={5}>
        У вас уже есть аккаунт?{' '}
        <Anchor size="sm" component="button">
          <NavLink to="/login">Войти</NavLink>
        </Anchor>
      </Text>

      <form onSubmit={handleSubmit}>
        <TextInput
          label="Username"
          placeholder="Username"
          name="username"
          value={formData.username}
          onChange={handleChange}
        />
        <TextInput
          label="firstName"
          placeholder="firstName"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
        />
        <TextInput
          label="lastName"
          placeholder="lastName"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
        />
        <TextInput label="email" placeholder="email" name="email" value={formData.email} onChange={handleChange} />
        <PasswordInput
          label="Password"
          placeholder="Password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
        <Button variant="filled" color="yellow" type="submit">
          Зарегистрироваться
        </Button>
      </form>
    </Container>
  )
}
