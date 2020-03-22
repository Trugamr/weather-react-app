import styled from 'styled-components'

export const DetailedInfoCardContainer = styled.div`
  height: 100%;
  width: 150px;
  justify-self: center;
  margin-right: 5%;
  display: grid;
  grid-template-rows: 60% 40%;
  text-align: center;
  font-family: 'Montserrat', 'sans-serif';
  color: ${({ theme }) => theme.text};
`

export const DetailedInfoCardTitle = styled.div`
  margin: auto;
  font-size: 21px;
`

export const DetailedInfoCardSubTitle = styled.div`
  margin-bottom: auto;
  opacity: 0.8;
`
