import cuid from 'cuid'

import { attemptSignin, createUser, getUser } from '../api/users/users'

interface Register {
  user_id: string
}

interface Signin {
  userId: string
  error: string
}

export const register = async (data) => {
  const { email } = data
  let user = await getUser(email)
  console.log('user: ', email, ', ', user)
  user = JSON.parse(user)
  if (user.length) return alert('This user already exists')

  data = {
    ...data,
    user_id: cuid()
  }

  let initialResponse = await createUser(data)
  let response: Register = JSON.parse(initialResponse)

  localStorage.setItem('userId', response.user_id)
  window.location.reload()
}

export const signin = async (data) => {
  let initialResponse = await attemptSignin(data)
  let response: Signin = JSON.parse(initialResponse)

  if (response.userId) {
    localStorage.setItem('userId', response.userId)
    window.location.reload()
  } else if (response.error === 'email')
    alert('The email you have entered is not associated with an account')
  else alert('The password you have entered is incorrect')
}

export const signout = () => {
  if (window.confirm('Are you sure you want to sign out of this account?')) {
    localStorage.removeItem('userId')
    window.location.reload()
  }
}
