import { HStack, Icon, Stack, Text } from "@chakra-ui/react";
import { AiOutlineInfoCircle } from "react-icons/ai";

const PortfolioSection = () => {
  return (
    <HStack bg="white" border="xl" p="6">
      <Stack>
        <HStack color="black.80">
          <Text fontSize="14px" >Total Portfolio Value</Text>
          <Icon as={AiOutlineInfoCircle} />
        </HStack>
        <Text fontSize="24px">
        ₹ 114,525.53
        </Text>
      </Stack>
    </HStack>
  );
};

export default PortfolioSection;
