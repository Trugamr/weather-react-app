import React from 'react'

import {
  HeaderContainer,
  IconContainer,
  SearchFieldContainer,
  TempSwitchContainer
} from './header.styles'

const Header = () => {
  return (
    <HeaderContainer>
      <IconContainer />
      <SearchFieldContainer />
      <TempSwitchContainer />
    </HeaderContainer>
  )
}

export default Header
