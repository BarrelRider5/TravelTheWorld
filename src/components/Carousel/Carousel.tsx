import React from 'react'
import styled from '@emotion/styled'

import { Card } from './Card'

export const Carousel = () => {
  return (
    <Wrapper>
      <LeftButton>left</LeftButton>
      <InnerWrapper>
        <Card>Number 1</Card>
        <Card>Number 2</Card>
        <Card>Number 3</Card>
        <Card>Number 4</Card>
      </InnerWrapper>
      <RightButton>right</RightButton>
    </Wrapper>
  )
}

const InnerWrapper = styled.div`
  display: flex;
  left: -50%;
  position: relative;
  transition: 0.3s ease all;
  width: 200%;
`

const Wrapper = styled.div`
  align-items: center;
  display: flex;
  overflow: hidden;
`
//These below here are doing nothing, but I want them to do something. It's broken since I changed Wrapper display to flex.
const LeftButton = styled.button`
  position: absolute;
  left: 20px;
`
const RightButton = styled.button`
  position: absolute;
  right: 20px;
`
