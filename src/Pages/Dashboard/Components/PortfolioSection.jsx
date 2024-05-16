import { Button, HStack, Icon, Stack, Tag, Text } from "@chakra-ui/react";
import { AiOutlineInfoCircle } from "react-icons/ai";
// import { PiHandDepositDuotone } from "react-icons/pi";
// import { PiHandWithdrawDuotone } from "react-icons/pi";
import { PiHandWithdrawFill } from "react-icons/pi";
import { PiHandDepositFill } from "react-icons/pi";

const PortfolioSection = () => {
  return (
    <HStack
      bg="white"
      border="xl"
      p="6"
      justify={"space-between"}
      flexDir={{
        base: "column",
        xl: "row",
      }}
      align={{
        base: "flex-start",
        xl: "center",
      }}
      spacing={{
        base: 4,
        xl: 0,
      }}
    >
      <HStack
        spacing={{
          base: "4",
          xl: "16",
        }}
        flexDir={{
          base: "column",
          xl: "row",
        }}
        align={{
          base: "flex-start",
          xl: "center",
        }}
      >
        <Stack>
          <HStack color="black.80">
            <Text fontSize="sm">Total Portfolio Value</Text>
            <Icon as={AiOutlineInfoCircle} />
          </HStack>
          <Text textStyle="h2" fontWeight="medium">
            ₹ 114,525.53
          </Text>
        </Stack>
        <Stack>
          <HStack color="black.80">
            <Text fontSize="sm">Wallet Balances</Text>
          </HStack>
          <HStack
            spacing={4}
            flexDir={{
              base: "column",
              sm: "row",
            }}
            align={{
              base: "flex-start",
              sm: "center",
            }}
          >
            <HStack>
              <Text textStyle="h2" fontWeight="medium">
                22.39047815
              </Text>{" "}
              <Tag colorScheme="gray">BTC</Tag>
            </HStack>
            <HStack>
              <Text textStyle="h2" fontWeight="medium">
                ₹ 1,300.00
              </Text>{" "}
              <Tag colorScheme="gray">INR</Tag>
            </HStack>
          </HStack>
        </Stack>
      </HStack>
      <HStack>
        <Button leftIcon={<Icon as={PiHandDepositFill} />}>Deposit</Button>
        <Button leftIcon={<Icon as={PiHandWithdrawFill} />}>Withdrawl</Button>
      </HStack>
    </HStack>
  );
};

export default PortfolioSection;
