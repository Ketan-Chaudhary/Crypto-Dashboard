import {
  Button,
  Flex,
  HStack,
  Icon,
  Image,
  Stack,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import { CustomCard } from "../../../chakra/CustomCard";
import { BsGraphUpArrow } from "react-icons/bs";
import { FaPlusCircle } from "react-icons/fa";
import { FaCircleMinus } from "react-icons/fa6";
const PriceSection = () => {
  const timestamps = ["7:15 PM", "7:55 PM", "8:55 PM", "9:55 PM", "10:55 PM"];

  return (
    <CustomCard>
      {" "}
      <Flex justifyContent="space-between" align="start">
        <Stack>
          <HStack color="black.80">
            <Text fontSize="sm">Current Price</Text>
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
              <HStack fontWeight="medium" color="green.500">
                <Icon as={BsGraphUpArrow} />
                <Text fontSize="sm" fontWeight="medium">
                  22%
                </Text>{" "}
              </HStack>
            </HStack>
          </HStack>
        </Stack>
        <HStack>
          <Button leftIcon={<Icon as={FaPlusCircle} />}>Buy</Button>
          <Button leftIcon={<Icon as={FaCircleMinus} />}>Sell</Button>
        </HStack>
      </Flex>
      <Tabs variant="soft-rounded">
        <Flex justify="end">
          <TabList bg="black.5" p="3px">
            {["1H", "1D", "1W", "1M"].map((tab) => (
              <Tab
                _selected={{
                  bg: "white",
                }}
                fontSize="sm"
                borderRadius="4"
                px="6px"
                key={tab}
              >
                {tab}{" "}
              </Tab>
            ))}
          </TabList>
        </Flex>
        <TabPanels>
          <TabPanel>
            <Image w="100%" src="/graph.svg" mt="3rem" />
            <HStack justify="space-between">
              {timestamps.map((timestamp) => (
                <Text key={timestamp} fontSize="sm" color="black.80">
                  {timestamp}
                </Text>
              ))}
            </HStack>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </CustomCard>
  );
};

export default PriceSection;
