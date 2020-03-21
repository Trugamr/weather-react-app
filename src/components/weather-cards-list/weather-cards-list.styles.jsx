import styled from 'styled-components'

export const WeatherCardsListContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  padding: 20px;
`

export const WeatherCardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(70px, 1fr));
  grid-column-gap: 20px;
  width: 100%;
`
