import React from 'react'

import { IconContainer } from './side-menu-icon.styles'

const SideMenuIcon = ({ size = 40 }) => {
  return (
    <IconContainer size={size} >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 218.5 112.5">
        <path d="M6 6l207 1M6 56l163 1M6 106l118 1" />
      </svg>
    </IconContainer>
  )
}

export default SideMenuIcon
