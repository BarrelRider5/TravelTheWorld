import React, { useCallback, useState } from 'react'
import styled from '@emotion/styled'

import { Popout } from './Popout'

export const Footer = () => {
  const [{ isOpen, templateName }, setPopout] = useState({
    isOpen: false,
    templateName: ''
  })

  const close = useCallback(
    () => {
      setPopout((state) => ({
        ...state,
        isOpen: false
      }))
    }, []
  )

  const popOut = useCallback(
    ({ currentTarget: { id } }) => {
      setPopout((state) => ({
        ...state,
        templateName: id,
        isOpen: true
      }))
    }, []
  )

  return (
    <StyledFooter>
      <List>
        <ListItem>&copy; 2021 TravelWise</ListItem>
        <ListItem id="contact" onClick={popOut}>Contact Us</ListItem>
        <ListItem id="terms" onClick={popOut}>Terms &amp; Conditions</ListItem>
        <ListItem id="privacy" onClick={popOut}>Privacy Policy</ListItem>
      </List>
      <Popout close={close} isOpen={isOpen} templateName={templateName} />
    </StyledFooter>
  )
}
// When we hover over an li, make expanded true in that li's dropdown, else make it false

const StyledFooter = styled.footer`
  align-items: center;
  background: #e8e8e8;
  display: flex;
  font-size: 14px;
  font-weight: bold;
  justify-content: space-between;
  padding: 10px;
  width: 100%;
`

const List = styled.ul`
  display: flex;
  flex-direction: row;
  list-style: none;
  padding: 0;
  margin: 0;
  transition: 0.3s ease all;
`

const ListItem = styled.li`
  color: #1a9787;
  cursor: pointer;
  margin: 0 8px;
  opacity: 0.7;

  &:hover {
    opacity: 1;
    transform: scale(1.05);
  }
`