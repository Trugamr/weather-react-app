import React from 'react'

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
      <IconContainer />

      <SearchFieldContainer>
        <SearchField searchValue="Chandigarh" />
      </SearchFieldContainer>

      <TempSwitchContainer />
    </HeaderContainer>
  )
}

export default Header
