import React from 'react'
import styled from '@emotion/styled'

export const Dropdown = ({ expanded, choices }) => {

  return (
    <ListWrapper expanded={expanded}>
      {
        Object.keys(choices).map(key => (
          <ListItem>
            <a href={choices[key].link}>
              {choices[key].text}
            </a>
          </ListItem>)
        )
      }
    </ListWrapper>
  )
}

interface ExpandedProps {
  expanded: boolean
}

const ListItem = styled.li`
  margin: 0;
  padding: 8px;

  a {
    color: #000;
    text-decoration: none;
  }
`

const ListWrapper = styled.ul<ExpandedProps>`
  display: flex;
  flex-direction: column;
  list-style: none;
  margin: 0;
  max-height: ${props => props.expanded ? 'unset' : 0};
  padding: 0;
  transition: .3s ease all;
`