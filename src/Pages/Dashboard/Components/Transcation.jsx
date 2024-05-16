import React, { Fragment } from "react";
import { CustomCard } from "../../../chakra/CustomCard";
import {
  Box,
  Button,
  Divider,
  Flex,
  Grid,
  Icon,
  Stack,
  Text,
  transition,
} from "@chakra-ui/react";
import { FaBtc, FaRupeeSign } from "react-icons/fa";

const Transcation = () => {
  const transcation = [
    {
      id: "1",
      icon: FaRupeeSign,
      text: "INR Deposit",
      amount: "+ ₹82,144.90",
      timestamp: "2024-05-11 8:06 PM",
    },
    {
      id: "2",
      icon: FaBtc,
      text: "BTC Sell",
      amount: "- 82,144.90 BTC",
      timestamp: "2024-05-11 8:06 PM",
    },
    {
      id: "3",
      icon: FaRupeeSign,
      text: "INR Deposit",
      amount: "+ ₹82,144.90",
      timestamp: "2024-05-11 8:06 PM",
    },
  ];
  return (
    <CustomCard h="full">
      <Text fontSize="sm" color="black.80" mb={6}>
        Recent Transcation
      </Text>
      <Stack>
        {transcation.map((transcation,i) => (
            <Fragment  key={transcation.id}>
                {i!==0 &&<Divider mt={4}/>}
          <Flex gap={4}>
            <Grid
              placeItems="center"
              boxSize={10}
              borderRadius="full"
              bg="black.5"
            >
              <Icon as={transcation.icon} />
            </Grid>
            <Flex justify="space-between" width="full">
              <Stack spacing={0}>
                <Text textStyle="h6">{transcation.text}</Text>
                <Text fontSize="sm" color="black.80">
                  {transcation.timestamp}
                </Text>
              </Stack>
              <Text textStyle="h6">{transcation.amount}</Text>
            </Flex>
          </Flex>
            </Fragment>

        ))}
      </Stack>
      <Button w="full" colorScheme="gray" mt={6}>
        View All
      </Button>
    </CustomCard>
  );
};

export default Transcation;
