import styled from 'styled-components'

export const ArcRangeSliderContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-end;

  svg {
    flex: 1 0;
    fill: ${({ theme }) => theme.arch};
  }
`
