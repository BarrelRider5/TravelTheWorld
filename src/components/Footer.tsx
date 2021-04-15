import React from 'react'
import styled from '@emotion/styled'

const choices = {
  'buy': {
    link: 'google.com',
    text: 'buy something'
  },
  'sell': {
    link: 'amazon.com',
    text: 'sell something'
  }
}

export const Footer = () => (
  <StyledFooter>
    <List>
      <ListItem>&copy; 2021 TravelWise</ListItem>
      <ListItem>Contact Us</ListItem>
      <ListItem>Terms &amp; Conditions</ListItem>
      <ListItem>Privacy Policy</ListItem>
    </List>
  </StyledFooter>
)

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