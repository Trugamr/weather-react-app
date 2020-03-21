import React from 'react'
import { useTheme } from 'styled-components'

import {
  DetailedInfoCardContainer,
  DetailedInfoCardTitle,
  DetailedInfoCardSubTitle
} from './detailed-info-card.styles'

const DetailedInfoCard = ({ title, subtitle }) => {
  const theme = useTheme()

  return (
    <DetailedInfoCardContainer theme={theme}>
      <DetailedInfoCardTitle>{title}</DetailedInfoCardTitle>
      <DetailedInfoCardSubTitle>{subtitle}</DetailedInfoCardSubTitle>
    </DetailedInfoCardContainer>
  )
}

export default DetailedInfoCard
