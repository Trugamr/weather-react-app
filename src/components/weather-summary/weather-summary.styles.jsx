import styled from 'styled-components'

export const WeatherSummaryContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const SummaryContainer = styled.p`
  font-family: 'Montserrat', 'sans-serif';
  font-size: 1.6rem;
  font-weight: 300;
  color: ${({ theme }) => theme.text};
`
