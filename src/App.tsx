import * as React from "react";
import {
  ChakraProvider,
  extendTheme,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme as baseTheme,
  Flex,
} from "@chakra-ui/react";
import { ColorModeSwitcher } from "./ColorModeSwitcher";
import { Logo } from "./Logo";
import CardWithIllustration from "./components/QuoteForm";
import VerticalLabels from "./components/Wizard";
import { StepsStyleConfig as Steps } from "chakra-ui-steps";
import Hero from "./components/Hero";
import Features from "./components/Features";

const theme = extendTheme({
  components: {
    Steps,
  },
  baseTheme,
});
export const App = () => (
  <ChakraProvider theme={theme}>
    <VStack
      bg='#edf3f8'
      _dark={{
        bg: "#3e3e3e",
      }}
      p={10}
      w='full'
      justifyContent='center'
      alignItems='center'
      pos='sticky'
    >
      <Hero />
    </VStack>
    {/* <CardWithIllustration /> */}
    <Features />
  </ChakraProvider>
);
