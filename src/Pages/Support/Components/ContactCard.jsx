import React from "react";
import {
  Box,
  Button,
  Card,
  Checkbox,
  FormControl,
  FormLabel,
  HStack,
  Input,
  Stack,
  Text,
  Textarea,
} from "@chakra-ui/react";


const ContactCard = () => {
  return (
    <Card p={6} borderRadius="1rem" flexGrow="1">
      <Stack spacing={6}>
        <Text fontWeight="medium" fontSize="sm">
          You will recieve response within 24 hours
        </Text>
        <HStack
          flexDir={{
            base: "column",
            md: "row",
          }}
        >
          <FormControl>
            <FormLabel>Name</FormLabel>
            <Input placeholder="Enter your Name" />
          </FormControl>
          <FormControl>
            <FormLabel>Surname</FormLabel>
            <Input placeholder="Enter your Surname" />
          </FormControl>
        </HStack>
        <FormControl>
          <FormLabel>Email</FormLabel>
          <Input placeholder="example@gmail.com" />
        </FormControl>
        <FormControl>
          <FormLabel>Message</FormLabel>
          <Textarea placeholder="Enter your message.." />
        </FormControl>
        <Box>
          <Checkbox defaultChecked>
            <Text fontSize="xs">
              I agree with
              <Box as="span" color="p.purple">
                {" "}
                Terms & Conditions.
              </Box>
            </Text>
          </Checkbox>
        </Box>
        <Stack>
          <Button fontSize="sm">Send a Meassage</Button>
          <Button fontSize="sm" colorScheme="gray">
            Book a Metting
          </Button>
        </Stack>
      </Stack>
    </Card>
  );
};

export default ContactCard;
