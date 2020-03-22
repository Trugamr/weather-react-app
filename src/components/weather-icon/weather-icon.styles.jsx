import styled from 'styled-components'

export const WeatherIconContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  color: ${({ theme }) => theme.text};
  font-family: 'Montserrat', 'sans-serif';
  position: relative;
  span {
    position: absolute;
    right: -20px;
    top: -20px;
    font-size: 0.9rem;
    font-weight: 300;
  }
`

export const WeatherIconImage = styled.img`
  width: 100%;
  height: 100%;
`
