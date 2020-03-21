import styled from 'styled-components'

export const IconContainer = styled.div`
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  display: flex;
  cursor: pointer;

  svg {
    stroke: ${({ theme }) => theme.text};
    stroke-linecap: round;
    stroke-miterlimit: 10;
    stroke-width: 12px;
    flex: 1 0;
  }
`
