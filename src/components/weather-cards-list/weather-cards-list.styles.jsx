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
  grid-template-columns: repeat(8, minmax(70px, 1fr));
  grid-gap: 20px;
  flex: 1 0;

  div {
    width: 70px;
    height: 125px;
    background-color: red;
  }
`
