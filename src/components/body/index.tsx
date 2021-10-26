import React from 'react'

import SideMenu from '../sidemenu'
import Content from '../content'
import { BodyStyled } from './style'

const Body: React.FC = () => {
  return (
    <BodyStyled id="bodycontent">
      <SideMenu />
      <Content />
    </BodyStyled>
  )
}

export default Body
