import { createTheme } from '@mui/material';

export const theme = createTheme({
  custom: {
    colors: {
      black: '#000000',
      white: '#ffffff',
      darkblue: '#1890ff',
      lightblue: '#e6f7ff',
      blue: '#69c0ff',
    },
  },
  typography: {
    fontFamily: `"Public Sans", sans-serif `,
    h1: {
      fontSize: '38px',
      fontWeight: 'bold',
      lineHeight: '46px',
    },
    h2: {
      fontSize: '30px',
      fontWeight: 'bold',
      lineHeight: '38px',
    },
    h3: {
      fontSize: '24px',
      fontWeight: '700',
      lineHeight: '32px',
    },
    h4: {
      fontSize: '20px',
      fontWeight: '700',
      lineHeight: '28px',
    },
    h5: {
      fontSize: '16px',
      fontWeight: '500',
      lineHeight: '24px',
    },
    h6: {
      fontSize: '14px',
      fontWeight: '400',
      lineHeight: '22px',
    },
  },
});
