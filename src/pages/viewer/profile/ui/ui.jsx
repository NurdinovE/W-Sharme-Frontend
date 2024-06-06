import { PageTemplate } from '@/widgets/page-template'
import { auth } from '@/app/firebase/firebase-config'
import { useNavigate } from 'react-router-dom'
import { useAuthState } from 'react-firebase-hooks/auth'
import React, { useEffect, useState } from 'react'
import { doc, getDoc } from 'firebase/firestore'
import { db } from '@/app/firebase/firebase-config.js' // Adjust the import path as necessary
import { UserProfile } from '../../../../widgets/user-profile'

export function Profile({ isEdit }) {
  const [userData, setUserData] = useState(null)

  const navigate = useNavigate()

  const [user] = useAuthState(auth)
  console.log(user)
  if (!user) {
    navigate('/login')
  }

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const docRef = doc(db, 'users', `${user.email}`)
        const docSnap = await getDoc(docRef)
        if (docSnap.exists()) {
          const data = docSnap.data()
          setUserData(data)
        } else {
          console.log('No such document!')
        }
      } catch (error) {
        console.error('Error fetching document:', error)
      }
    }
    fetchUserData()
  }, [user?.email])

  return (
    <PageTemplate>
      <div className="container">
        <UserProfile userData={userData} isEdit={isEdit} />
      </div>
    </PageTemplate>
  )
}
