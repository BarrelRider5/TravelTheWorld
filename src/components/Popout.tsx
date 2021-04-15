import React from 'react'
import styled from '@emotion/styled'

import { ContactContent } from './PopoutContent/Contact'
import { PrivacyContent } from './PopoutContent/Privacy'
import { TermsContent } from './PopoutContent/Terms'

export const Popout = ({ close, isOpen, templateName }) => (
  <LiteboxWrapper onClick={close} open={isOpen}>
    <InnerWrapper onClick={event => event.stopPropagation()}>
      {templateName === "contact" ? <ContactContent /> : templateName === "privacy" ? <PrivacyContent /> : <TermsContent />}
    </InnerWrapper>
  </LiteboxWrapper>
)

interface myProps { 
  open: boolean
}

const InnerWrapper = styled.div`
  background: #fff;
  cursor: initial;
  display: flex;
  font-weight: bold;
  justify-content: center;
  overflow: hidden;
  padding: 10px;
  width: 100%;
  height: 100%;
`

const LiteboxWrapper = styled.div<myProps>`
  align-items: center;
  background: rgba(0, 0, 0, .3);
  cursor: pointer;
  display: flex;
  justify-content: center;
  overflow: hidden;
  padding: 32px;
  position: fixed;
  top: 0;
  left: 0;
  transform: scale(${props => props.open ? 1 : 0});
  transition: .3s ease all;
  width: 100%;
  height: 100%;
  z-index: 10;
`