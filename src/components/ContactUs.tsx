import {
  Flex,
  Stack,
  Heading,
  Text,
  Input,
  Image,
  Box,
  Button,
  Icon,
  useColorModeValue,
  createIcon,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  HStack,
  Radio,
  RadioGroup,
  Link,
  Select,
  Divider,
  Textarea,
  VisuallyHiddenInput,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useToast,
} from "@chakra-ui/react";
import { useState } from "react";
import apt from "../aptlogo.png";

const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",

  // These options are needed to round to whole numbers if that's what you want.
  //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
  //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
});

let theTotal: any;

export default function ContactUs() {
  const [companyName, setCompanyName] = useState("");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");
  const [show, setShow] = useState(false);

  const toast = useToast();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function clean() {
    setCompanyName("");
    setEmail("");
    setPhoneNumber("");
    setFullName("");
    setMessage("");
  }

  let handleSubmit = async (e: any) => {
    e.preventDefault();
    console.log("Submitting");
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        name: companyName,
        email_address: email,
        phone_number: phoneNumber,
        message: message
      }),
    };
    fetch("https://api.drivewithapt.com/v1/contacts/", requestOptions).then((response) => {
      response.json();
      if (response.ok) {
        clean();
        console.log(response);
        handleClose();

        return toast({
          title: "Message Sent",
          description: "A Team Member will reach out soon!",
          status: "success",
          duration: 9000,
          isClosable: true,
        });
      }
    });
  };

  return (
    <Flex
      //   minH={"100vh"}
      align={"center"}
      justify={"center"}
      //   py={12}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack
        boxShadow={"2xl"}
        bg={useColorModeValue("white", "gray.700")}
        rounded={"xl"}
        p={10}
        spacing={8}
        align={"center"}
      >
        <Image src={apt} w={"auto"} h={48} alt='powered by Last Day Freight' />
        <Stack align={"center"} spacing={1}>
          <Heading
            textTransform={"uppercase"}
            fontSize={"3xl"}
            color={useColorModeValue("gray.800", "gray.200")}
          >
            Contact Us
          </Heading>
        </Stack>
        <Stack spacing={4} direction={{ base: "column" }} w={"full"}>
          <form id='contactForm' onSubmit={handleSubmit}>
            <FormControl>
              <FormLabel htmlFor='companyName'>Name or Company</FormLabel>
              <Input
                id={"companyName"}
                type={"text"}
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
                variant={"outline"}
                placeholder={"i.e. All Purpose Trucking"}
                color={useColorModeValue("gray.800", "gray.200")}
                bg={useColorModeValue("gray.100", "gray.600")}
                rounded={"full"}
                isRequired={true}
                border={0}
                _focus={{
                  bg: useColorModeValue("gray.200", "gray.800"),
                  outline: "none",
                }}
              />
            </FormControl>
            {/* Email Address */}
            <FormControl py={3}>
              <FormLabel htmlFor='email'>Email address</FormLabel>
              <Input
                id={"email"}
                variant={"outline"}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type={"email"}
                placeholder={"john@doe.net"}
                color={useColorModeValue("gray.800", "gray.200")}
                bg={useColorModeValue("gray.100", "gray.600")}
                rounded={"full"}
                isRequired={true}
                border={0}
                _focus={{
                  bg: useColorModeValue("gray.200", "gray.800"),
                  outline: "none",
                }}
              />
              <FormHelperText>We'll never share your email.</FormHelperText>
            </FormControl>
            {/* Phone Number */}
            <FormControl py={3}>
              <FormLabel htmlFor='phoneNumber'>Phone number</FormLabel>
              <Input
                id={"phoneNumber"}
                variant={"outline"}
                type={"phone"}
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                placeholder={"757-555-5555"}
                color={useColorModeValue("gray.800", "gray.200")}
                bg={useColorModeValue("gray.100", "gray.600")}
                rounded={"full"}
                isRequired={true}
                border={0}
                _focus={{
                  bg: useColorModeValue("gray.200", "gray.800"),
                  outline: "none",
                }}
              />
            </FormControl>
            <Stack>
              <FormControl py={3} id='additionalDetails'>
                <FormLabel>Message</FormLabel>
                <Textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                ></Textarea>
              </FormControl>
            </Stack>
          </form>
          <Text as={"u"} align={"center"} fontSize={"xl"}>
            {companyName}
          </Text>
        </Stack>
        <Stack align={"center"}>
          <Text>
            <Button
              color='teal.500'
              variant='ghost'
              type='submit'
              id='contactForm'
              onClick={handleShow}
            >
              Submit
            </Button>
            <Modal isOpen={show} onClose={handleClose}>
              <ModalOverlay />
              <ModalContent>
                <ModalHeader>Quote Estimate</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                  We will send this quote to <strong>{email}</strong>. Press
                  "Send Email" to continue.
                </ModalBody>

                <ModalFooter>
                  <Button colorScheme='red' mr={3} onClick={handleClose}>
                    Close
                  </Button>
                  <Button
                    id='contactForm'
                    variant='solid'
                    colorScheme='blue'
                    onClick={handleSubmit}
                  >
                    Send Email
                  </Button>
                </ModalFooter>
              </ModalContent>
            </Modal>
          </Text>
        </Stack>
      </Stack>
    </Flex>
  );
}
