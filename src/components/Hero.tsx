import {
  SimpleGrid,
  Flex,
  chakra,
  Icon,
  Image,
  Box,
  Container,
} from "@chakra-ui/react";
// import { Image } from "framer-motion";
import * as React from "react";
import banner from "../assets/images/aptlogo.png";

export default function Hero() {
  return (
    <Flex>
      <SimpleGrid
        columns={{
          base: 1,
          md: 2,
        }}
        spacing={0}
      >
        <Flex bg='brand.400' p={99}>
          <Image
            src={banner}
            alt='All Purpose Trucking'
            fit='contain'
            w='100%'
            h={{
              base: 64,
              md: "contain",
            }}
            bg='gray.100'
            loading='lazy'
            opacity={0.8}
          />
        </Flex>
        <Flex
          direction='column'
          alignItems='start'
          justifyContent='center'
          px={{
            base: 4,
            md: 8,
            lg: 20,
          }}
          py={24}
          zIndex={3}
        >
          <chakra.span
            color='brand.600'
            _dark={{
              color: "gray.300",
            }}
            fontSize='lg'
            textTransform='uppercase'
            fontWeight='extrabold'
          >
            All Purpose Trucking
          </chakra.span>
          <chakra.h1
            mb={4}
            fontSize={{
              base: "4xl",
              md: "4xl",
              lg: "5xl",
            }}
            fontWeight='bold'
            color='brand.600'
            _dark={{
              color: "gray.300",
            }}
            lineHeight='shorter'
            textShadow='2px 0 currentcolor'
          >
            Reliable Transportation and Innovative Logistics.
          </chakra.h1>
          <chakra.p
            pr={{
              base: 0,
              lg: 16,
            }}
            mb={4}
            fontSize='lg'
            color='brand.600'
            _dark={{
              color: "gray.400",
            }}
            letterSpacing='wider'
          >
            We offer guaranteed shipping capacity, competitive rates and provide
            accurate information from pickup to destination.
          </chakra.p>
          <Box display='inline-flex' rounded='md' shadow='md'>
            <chakra.a
              href='https://quote.drivewithapt.com'
              mt={2}
              display='inline-flex'
              alignItems='center'
              justifyContent='center'
              px={5}
              py={3}
              border='solid transparent'
              fontWeight='bold'
              w='full'
              rounded='md'
              _light={{
                color: "black",
              }}
              bg='white'
              _dark={{
                bg: "brand.500",
              }}
              _hover={{
                bg: "brand.700",
                _dark: {
                  bg: "brand.600",
                },
              }}
            >
              Request a Quote
              {/* <Icon as={FiExternalLink} ml={2} /> */}
            </chakra.a>
          </Box>
        </Flex>
      </SimpleGrid>
    </Flex>
  );
}
