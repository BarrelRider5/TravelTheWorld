import React from 'react'
import styled from '@emotion/styled'

import { Card } from './Card'

export const Carousel = () => {

  return (
    <Wrapper>
      <button>left</button>
      <InnerWrapper>
        <Card>Number 1</Card>
        <Card>Number 2</Card>
        <Card>Number 3</Card>
        <Card>Number 4</Card>
      </InnerWrapper>
      <button>right</button>
    </Wrapper>
  )
}

const InnerWrapper = styled.div`
    display: flex;
    left: -50%;
    position: relative;
    transition: .3s ease all;
    width: 200%;
`

const Wrapper = styled.div`
    overflow: hidden;
`
