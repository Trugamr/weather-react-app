import styled from 'styled-components'

export const SwitchUnitsContainer = styled.div`
  font-family: 'Montserrat', 'sans-serif';
  color: ${({ theme }) => theme.text};
  font-size: ${({ fontSize }) => fontSize}px;
  span {
    margin: 0px 5px;
    cursor: pointer;

    :first-child {
      font-weight: ${({ units }) => (units === 'si' ? 600 : 300)};
    }

    :last-child {
      font-weight: ${({ units }) => (units === 'us' ? 600 : 300)};
    }
  }
`
