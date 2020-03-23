import styled from 'styled-components'

import Slider from '@farbenmeer/react-spring-slider'

export const SliderContainer = styled.div`
  height: 100%;
  max-width: 900px;
  margin: auto;
  position: relative;
`

export const CustomSlider = styled(Slider)``

export const SliderOverlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  /* box-shadow: inset 0px 0px 20px 20px ${({ theme }) =>
    theme.bottomDetail}; */
  cursor: pointer;
`
