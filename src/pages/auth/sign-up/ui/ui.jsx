import { RegisterForm } from '@/features/auth/email-password-auth/index.js'
import { signInWithPopup, createUserWithEmailAndPassword } from 'firebase/auth'
import { auth, db, googleProvider } from '../../../../app/firebase/firebase-config'
import { Button, Paper, Center, Title } from '@mantine/core'
import { useState } from 'react'
import { AuthTemplate } from '../../../../widgets/auth-widget'
import classes from './ui.module.css'
import { useNavigate } from 'react-router-dom'
import { doc, setDoc, getDoc, updateDoc } from 'firebase/firestore'

// Import Firestore functions
import { ProfileDataForm } from '../../../../features/auth/email-password-auth/ui/profile-data-form/profile-data-form'
import { useAuthState } from 'react-firebase-hooks/auth'

export function RegisterPage() {
  const [choice, setChoice] = useState(false)
  const [isUserExist, setIsUserExist] = useState(false)
  const [user] = useAuthState(auth)
  const navigate = useNavigate()

  const signInWithGoogle = async () => {
    try {
      const userCredential = await signInWithPopup(auth, googleProvider)
      const user = userCredential.user
      await setDoc(doc(db, 'users', user.email), {
        email: user.email,
        userid: user.uid,
        name: 'erzhan',
        username: 'sdsdfd',
        city: 'Osh',
        profilePictureUrl: '1',
        aboutYourself: 'das',
        phone: 'dsa',
        date: 'dsa',
        followers: [123, 123, 123],
        subscriptions: [123, 123, 123],
        rating: 5,
        stories: [],
        lastSeen: 4.2005
      })
      navigate('/')
    } catch (error) {
      const errorCode = error.code
      const errorMessage = error.message
      console.log(errorCode, errorMessage)
    }
  }

  const handleSignUp = async (email, password, checked) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password)
      const user = userCredential.user
      await setDoc(doc(db, 'users', user.email), {
        email: user.email,
        userid: user.uid,
        agreedToTerms: checked
      })
      setIsUserExist(true)
    } catch (error) {
      const errorCode = error.code
      const errorMessage = error.message
      console.log(errorCode, errorMessage)
    }
  }
  console.log(user?.email)

  const handleAddDoc = async (name, username, city) => {
    try {
      const docRef = doc(db, 'users', `${user.email}`)
      const docSnap = await getDoc(docRef)

      if (docSnap.exists()) {
        const userData = docSnap.data() // Extract the data from the document snapshot

        await updateDoc(docRef, {
          ...userData, // Spread existing user data if needed
          name,
          username,
          city,
          profilePictureUrl: '1',
          aboutYourself: 'das',
          phone: 'dsa',
          date: 'dsa',
          followers: [123, 123, 123],
          subscriptions: [123, 123, 123],
          rating: 5,
          stories: [],
          lastSeen: 4.2005
        })
      } else {
        console.log('No such document!')
      }
      navigate('/')
    } catch (error) {
      const errorCode = error.code
      const errorMessage = error.message
      console.log(errorCode, errorMessage)
    }
  }

  const pageLoad = () => {
    if (choice && isUserExist) {
      return <ProfileDataForm handleAddDoc={handleAddDoc} />
    } else if (choice) {
      return <RegisterForm handleSignUp={handleSignUp} />
    } else {
      return (
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
      )
    }
  }

  return (
    <AuthTemplate>
      <Center>{pageLoad()}</Center>
    </AuthTemplate>
  )
}
