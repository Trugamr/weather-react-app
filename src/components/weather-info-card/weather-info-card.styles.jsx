import styled, { css } from 'styled-components'

const flexCenter = css`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const WeatherInfoCardContainer = styled.div`
  place-self: center;
  height: 150px;
  color: ${({ theme }) => theme.text};
  font-family: 'Montserrat', 'sans-serif';
  font-weight: 300;
  display: grid;
  grid-template-rows: 1fr 2fr 1fr;
  text-align: center;
`

export const WeatherDayText = styled.span`
  width: 100%;
  font-size: 16px;
`

export const WeatherIconContainer = styled.div`
  ${flexCenter}
  img {
    width: 60px;
    height: 60px;
  }
`

export const WeatherTempText = styled.span`
  width: 100%;
  font-size: 14px;
`
