import { RegisterForm } from '@/features/auth/email-password-auth/index.js'
import { signInWithPopup } from 'firebase/auth'
import { auth, googleProvider } from '../../../../app/firebase/firebase-config'
import { Button, Paper, Center, Title } from '@mantine/core'
import { useState } from 'react'
import { AuthTemplate } from '../../../../widgets/auth-widget'
import classes from './ui.module.css'

export function RegisterPage() {
  const [choice, setChoice] = useState(false)

  const signInWithGoogle = async () => {
    try {
      signInWithPopup(auth, googleProvider).then(data => {
        localStorage.setItem('email', data.user.email)
      })
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <AuthTemplate>
      <Center>
        {choice ? (
          <RegisterForm />
        ) : (
          <Paper className={classes.register_wrapper}>
            <Title order={2} ta="center" mb={'20px'}>
              Регистрация
            </Title>
            <Button
              fullWidth
              size="lg"
              onClick={signInWithGoogle}
              styles={{
                root: {
                  backgroundColor: '#4A51FF',
                  transition: '0.3s',
                  '&:hover': {
                    backgroundColor: '#4A51FF90'
                  }
                }
              }}
              className={classes.buttons}
            >
              Регистрация через Google
            </Button>
            <Button
              fullWidth
              onClick={() => setChoice(true)}
              mt="30px"
              className={classes.buttons}
              size="lg"
              styles={{
                root: {
                  backgroundColor: '#BA75FE',
                  transition: '0.3s',

                  '&:hover': {
                    backgroundColor: '#BA75FE90'
                  }
                }
              }}
            >
              Продолжить через почту
            </Button>
          </Paper>
        )}
      </Center>
    </AuthTemplate>
  )
}
