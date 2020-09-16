import React, { useCallback, useState } from 'react'
import styled from '@emotion/styled'

import { attemptSignin } from '../api/users/users'

interface Signin {
  userId: string
  error: string
}

export const Signin = ({ switchForm }) => {
  const [{ email, password }, setInputs] = useState({
    email: '',
    password: ''
  })

  const onInputUpdate = useCallback(({ target: { name, value } }) => {
    setInputs((state) => ({
      ...state,
      [name]: value
    }))
  }, [])

  const submitForm = useCallback(
    async (event) => {
      event.preventDefault()

      const data = {
        email,
        password
      }
      let initialResponse = await attemptSignin(data)
      let response: Signin = JSON.parse(initialResponse)

      if (response.userId) localStorage.setItem('userId', response.userId)
      else if (response.error === 'email')
        alert('The email you have entered is not associated with an account')
      else alert('The password you have entered is incorrect')
    },
    [email, password]
  )

  return (
    <StyledForm>
      <span>Sign In</span>
      <input
        name="email"
        placeholder="Email"
        value={email}
        onChange={onInputUpdate}
      />
      <input
        name="password"
        type="password"
        placeholder="Password"
        value={password}
        onChange={onInputUpdate}
      />
      <button onClick={submitForm}>Sign In</button>
      <p>
        Don't have an account?{' '}
        <Switcher onClick={switchForm}>Click here</Switcher> to create an
        account
      </p>
    </StyledForm>
  )
}

const Switcher = styled.a`
  color: #005;
  cursor: pointer;
  text-decoration: underline;
`

const StyledForm = styled.form`
  align-items: center;
  background: #1a9787;
  border: 1px solid white;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  margin: 50px 20px;
  opacity: 0.9;
  padding: 20px 35px;

  span {
    margin-bottom: 10px;
  }
  //Want to stop the form from following us down past the bottom of the background image.
`
