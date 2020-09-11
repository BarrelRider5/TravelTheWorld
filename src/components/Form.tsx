import React, { useCallback, useState } from 'react'
import styled from '@emotion/styled'

export const Form = () => {
  const [{ email, password }, setInputs] = useState({ email: '', password: '' })

  const onInputUpdate = useCallback(({ target: { name, value } }) => {
    setInputs((state) => ({
      ...state,
      [name]: value
    }))
  }, [])

  const submitForm = useCallback((event) => {
    event.preventDefault()

    console.log('submitting the form: ', email, ', ', password)
  }, [])

  return (
    <StyledForm>
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
  display: flex;
  flex-direction: column;
`
