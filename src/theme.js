import { createMuiTheme } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';
import brown from '@material-ui/core/colors/brown';


const theme = createMuiTheme({
  palette: {
    primary: brown,
    secondary: blue,
    default: brown
  },
  status: {
    danger: 'orange',
  },
});

export default theme;