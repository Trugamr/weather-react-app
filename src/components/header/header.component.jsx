import React from 'react'

import SideMenuIcon from '../side-menu-icon/side-menu-icon.component'
import SearchField from '../search-field/search-field.component'

import {
  HeaderContainer,
  IconContainer,
  SearchFieldContainer,
  TempSwitchContainer
} from './header.styles'

const Header = () => {
  return (
    <HeaderContainer>
      <IconContainer>
        <SideMenuIcon size={30} />
      </IconContainer>

      <SearchFieldContainer>
        <SearchField searchValue="Chandigarh" />
      </SearchFieldContainer>

      <TempSwitchContainer />
    </HeaderContainer>
  )
}

export default Header
