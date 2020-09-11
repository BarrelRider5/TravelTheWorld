import React from 'react'
import styled from '@emotion/styled'

const StyledCard = styled.div`
  align-items: center;
  background: #d8d8d8;
  border: 1px solid #333;
  display: flex;
  flex: 1;
  height: 200px;
  justify-content: center;
`

export const Card = ({ children }) => <StyledCard>{children}</StyledCard>
