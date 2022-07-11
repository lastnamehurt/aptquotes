import * as React from "react";
import {
  ChakraProvider,
  extendTheme,
  theme as baseTheme,
} from "@chakra-ui/react";
import QuoteForm from "./components/QuoteForm";

const theme = extendTheme({
  baseTheme,
});

export const App = () => (
  <ChakraProvider theme={theme}>
    <QuoteForm />
  </ChakraProvider>
);
