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

export default function QuoteForm() {
  const [companyName, setCompanyName] = useState("");
  const [email, setEmail] = useState("");
  let [total, setTotal] = useState(0);
  const [mileage, setMileage] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [containerType, setContainerType] = useState("");
  const [legalWeight, setLegalWeight] = useState("Yes");
  const [isHazmat, setIsHazmat] = useState("Non-Hazmat");
  const [additionalDetails, setAdditionalDetails] = useState("");
  const [show, setShow] = useState(false);

  const toast = useToast();

  // axios.defaults.xsrfCookieName = 'csrftoken'
  // axios.defaults.xsrfHeaderName = 'X-CSRFToken'
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function clean() {
    setCompanyName("");
    setEmail("");
    setTotal(0);
    setMileage("");
    setPhoneNumber("");
    setContainerType("");
    setLegalWeight("YES");
    setIsHazmat("Non-Hazmat");
    setAdditionalDetails("");
  }

  let handleSubmit = async (e: any) => {
    e.preventDefault();
    console.log("Submitting");
    // just a lil processing to convert human-readable values to db values
    const isLegalWeight = legalWeight === "Yes" ? true : false;
    const isThisHazmat = isHazmat === "Non-Hazmat" ? false : true;
    total = +mileage !== 0 ? +mileage * 0.71 + 2200 + 40 + 250 : 0;
    console.log(`Total is ${total}`);

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        company_name: companyName,
        email_address: email,
        estimated_distance: mileage,
        total: total,
        phone_number: phoneNumber,
        container_type: containerType,
        is_legal_weight: isLegalWeight,
        is_hazmat: isThisHazmat,
        additional_details: additionalDetails,
      }),
    };
    fetch(
      //   "https://apt-quotes-api.herokuapp.com/v1/quotes/",
      "http://localhost:8000/v1/quotes/",
      requestOptions
    ).then((response) => {
      response.json();
      if (response.ok) {
        clean();
        console.log(response);
        handleClose();

        return toast({
          title: "Quote Sent",
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
        <Image src={apt} w={"fill"} h={48} alt='powered by Last Day Freight' />
        <Stack align={"center"} spacing={1}>
          <Heading
            textTransform={"uppercase"}
            fontSize={"3xl"}
            color={useColorModeValue("gray.800", "gray.200")}
          >
            All Purpose Trucking
          </Heading>
          <Text fontSize={"lg"} color={"gray.500"}>
            Estimated Quote
          </Text>
        </Stack>
        <Stack spacing={4} direction={{ base: "column" }} w={"full"}>
          {/* Company Name */}
          <form id='quoteForm' onSubmit={handleSubmit}>
            <FormControl>
              <FormLabel htmlFor='companyName'>Company Name</FormLabel>
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
            <FormControl>
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
            <FormControl>
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
            <FormControl isRequired>
              <FormLabel htmlFor='miles'>Estimated Distance (miles)</FormLabel>
              <Input
                id={"miles"}
                type={"number"}
                variant={"outline"}
                value={mileage}
                onChange={(e) => setMileage(e.target.value)}
                placeholder={"i.e. 350"}
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
              <Divider orientation='horizontal' />
            </Stack>
            <FormControl>
              <FormLabel htmlFor='containerType'>Container Type</FormLabel>
              <Select
                placeholder='Select option'
                rounded={"full"}
                variant='filled'
                value={containerType}
                onChange={(e) => setContainerType(e.target.value)}
              >
                <option value='20" DR'>20' DR</option>
                <option value='40" DR'>40' DR</option>
                <option value='40" HC'>40' HC</option>
                <option value='45" DR'>45' DR</option>
                <option value='20" RF'>20' RF</option>
                <option value='40" RF'>40' RF</option>
                <option value='Other'>Other</option>
              </Select>
            </FormControl>
            {/* Miles */}
            <HStack>
              <FormControl id='legalWeight' isRequired>
                <FormLabel>Legal Weight</FormLabel>
                <Select
                  placeholder='Select option'
                  rounded={"full"}
                  variant='filled'
                  value={legalWeight}
                  onChange={(e) => setLegalWeight(e.target.value)}
                >
                  <option value='option1'>Yes</option>
                  <option value='option2'>No</option>
                </Select>
              </FormControl>

              <FormControl id='hazmat' isRequired>
                <FormLabel>Hazmat</FormLabel>
                <Select
                  placeholder='Select option'
                  rounded={"full"}
                  variant='filled'
                  value={isHazmat}
                  onChange={(e) => setIsHazmat(e.target.value)}
                >
                  <option value='option1'>Non-Hazmat</option>
                  <option value='option2'>Hazmat</option>
                </Select>
              </FormControl>
            </HStack>
            <Stack>
              <Divider orientation='horizontal' />
              <FormControl id='additionalDetails'>
                <FormLabel>Additional Details</FormLabel>
                <Textarea
                  value={additionalDetails}
                  onChange={(e) => setAdditionalDetails(e.target.value)}
                ></Textarea>
              </FormControl>
              <FormControl id='hiddenTotal'>
                <VisuallyHiddenInput
                  value={mileage}
                  onChange={(e) =>
                    setTotal(
                      +e.target.value !== 0
                        ? +mileage * 0.71 + 2200 + 40 + 250
                        : 0
                    )
                  }
                ></VisuallyHiddenInput>
              </FormControl>
            </Stack>
          </form>
          <Text as={"u"} align={"center"} fontSize={"xl"}>
            {companyName}
          </Text>
          <Total mileage={mileage} />
        </Stack>
        <Stack align={"center"}>
          <Text>
            <Button
              color='teal.500'
              type='submit'
              id='quoteForm'
              onClick={handleShow}
            >
              Email Quote
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
                    variant='ghost'
                    colorScheme='blue'
                    onClick={handleSubmit}
                  >
                    Send Email
                  </Button>
                </ModalFooter>
              </ModalContent>
            </Modal>
          </Text>
          {/* <Text>
            <Link color='teal.500' href='https://drivewithapt.com'>
              Home
            </Link>
          </Text> */}
        </Stack>
      </Stack>
    </Flex>
  );
}

function Total(props: { mileage: any }) {
  const total = formatter.format(
    +props.mileage !== 0 ? +props.mileage * 0.71 + 2200 + 40 + 250 : 0
  );
  return +props.mileage !== 0 ? (
    <>
      <Charges mileage={props.mileage} />
      <Divider />
      <Text>
        <strong>{total} Total</strong>
      </Text>
    </>
  ) : (
    <Text></Text>
  );
}
function Charges(props: { mileage: any }) {
  return (
    <Stack>
      <Text fontSize='xs'>
        $2,200.00 <strong>Line Haul</strong>
      </Text>
      <Text fontSize='xs'>
        $220.00 <strong>FSC</strong>
      </Text>
      <Text fontSize='xs'>
        $40.00 <strong>Chassis Rental Fee</strong>
      </Text>
      <Text fontSize='xs'>
        $250.00 <strong>PrePull Fee</strong>
      </Text>
    </Stack>
  );
}
