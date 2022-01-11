import { extendTheme, theme as base } from '@chakra-ui/react';

const theme = extendTheme({
  fonts: {
    body: `Poppins, ${base.fonts?.body}`,
  },
  colors: {
    brand: {
      100: '#EBEEF5',
      200: '#323B54',
      300: '#121829',
    },
  },
});

export default theme;
