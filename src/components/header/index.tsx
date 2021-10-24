import React from 'react'
import { HeaderStyled } from './style'
import Logo from '../logo/logo'

const Header: React.FunctionComponent = () => {
  return (
    <HeaderStyled id='header'>
      <Logo />
    </HeaderStyled>
  )
}

export default Header
