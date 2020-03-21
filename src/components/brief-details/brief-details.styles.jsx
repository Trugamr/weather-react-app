import styled, { css } from 'styled-components'

const flexCenter = css`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const BriefDetailsContainer = styled.div`
  color: ${({ theme }) => theme.text};
  font-family: 'Montserrat', 'sans-serif';
  font-weight: 200;
  display: grid;
  grid-template-columns: auto 400px auto;
  text-align: center;
  height: 100%;
  p {
    margin-left: 10px;
  }
`

export const MinTempContainer = styled.div`
  font-size: 2.4rem;
  text-align: center;
  ${flexCenter}
  justify-content: flex-end;
  box-sizing: border-box;
  padding-right: 30px;
  margin-top: 40px;
`

export const TempContainer = styled.div`
  font-size: 8.2rem;
  text-align: center;
  ${flexCenter}
  padding-left: 40px;
  box-sizing: border-box;
`

export const MaxTempContainer = styled.div`
  font-size: 2.4rem;
  ${flexCenter}
  justify-content: flex-start;
  box-sizing: border-box;
  padding-left: 30px;
  margin-top: 40px;
`
