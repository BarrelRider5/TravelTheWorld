import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import React, { useCallback, useState } from 'react'
import styled from '@emotion/styled'

import { Card } from './Card'
import { CardData } from './CardData'

export const Carousel = () => {
  const [{ isAnimating, sliderPosition, slides }, setCarousel] = useState({
    isAnimating: false,
    sliderPosition: -100,
    slides: CardData
  })

  const speed = .5

  const moveCarousel = useCallback(({ target: { name } }) => {
    if (isAnimating) return

    let index = name === 'left' ? -1 : 1
    let sliderIncrement = name === 'left' ? 100 : -100

    setCarousel(state => ({
      ...state,
      isAnimating: true,
      sliderPosition: state.sliderPosition + sliderIncrement
    }))
    setTimeout(() => setCarousel(state => ({
      ...state,
      isAnimating: false,
      sliderPosition: state.sliderPosition - sliderIncrement,
      slides: state.slides.slice(index).concat(state.slides.slice(0, index))
    })), speed * 1000)


  }, [isAnimating, sliderPosition, slides])

  return (
    <Wrapper>
      <LeftButton name="left" onClick={moveCarousel}>
        <FontAwesomeIcon icon={faAngleLeft} />
      </LeftButton>
      <InnerWrapper position={sliderPosition} slideCount={slides.length} sliding={isAnimating} speed={speed}>
        {
          slides.map((card, index) => <Card key={index}>{card.text}</Card>)
        }
      </InnerWrapper>
      <RightButton name="right" onClick={moveCarousel}>
        <FontAwesomeIcon icon={faAngleRight} />
      </RightButton>
    </Wrapper>
  )
}
//<FontAwesomeIcon icon={fas fa-angle-left} />
//<FontAwesomeIcon icon={fas fa-angle-right} />

type InnerProps = {
  position: number
  slideCount: number
  sliding: boolean
  speed: number
}

const InnerWrapper = styled.div<InnerProps>`
  display: flex;
  left: ${(props) => props.position}%;
  position: relative;
  transition: ${props => props.sliding ? `${props.speed}s ease all` : 'none'};
  min-width: ${props => props.slideCount * 100}%;
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