import styled from 'styled-components'

export const ArcRangeSliderContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-end;
  position: relative;

  /* for old ArcSVG */
  svg {
    /* position: absolute; */

    &#range-arc {
      position: absolute;
      flex: 1 0;
    }

    &#main-arc {
      flex: 1 0;
      fill: ${({ theme }) => theme.arch};
    }
  }
`

export const ArcBackgroundContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-end;
`

export const ArcSVGContainer = styled.div`
  position: absolute;
  width: 100%;
  display: flex;
  background-color: ${({ theme }) => theme.arch};
  svg {
    flex: 1 0;
  }
`

export const ArcBackgroundOverlay = styled.div`
  width: 100%;
  height: 100%;
  /* 1px line fix on certian resolution idk why  */
  margin-top: -1px;
  position: absolute;
  background-color: ${({ theme }) => theme.base};
  clip-path: url(#curveClipPath);
`
