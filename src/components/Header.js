import React from 'react'
import styled from '@emotion/styled'

export default () => (
    <Header>
        <Left>
            <Logo src="resources/img/logo.png" />
            <Name>TravelWise</Name>
        </Left>
        <List>
            <li>Home</li>
            <li>Cool Things</li>
            <li>Cool Things</li>
            <li>Click Here</li>
            <li>Click Here</li>
            <li>You Know You Want To</li>
        </List>
    </Header>
)

const Header = styled.header`
    align-items: center;
    background: #e8e8e8;
    display: flex;
    justify-content: space-between;
    padding: 12px;
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
    transition: .3s ease all;

    li {
        cursor: pointer;
        margin: 0 8px;

        &:hover {
            transform: scale(1.05);
        }
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