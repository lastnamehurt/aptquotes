import { Box, Button, chakra, Flex, SimpleGrid, Image } from "@chakra-ui/react";
import * as React from "react";

export default function Features() {
  return (
    <Flex
      bg='#edf3f8'
      _dark={{
        bg: "#3e3e3e",
      }}
      p={10}
      w='full'
      justifyContent='center'
      alignItems='center'
      pos='absolute'
    >
      <Box
        shadow='xl'
        bg='white'
        _dark={{
          bg: "gray.800",
        }}
        px={8}
        py={10}
        mx='auto'
      >
        <SimpleGrid
          alignItems='center'
          columns={{
            base: 1,
            md: 2,
          }}
          mb={24}
          spacingY={{
            base: 10,
            md: 32,
          }}
          spacingX={{
            base: 10,
            md: 24,
          }}
        >
          <Box>
            <chakra.h2
              mb={4}
              fontSize={{
                base: "2xl",
                md: "4xl",
              }}
              fontWeight='extrabold'
              letterSpacing='tight'
              textAlign={{
                base: "center",
                md: "left",
              }}
              color='gray.900'
              _dark={{
                color: "gray.400",
              }}
              lineHeight={{
                md: "shorter",
              }}
              textShadow='2px 0 currentcolor'
            >
              We provide time efficient service with creative logistic solutions
              to simplify your transportation needs.
            </chakra.h2>
            <chakra.p
              mb={5}
              textAlign={{
                base: "center",
                sm: "left",
              }}
              color='gray.600'
              _dark={{
                color: "gray.400",
              }}
              fontSize={{
                md: "lg",
              }}
            >
              ␥ Reefer ␥ container ␥ dry-van
            </chakra.p>
            <Button
              href='https://quote.drivewithapt.com'
              w={{
                base: "full",
                sm: "auto",
              }}
              size='lg'
              bg='gray.900'
              _dark={{
                bg: "gray.700",
              }}
              _hover={{
                bg: "gray.700",
                _dark: {
                  bg: "gray.600",
                },
              }}
              color='gray.100'
              as='a'
            >
              Contact Us
            </Button>
          </Box>

          <Box
            w='full'
            h='full'
            py={48}
            // bg='gray.200'
            // _dark={{
            //   bg: "gray.700",
            // }}
            // src='https://images.unsplash.com/photo-1611224097891-83220d09271a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3474&q=80'
          >
            <Image src='https://images.unsplash.com/photo-1611224097891-83220d09271a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3474&q=80' />
          </Box>
        </SimpleGrid>

        <SimpleGrid
          alignItems='center'
          columns={{
            base: 1,
            md: 2,
          }}
          flexDirection='column-reverse'
          mb={24}
          spacingY={{
            base: 10,
            md: 32,
          }}
          spacingX={{
            base: 10,
            md: 24,
          }}
        >
          <Box
            order={{
              base: "initial",
              md: 2,
            }}
          >
            <chakra.h2
              mb={4}
              fontSize={{
                base: "2xl",
                md: "4xl",
              }}
              fontWeight='extrabold'
              letterSpacing='tight'
              textAlign={{
                base: "center",
                md: "left",
              }}
              color='gray.900'
              _dark={{
                color: "gray.400",
              }}
              lineHeight={{
                md: "shorter",
              }}
            >
              Become A Driver
            </chakra.h2>
            <chakra.p
              mb={5}
              textAlign={{
                base: "center",
                sm: "left",
              }}
              color='gray.600'
              _dark={{
                color: "gray.400",
              }}
              fontSize={{
                md: "lg",
              }}
            >
              We understand the daily challenges drivers face. APT offers a
              variety of schedules to promote a healthy family-work balance.
            </chakra.p>
            <Button
              href='https://quote.drivewithapt.com'
              w={{
                base: "full",
                sm: "auto",
              }}
              size='lg'
              bg='gray.900'
              _dark={{
                bg: "gray.700",
              }}
              _hover={{
                bg: "gray.700",
                _dark: {
                  bg: "gray.600",
                },
              }}
              color='gray.100'
              as='a'
            >
              Sign Up
            </Button>
          </Box>
          {/* <Box
            w='full'
            h='full'
            py={48}
            bg='gray.200'
            _dark={{
              bg: "gray.700",
            }}
          ></Box> */}
          <Image src='https://images.unsplash.com/photo-1547319784-330d3b12b3bb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80' />
        </SimpleGrid>
      </Box>
    </Flex>
  );
}
