//-----THEMES-----//

const darkText = '#665858'
const lightText = '#D5D5D5'

//--CLEAR DAY--//
export const clearDay = {
  base: '#72FFE2',
  arch: '#88EEF7',
  bottomDetail: '#86E8F1',
  text: darkText
}

//--CLEAR NIGHT--//
export const clearNight = {
  base: '#6C8A84',
  arch: '#6E6E6E',
  bottomDetail: '#5D5E5E',
  text: lightText
}

//--RAIN--//
export const rain = {
  base: '#619BBE',
  arch: '#53789E',
  bottomDetail: '#395877',
  text: lightText
}

//--SLEET--//
export const sleet = {
  base: '#619BBE',
  arch: '#53789E',
  bottomDetail: '#395877',
  text: lightText
}

//--WIND--//
export const wind = {
  base: '#7EA1B2',
  arch: '#62698B',
  bottomDetail: '#207E8B',
  text: lightText
}

//--FOG--//
export const fog = {
  base: '#F4F7F0',
  arch: '#F2EEE3',
  bottomDetail: '#C9D7D8',
  text: darkText
}

//--SNOW--//
export const snow = {
  base: '#FFFFFF',
  arch: '#C6EFFF',
  bottomDetail: '#D1E3FF',
  text: darkText
}

//--CLOUDY--//
export const cloudy = {
  base: '#7EA1B2',
  arch: '#62698B',
  bottomDetail: '#207E8B',
  text: lightText
}

//--PARTLY CLOUDY DAY--//
export const partlyCloudyDay = {
  base: '#C6EEFF',
  arch: '#A6DFFF',
  bottomDetail: '#91D7FF',
  text: darkText
}

//--PARTLY CLOUDY NIGHT--//
export const partlyCloudyNight = {
  base: '#747484',
  arch: '#3C3C4C',
  bottomDetail: '#181834',
  text: lightText
}

//--DEFAULT EXPORT--//
export default {
  'clear-day': clearDay,
  'clear-night': clearNight,
  rain,
  sleet,
  wind,
  fog,
  snow,
  cloudy,
  'partly-cloudy-day': partlyCloudyDay,
  'partly-cloudy-night': partlyCloudyNight
}
