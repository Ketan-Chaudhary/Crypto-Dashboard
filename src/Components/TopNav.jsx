import { Heading, HStack, Box, Icon } from "@chakra-ui/react";
import { Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import { PiUserCircleDuotone } from "react-icons/pi";
import { FaBars } from "react-icons/fa";

const TopNav = ({ title, onOpen }) => {
  return (
<Box px="4" bg="white">
      <HStack maxW="70rem" h="16" justify="space-between" mx="auto">
        <Icon
          as={FaBars}
          onClick={onOpen}
          display={{
            base: "block",
            lg: "none",
          }}
        />
        <Heading  fontSize="28px">
          {title}
        </Heading>

        <Menu>
          <MenuButton>
            <Icon as={PiUserCircleDuotone} fontSize="39px" />
          </MenuButton>
          <MenuList>
            <MenuItem>Logout</MenuItem>
            <MenuItem>Support</MenuItem>
          </MenuList>
        </Menu>
      </HStack>
    </Box>
  );
};

export default TopNav;
