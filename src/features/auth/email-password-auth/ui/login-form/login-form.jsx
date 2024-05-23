// import { useDispatch, useSelector } from 'react-redux'
import { memo, useState } from 'react'
// import { loginActions } from '../../model/slice/loginSlice.js'
// import { getLoginState } from '@/features/auth/email-password-auth/model/selectors/getLoginState.js'
// import { loginByUsername } from '../../model/services/loginByUsername'
import { Paper, Input, PasswordInput, Button, Title, Text, Center } from '@mantine/core'
import classes from './login-form.module.css'
import { NavLink } from 'react-router-dom'
import {
  // createUserWithEmailAndPassword
  signInWithEmailAndPassword
} from 'firebase/auth'
import { auth } from '../../../../../app/firebase/firebase-config.js'

export const LoginForm = memo(() => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  // const [isSignUpActive, setIsSignUpActive] = useState(true);
  // const handleMethodChange = () => {
  //   setIsSignUpActive(!isSignUpActive);
  // };

  const handleSignIn = () => {
    if (!email || !password) return
    signInWithEmailAndPassword(auth, email, password)
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

  const handleEmailChange = event => setEmail(event)
  const handlePasswordChange = event => setPassword(event)

  // const dispatch = useDispatch()
  // const { username, password, error, isLoading } = useSelector(getLoginState)
  // const [errors, setErrors] = useState({
  //   username: '',
  //   password: ''
  // })
  // const onChangeUsername = useCallback(
  //   value => {
  //     dispatch(loginActions.setUsername(value))

  //     if (value.length < 3) {
  //       setErrors(prevErrors => ({ ...prevErrors, username: 'Логин должен содержать не менее 3 символов' }))
  //     } else {
  //       setErrors(prevErrors => ({ ...prevErrors, username: '' }))
  //     }
  //   },
  //   [dispatch]
  // )

  // const onChangePassword = useCallback(
  //   value => {
  //     dispatch(loginActions.setPassword(value))

  //     // Ваша логика валидации для пароля
  //     const isLengthValid = value.length >= 8
  //     const hasNumber = /\d/.test(value)
  //     const hasUppercase = /[A-Z]/.test(value)

  //     if (!isLengthValid) {
  //       setErrors(prevErrors => ({ ...prevErrors, password: 'Пароль должен содержать не менее 8 символов' }))
  //     } else if (!hasNumber) {
  //       setErrors(prevErrors => ({ ...prevErrors, password: 'Пароль должен содержать хотя бы одну цифру' }))
  //     } else if (!hasUppercase) {
  //       setErrors(prevErrors => ({
  //         ...prevErrors,
  //         password: 'Пароль должен содержать хотя бы одну букву в верхнем регистре'
  //       }))
  //     } else {
  //       setErrors(prevErrors => ({ ...prevErrors, password: '' }))
  //     }
  //   },
  //   [dispatch]
  // )

  // console.log(username, password, error, isLoading)

  // const onLoginClick = useCallback(() => {
  //   if (!username || !password || errors.username || errors.password) return
  //   dispatch(loginByUsername({ username, password }))
  // }, [dispatch, password, username, errors])

  return (
    <>
      <Center>
        <Paper className={classes.form} p={30}>
          <Center>
            <Paper style={{ boxShadow: '0 4px 34px #00000010' }} w={'500px'} h={'400px'} radius={'30px'} p={'50px'}>
              <Title order={2} className={classes.title} ta="center" mt="md" mb={30}>
                Вход
              </Title>
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
                onChange={event => handleEmailChange(event.currentTarget.value)}
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
                onChange={event => handlePasswordChange(event.currentTarget.value)}
                // value={password}
              />
              <p className={classes.forgotPassword}>Забыли пароль?</p>
              {/* <Checkbox label="Запомнить меня" mt="xl" size="md" /> */}
              <Button fullWidth mt="xl" size="md" onClick={handleSignIn} className={classes.button}>
                Войти
              </Button>
              <Text className={classes.register} fw={500} onClick={event => event.preventDefault()}>
                <NavLink to="/register"> Регистрация </NavLink>
              </Text>
            </Paper>
          </Center>
        </Paper>
      </Center>
    </>
  )
})
