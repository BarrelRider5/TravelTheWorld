import React, { useCallback, useState } from 'react'
import styled from '@emotion/styled'

import { Register } from './Register'
import { Signin } from './Signin'

export const FormWrapper = () => {
  const [{ isRegister }, setForm] = useState({
    isRegister: true
  })

  const switchForm = useCallback(() => {
    setForm((state) => ({
      ...state,
      isRegister: !isRegister
    }))
  }, [isRegister])

  return (
    <Wrapper>
      <InnerWrapper>
        <Register switchForm={switchForm} />
        <Signin switchForm={switchForm} />
      </InnerWrapper>
    </Wrapper>
  )
}

const InnerWrapper = styled.div`
  display: flex;
  left: 0;
  position: relative;
  transition: 0.3s ease all;
  width: 200%;
`

const Wrapper = styled.div`
  max-width: 300px;
  overflow: hidden;
`
