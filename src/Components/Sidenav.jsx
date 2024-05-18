import { Box, HStack, Heading, Icon,  Stack, Text } from "@chakra-ui/react";
import React from "react";
import { RxDashboard } from "react-icons/rx";
import { BsArrowDownUp } from "react-icons/bs";
import { BiSupport } from "react-icons/bi";
import { Link, useLocation } from "react-router-dom";

const Sidenav = () => {

  const location = useLocation();

  console.log(location);

  const isActiveLink = (link) => {
    return location.pathname === link;
  };

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
            <Link to ={nav.link} key={nav.text}>
            <HStack
              py="3"
              px="4"
              _hover={{
                bg: "#F3F3F7",
                color: "#171717",
              }}
              borderRadius="10px"
              bg={isActiveLink(nav.link) ? "#F3F3F7" : "transparent"}
              color={isActiveLink(nav.link) ? "#171717" : "#797E82"}
            >
              <Icon as={nav.icon} />
              <Text fontSize="14px" fontWeight="medium">
                {nav.text}
              </Text>
            </HStack>
            </Link>
          ))}
        </Box>
      </Box>
      <Box mt="6" mx="12px" mb="6">
        <Link to='/support'>
        <HStack
          py="3"
          px="4"
          _hover={{
            bg: "#F3F3F7",
            color: "#171717",
          }}
          borderRadius="10px"
          bg={isActiveLink("/support") ? "#F3F3F7" : "transparent"}
          color={isActiveLink("/support") ? "#171717" : "#797E82"}
        >
          <Icon as={BiSupport} />
            <Text fontSize="14px" fontWeight="medium">
            Support
          </Text>
        </HStack>
        </Link>
      </Box>
    </Stack>
  );
};

export default Sidenav;
