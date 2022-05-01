import { createTheme } from '@mui/material/styles';

export const light = createTheme({
  components: {
    MuiTab: {
      styleOverrides: {
        root: {
          color: '#ccc',

          '&.Mui-selected': {
            color: '#fff',
          },
        },
      },
    },
  },
  spacing: 4,
});
