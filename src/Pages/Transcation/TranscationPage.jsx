import {
  Button,
  Card,
  Flex,
  HStack,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  Tag,
} from "@chakra-ui/react";
import DashbordLayout from "../../Components/DashboardLayout";
import { IoMdDownload } from "react-icons/io";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import TranscationTable from "./Components/TranscationTable";
import { FaSearch } from "react-icons/fa";
const TranscationPage = () => {
  const tabs = [
    {
      name: "All",
      count: 349,
    },
    {
      name: "Deposit",
      count: 349,
    },
    {
      name: "Withdraw",
      count: 349,
    },
    {
      name: "Trade",
      count: 349,
    },
  ];

  return (
    <DashbordLayout title="Transcation">
      <Flex justify="end" mt={6} mb={3}>
        <Button leftIcon={<Icon as={IoMdDownload} />}>Export CSV</Button>
      </Flex>
      <Card borderRadius="1rem">
        <Tabs>
          <TabList display="flex" justifyContent="space-between" >
            <HStack>
                 {tabs.map((tab) => (
              <Tab key={tab.name} display="flex"gap="2" py="4">
                {tab.name}{" "}
                <Tag colorScheme="gray" borderRadius="full">
                  {tab.count}
                </Tag>
              </Tab>
            ))}
            </HStack>
         
            <HStack>
            <InputGroup maxW="200px" pr="6">
              <InputLeftElement pointerEvents="none">
                <Icon as={FaSearch} />
              </InputLeftElement>
              <Input type="text" placeholder="Search..." />
            </InputGroup>
            </HStack>

          </TabList>

          <TabPanels>
            <TabPanel>
              <TranscationTable />
            </TabPanel>
            <TabPanel>
              <p>two!</p>
            </TabPanel>
            <TabPanel>
              <p>three!</p>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Card>
    </DashbordLayout>
  );
};

export default TranscationPage;
