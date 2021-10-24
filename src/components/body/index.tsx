import React from 'react'

import SideMenu from '../sidemenu'
import { BodyStyled } from './style'

const Body: React.FC = () => {
  return (
    <BodyStyled id="bodycontent">
      <SideMenu />
    </BodyStyled>
  )
}

export default Body
