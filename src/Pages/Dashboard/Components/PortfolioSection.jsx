import { Button, HStack, Icon, Stack, Tag, Text } from "@chakra-ui/react";
import { AiOutlineInfoCircle } from "react-icons/ai";
// import { PiHandDepositDuotone } from "react-icons/pi";
// import { PiHandWithdrawDuotone } from "react-icons/pi";
import { PiHandWithdrawFill } from "react-icons/pi";
import { PiHandDepositFill } from "react-icons/pi";

const PortfolioSection = () => {
  return (
    <HStack bg="white" border="xl" p="6" spacing={16} justify={"space-between"}>
      <HStack>
        <Stack>
          <HStack color="black.80">
            <Text fontSize="sm">Total Portfolio Value</Text>
            <Icon as={AiOutlineInfoCircle} />
          </HStack>
          <Text textStyle="h2">₹ 114,525.53</Text>
        </Stack>
        <Stack>
          <HStack color="black.80">
            <Text fontSize="sm">Wallet Balances</Text>
          </HStack>
          <HStack>
            <HStack>
              <Text textStyle="h2">22.39047815</Text> <Tag>BTC</Tag>
            </HStack>
            <HStack>
              <Text textStyle="h2">₹ 1,300.00</Text> <Tag>INR</Tag>
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
