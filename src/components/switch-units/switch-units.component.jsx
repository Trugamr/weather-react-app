import React from 'react'
import { createStructuredSelector } from 'reselect'
import { connect } from 'react-redux'

import { SwitchUnitsContainer } from './switch-units.styles'
import { setWeatherUnits } from '../../redux/weather/weather.actions'
import { selectUnits } from '../../redux/weather/weather.selectors'

const SwitchUnits = ({ setWeatherUnits, units, fontSize = 20 }) => {
  return (
    <SwitchUnitsContainer units={units} fontSize={fontSize}>
      <span onClick={() => setWeatherUnits('si')}>ºC</span>/
      <span onClick={() => setWeatherUnits('us')}>ºF</span>
    </SwitchUnitsContainer>
  )
}

const mapStateToProps = createStructuredSelector({ units: selectUnits })

const mapDispatchToProps = dispatch => ({
  setWeatherUnits: units => dispatch(setWeatherUnits(units))
})

export default connect(mapStateToProps, mapDispatchToProps)(SwitchUnits)
