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
} from "@chakra-ui/react";
import { ColorModeSwitcher } from "./ColorModeSwitcher";
import { Logo } from "./Logo";
import CardWithIllustration from "./components/QuoteForm";
import VerticalLabels from "./components/Wizard";
import { StepsStyleConfig as Steps } from "chakra-ui-steps";

const theme = extendTheme({
  components: {
    Steps,
  },
  baseTheme,
});
export const App = () => (
  <ChakraProvider theme={theme}>
    <CardWithIllustration />
    {/* <VerticalLabels /> */}
    {/* <Box textAlign='center' fontSize='xl'>
      <Grid minH='100vh' p={3}>
        <ColorModeSwitcher justifySelf='flex-end' />
        <VStack spacing={8}>
          <Logo h='40vmin' pointerEvents='none' />
          <Text>
            Edit <Code fontSize='xl'>src/App.tsx</Code> and save to reload.
          </Text>
          <Link
            color='teal.500'
            href='https://chakra-ui.com'
            fontSize='2xl'
            target='_blank'
            rel='noopener noreferrer'
          >
            Learn Chakra
          </Link>
        </VStack>
      </Grid>
    </Box> */}
  </ChakraProvider>
);
