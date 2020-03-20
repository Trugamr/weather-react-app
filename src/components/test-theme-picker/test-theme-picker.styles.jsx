import styled from 'styled-components'

export const ThemePickerContainer = styled.div`
  display: flex;
  padding: 20px 5px;

  div {
    height: 25px;
    width: 25px;
    margin-right: 10px;
    border-radius: 25px;
    cursor: pointer;
    border: 2px solid;
    box-sizing: border-box;

    :last-child {
      margin-right: 0;
    }
  }
`
