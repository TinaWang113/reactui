import { createMuiTheme } from '@material-ui/core/styles';
import { yellow, brown, blue, red, dark} from '@material-ui/core/colors';



const theme = createMuiTheme({
  palette: {
    primary:{
      light: '#757ce8',
      main: '#3f50b5',
      dark: '#002884',
      contrastText: '#ffffff'
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000000'
    }
  },
  status: {
    danger: 'orange',
  },
});

export default theme;