import React, { useCallback, useState } from 'react'
import styled from '@emotion/styled'

import { Card } from './Card'

export const Carousel = () => {
  const [{ currentCard }, setCard] = useState({
    currentCard: 1
  })

  const moveCarousel = useCallback(({ target: { name } }) => {
    setCard((state) => {
      let index = name === "left" ? Math.max(state.currentCard - 1, 0) : Math.min(state.currentCard + 1, 3)

      return ({
        ...state,
        currentCard: index
      })
    })
  }, [currentCard])

  return (
    <Wrapper>
      <LeftButton name="left" onClick={moveCarousel}>left</LeftButton>
      <InnerWrapper index={currentCard}>
        <Card>Number 1</Card>
        <Card>Number 2</Card>
        <Card>Number 3</Card>
        <Card>Number 4</Card>
      </InnerWrapper>
      <RightButton name="right" onClick={moveCarousel}>right</RightButton>
    </Wrapper>
  )
}

type Something = {
  index: number
}

const InnerWrapper = styled.div<Something>`
  display: flex;
  left: ${props => props.index * -100}%;
  position: relative;
  transition: 0.3s ease all;
  width: 400%;
`

const Wrapper = styled.div`
  align-items: center;
  overflow: hidden;
  position: relative;
`

//These below here are doing nothing, but I want them to do something. It is broken since I changed Wrapper display to flex.
const LeftButton = styled.button`
  position: absolute;
  top: 50%;
  left: 20px;
  transform: translateY(-50%);
  z-index: 1;
`

const RightButton = styled.button`
  position: absolute;
  top: 50%;
  right: 20px;
  transform: translateY(-50%);
  z-index: 1;
`