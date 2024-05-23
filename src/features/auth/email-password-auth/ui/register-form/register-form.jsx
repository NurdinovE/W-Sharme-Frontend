import { PasswordInput, Title, Text, Button, Input, Paper } from '@mantine/core'
import classes from './register-form.module.css'
import { NavLink } from 'react-router-dom'
// import { useDispatch } from 'react-redux'
import React, { useState } from 'react'
// import { registerByUsername } from '../../model/services/registerByUsername.js'
import {
  createUserWithEmailAndPassword
  // signInWithEmailAndPassword,
} from 'firebase/auth'
import { auth } from '../../../../../app/firebase/firebase-config.js'

export function RegisterForm() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [checked, setChecked] = useState(false)
  // const dispatch = useDispatch()
  // const [formData, setFormData] = useState({
  //   firstName: '',
  //   lastName: '',
  //   username: '',
  //   email: '',
  //   password: ''
  // })
  // const handleChange = e => {
  //   setFormData({
  //     ...formData,
  //     [e.target.name]: e.target.value
  //   })
  // }

  // const handleSubmit = e => {
  //   console.log(formData)
  //   e.preventDefault()
  //   dispatch(registerByUsername(formData))
  // }

  const handleSignUp = () => {
    if (!email || !password) return
    createUserWithEmailAndPassword(auth, email, password)
      .then(userCredential => {
        const user = userCredential.user
        console.log(user)
      })
      .catch(error => {
        const errorCode = error.code
        const errorMessage = error.message
        console.log(errorCode, errorMessage)
      })
  }
  const handleEmailChange = event => setEmail(event.target.value)
  const handlePasswordChange = event => setPassword(event.target.value)

  return (
    <Paper className={classes.register_wrapper}>
      <Title order={2} ta="center" mb={'30px'}>
        Регистрация
      </Title>
      <form onSubmit={handleSignUp}>
        <Input
          name="email"
          placeholder="Эл.адрес"
          required
          size="md"
          styles={{
            input: {
              border: 'none',
              borderRadius: '10px',
              backgroundColor: '#f3f3f3',
              height: '50px'
            }
          }}
          // error={errors.username}
          onChange={event => handleEmailChange(event)}
          className={classes.input}
          // value={username}
        />
        <PasswordInput
          name="password"
          placeholder="Введите пароль"
          required
          // error={errors.password}
          mt="md"
          size="md"
          styles={{
            input: {
              border: 'none',
              borderRadius: '10px',
              backgroundColor: '#f3f3f3',
              height: '50px'
            }
          }}
          onClick={event => handlePasswordChange(event)}
          // value={password}
        />
        <div className={classes.checkbox}>
          <input
            className={classes.custom_checkbox}
            type="checkbox"
            onChange={() => {
              setChecked(!checked)
            }}
            checked={checked}
            name="checkbox"
          />
          <label htmlFor="checkbox">
            Я даю согласие на
            <a href="#" style={{ color: '#BA75FE', textDecoration: 'underline', marginLeft: '5px' }}>
              рассылку уведомлений.
            </a>
          </label>
        </div>
        <Button
          fullWidth
          size="lg"
          type="submit"
          styles={{
            root: {
              backgroundColor: '#BA75FE',
              transition: '0.3s',
              marginTop: '20px',
              marginBottom: '20px',
              '&:hover': {
                backgroundColor: '#BA75FE90'
              }
            }
          }}
        >
          Далее
        </Button>
      </form>
      <Text c="dimmed" size="sm" ta="center" mt={5}>
        <NavLink to="/login">Уже есть аккаунт? Нажмите для входа</NavLink>
      </Text>
    </Paper>
  )
}
