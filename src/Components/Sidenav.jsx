import { Box, HStack, Heading, Icon, Link, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { RxDashboard } from "react-icons/rx";
import { BsArrowDownUp } from "react-icons/bs";
import { BiSupport } from "react-icons/bi";

const Sidenav = () => {
  const navLinks = [
    {
      icon: RxDashboard,
      text: "Dashboard",
      link: "/",
    },
    {
      icon: BsArrowDownUp,
      text: "Transcation",
      link: "/transcations",
    },
  ];
  return (
    <Stack
      h="100vh"
      justify="space-between"
      boxShadow={{
        base: "lg",
        lg: "lg",
      }}
      w={{
        base: "full",
        lg: "16rem",
      }}

      bg="white"
    >
      <Box>
        <Heading fontSize="20px" pt="3.5rem" textAlign="center" as="h1">
          @KETANCHAUDHARY
        </Heading>
        {/* 24/6 */}
        <Box mt="6" mx="12px">
          {navLinks.map((nav) => (
            <HStack
              py="3"
              px="4"
              _hover={{
                bg: "#F3F3F7",
                color: "#171717",
              }}
              color="#797E82"
              borderRadius="10px"
              key={nav.text}
            >
              <Icon as={nav.icon} />
              <Text fontSize="14px" fontWeight="medium">
                {nav.text}
              </Text>
            </HStack>
          ))}
        </Box>
      </Box>
      <Box mt="6" mx="12px" mb="6">
        <HStack
          py="3"
          px="4"
          _hover={{
            bg: "#F3F3F7",
            color: "#171717",
          }}
          color="#797E82"
          borderRadius="10px"
        >
          <Icon as={BiSupport} />
            <Text fontSize="14px" fontWeight="medium">
            Support
          </Text>
        </HStack>
      </Box>
    </Stack>
  );
};

export default Sidenav;
