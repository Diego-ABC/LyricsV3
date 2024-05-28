import {
  ChakraProvider,
  CSSReset,
  extendTheme,
  ColorModeScript,
} from "@chakra-ui/react";

const config = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};
const fonts = {
  head: "'Montserrat', Futura, Trebuchet MS, Arial, sans-serif",
  body: "'Montserrat', Futura, Trebuchet MS, Arial, sans-serif",
};
const theme = extendTheme({ config, fonts });

const ThemeProvider = ({ children }) => {
  return (
    <>
      <ColorModeScript initialColorMode={config.initialColorMode} />
      <ChakraProvider theme={theme}>
        <CSSReset />
        {children}
      </ChakraProvider>
    </>
  );
};

export { ThemeProvider };
