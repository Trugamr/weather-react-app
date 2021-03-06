import React from 'react'
import { connect } from 'react-redux'

import themes from '../../redux/theme/themes.data'

import { ThemePickerContainer } from './test-theme-picker.styles'

import { setCurrentTheme } from '../../redux/theme/theme.actions'

export const TestThemePicker = ({ setCurrentTheme }) => {
  return (
    <ThemePickerContainer>
      {Object.keys(themes).map((theme, index) => (
        <div
          key={index}
          style={{
            backgroundColor: themes[theme].base,
            borderColor: themes[theme].text
          }}
          onClick={() => setCurrentTheme(theme)}
        />
      ))}
    </ThemePickerContainer>
  )
}

const mapDispatchToProps = dispatch => ({
  setCurrentTheme: theme => dispatch(setCurrentTheme(theme))
})

export default connect(null, mapDispatchToProps)(TestThemePicker)
