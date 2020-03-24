import React from 'react'

import {
  DetailedInfoCardContainer,
  DetailedInfoCardTitle,
  DetailedInfoCardSubTitle
} from './detailed-info-card.styles'

const DetailedInfoCard = ({ title, subtitle }) => {
  return (
    <DetailedInfoCardContainer>
      <DetailedInfoCardTitle>{title}</DetailedInfoCardTitle>
      <DetailedInfoCardSubTitle>{subtitle}</DetailedInfoCardSubTitle>
    </DetailedInfoCardContainer>
  )
}

export default DetailedInfoCard
