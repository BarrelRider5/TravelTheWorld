import React, { useCallback, useMemo, useState } from 'react'
import styled from '@emotion/styled'

export const Form = () => {
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
    (event) => {
      event.preventDefault()

      console.log('submitting the form: ', email, ', ', password)
    },
    [email, password]
  )

  return (
    <StyledForm>
      <span>Register below</span>
      <span>or</span>
      <span>Sign in to an existing account</span>
      <input
        name="email"
        placeholder="email"
        value={email}
        onChange={onInputUpdate}
      />
      <input
        name="password"
        placeholder="password"
        value={password}
        onChange={onInputUpdate}
        type="password"
      />
      <button onClick={submitForm}>Sign In</button>
    </StyledForm>
  )
}

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
  position: fixed;

  span {
    margin-bottom: 10px;
  }

  input {

  }
  //Want to stop the form from following us down past the bottom of the background image.
`
