import React, { useCallback, useState } from 'react'
import styled from '@emotion/styled'

import { Register } from './Register'
import { Signin } from './Signin'

export const FormWrapper = () => {
  const [{ isRegister }, setForm] = useState({
    isRegister: true
  })

  const switchForm = useCallback(() => {
    console.log('switching the form')
    setForm((state) => ({
      ...state,
      isRegister: !isRegister
    }))
  }, [isRegister])

  return (
    <Wrapper>
      <InnerWrapper isRegister={isRegister}>
        <Register switchForm={switchForm} />
        <Signin switchForm={switchForm} />
      </InnerWrapper>
    </Wrapper>
  )
}

type InnerWrapperProps = {
  isRegister: boolean
}

const InnerWrapper = styled.div<InnerWrapperProps>`
  display: flex;
  left: ${(props) => Number(!props.isRegister) * -100}%;
  position: relative;
  transition: 0.3s ease all;
  width: 200%;
`

const Wrapper = styled.div`
  max-width: 300px;
  overflow: hidden;
`
