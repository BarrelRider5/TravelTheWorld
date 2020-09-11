import React, { useCallback, useState } from 'react'
import styled from '@emotion/styled'

export const Form = () => {
    const [{ email, password }, setInputs] = useState({
        email: '',
        password: ''
    })

    const onInputUpdate = useCallback(({ target: { name, value } }) => {
        setInputs(state => ({
            ...state,
            [name]: value
        }))
    })

    const submitForm = useCallback(event => {
        event.preventDefault()
        
        console.log('submitting the form: ', email, ', ', password)
    })

    return (
        <StyledForm>
            <Span>Register below</Span>
            <Span>or</Span>
            <Span>Sign in to an existing account</Span>
            <input name="email" placeholder="email" value={email} onChange={onInputUpdate} />
            <input name="password" placeholder="password" value={password} onChange={onInputUpdate} type="password" />
            <button onClick={submitForm}>Sign In</button>
        </StyledForm>
    )
}

const Span = styled.span`
    margin-bottom: 10px;
`

const StyledForm = styled.form`
    align-items: center;
    background: #1A9787;
    border: 1px solid white;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    margin: 50px 20px;
    opacity: 0.9;
    padding: 20px 35px;
    position: fixed;
    {
        //Want to stop the form from following us down past the bottom of the background image.
    }
`