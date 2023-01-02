import { createTheme } from '@mui/material/styles';

const MyTheme = createTheme({
  status: {
    danger: '#047857',
  },
  palette: {
    primary: {
      main: '#0971f1',
      darker: '#053e85',
    },
    neutral: {
      main: '#A51816',
      contrastText: '#fff',
    },
  },
});

export default MyTheme