import getMuiTheme from 'material-ui/styles/getMuiTheme'
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme'
import {
    blue500, blue700,
    cyan300, cyan400, cyan500,cyan900,
    grey50,grey100,grey200, grey300, grey400, grey500,grey900,
    pinkA200,white,darkBlack,fullBlack
} from 'material-ui/styles/colors'

export const lightTheme = getMuiTheme({
  appBar: {
    textColor: darkBlack,
    color: grey50,
    height:56,
  },
  fontFamily: 'Roboto, sans-serif',
  palette: {
    primary1Color: blue500,
    primary2Color: blue700,
    primary3Color: grey400,
    accent1Color: pinkA200,
    accent2Color: grey100,
    accent3Color: grey500,
    textColor: darkBlack,
    alternateTextColor: white,
    canvasColor: white,
    borderColor: grey300,
    pickerHeaderColor: blue500,
    shadowColor: fullBlack,
  },
})

export const darkTheme = getMuiTheme(darkBaseTheme, {
  appBar: {
    textColor: '#fff',
    color: cyan900,
  },
  palette: {
    primary1Color: cyan500,
    primary2Color: cyan400,
    primary3Color: grey400,
    accent1Color: cyan300,
    accent2Color: grey200,
    accent3Color: grey500,
    textColor: grey300,
    borderColor: grey300,
    shadowColor: grey900,
    pickerHeaderColor: cyan300,
  },
})

const constantes = {
  hostname:'http://localhost:3001',
  desenvolvimento: true
}

export default constantes
