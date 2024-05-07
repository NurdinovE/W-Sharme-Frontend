import {createSlice} from '@reduxjs/toolkit'

const initialState = {
  username: '',
  password: '',
  email: '',
  firstName: '',
  lastName: '',
  agreedToTerms: false,
  isLoading: false,
  error: false
}

export const registrationSlice = createSlice({
  name: 'registration',
  initialState,
  reducers: {
    setUsername: (state, action) => {
      state.username = action.payload
    },
    setPassword: (state, action) => {
      state.password = action.payload
    },
    setEmail: (state, action) => {
      state.email = action.payload
    },
    setFirstName: (state, action) => {
      state.firstName = action.payload
    },
    setLastName: (state, action) => {
      state.lastName = action.payload
    },
    setAgreedToTerms: (state, action) => {
      state.agreedToTerms = action.payload
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload
    }
  }
})

export const {actions: registerActions} = registrationSlice
export const {reducer: registerReducer} = registrationSlice
