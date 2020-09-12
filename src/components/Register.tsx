import React, { FC, useCallback, useState } from 'react'
import cuid from 'cuid'
import styled from '@emotion/styled'

import { createUser, getUser } from '../api/users/users'

// type test = string | number | boolean | undefined | null | void
// type func = () => string
// type obj = { [key: string]: any }

interface Props {
  switchForm: () => void
}

export const Register: FC<Props> = ({ switchForm }) => {
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
      if (!email) return alert('Please enter a valid email')
      if (!password) return alert('Please enter a valid password')
      let user = await getUser(email)
      user = JSON.parse(user)
      if (user.length) return alert('This user already exists')

      let data = {
        email,
        password,
        user_id: cuid()
      }

      createUser(data)
    },
    [email, password]
  )

  return (
    <StyledForm>
      <span>Register</span>
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
        Already have an account?{' '}
        <Switcher onClick={switchForm}>Click here</Switcher> to sign in
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
  //Want to stop the form from following us down past the bottom of the background image.
`
