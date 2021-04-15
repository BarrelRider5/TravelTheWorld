import React from 'react'
import { FormWrapper } from '../components/FormWrapper'
import styled from '@emotion/styled'
import { Carousel } from '../components/Carousel/Carousel'
import { TestProfile } from '../components/testprofile'

export const Home = () => {
  return (
    <div>
      <Wrapper>
        <div>This is the home page</div>
        <div>Welcome Aboard, Explorers!</div>
        <FormWrapper />
      </Wrapper>
      <TestProfile />
      <Carousel />
    </div>
  )
}

const Wrapper = styled.div`
  align-items: center;
  background: url(https://images-na.ssl-images-amazon.com/images/I/81C4RPMZMXL._AC_SL1500_.jpg)
    center center no-repeat;
  background-size: cover;
  display: flex;
  height: 1000px;
  flex-direction: column;
`
