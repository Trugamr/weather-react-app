import styled from 'styled-components'

export const HeaderContainer = styled.div`
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-rows: repeat(5, 1fr);
  grid-template-columns: 140px repeat(2, minmax(200px, auto)) 140px;
`

export const IconContainer = styled.div`
  grid-column: 1 / span 1;
  grid-row: 1 / span 2;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
`
export const SearchFieldContainer = styled.div`
  grid-column: 2 / span 2;
  grid-row: 2 / span 3;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 20px;
`

export const TempSwitchContainer = styled.div`
  grid-column: 4 / span 1;
  grid-row: 1 / span 2;
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
`
