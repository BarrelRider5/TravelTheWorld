import React from 'react'
import styled from '@emotion/styled'

import { Dropdown } from './Dropdown/Dropdown'

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

export const Header = () => (
  <StyledHeader>
    <Left>
      <Logo src="resources/img/logo.png" />
      <Name>TravelWise</Name>
    </Left>
    <List>
      <ListItem>Home</ListItem>
      <ListItem>Cool Thingies</ListItem>
      <ListItem>Cool Things</ListItem>
      <ListItem>Click Here</ListItem>
      <ListItem>Click Here</ListItem>
      <ListItem>
        You Know You Want To
        <Dropdown expanded={true} choices={choices} />
      </ListItem>
    </List>
  </StyledHeader>
)

// When we hover over an li, make expanded true in that li's dropdown, else make it false

const StyledHeader = styled.header`
  align-items: center;
  background: #e8e8e8;
  display: flex;
  font-size: 14px;
  font-weight: bold;
  justify-content: space-between;
  padding: 10px;
  width: 100%;
`

const Left = styled.div`
  display: flex;
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

const Logo = styled.img`
  align-self: center;
  max-width: 40px;
`

const Name = styled.p`
  font-size: 18px;
  font-weight: 700;
`
