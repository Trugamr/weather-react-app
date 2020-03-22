import styled from 'styled-components'

export const WeatherPageContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.base};
  display: grid;
  grid-template-rows: minmax(150px, 25%) minmax(100px, 15%) minmax(200px, 35%) minmax(
      150px,
      25%
    );
`

export const TopContainer = styled.div`
  background-color: transparent;
`

export const ArchContainer = styled.div`
  z-index: 1;
`

export const BriefDetailsContainer = styled.div`
  background-color: ${({ theme }) => theme.arch};
`

export const BottomContainer = styled.div`
  background-color: ${({ theme }) => theme.bottomDetail};
`
