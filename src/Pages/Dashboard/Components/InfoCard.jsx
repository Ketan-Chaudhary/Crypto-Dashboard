import React from "react";
import { CustomCard } from "../../../chakra/CustomCard";
import { Tag, Text } from "@chakra-ui/react";

const InfoCard = ({ tagtext, imgUrl, text, inverted }) => {
  return (
    <CustomCard bgImage={imgUrl} bgSize="cover" bgRepeat="no-repeat" bgColor={inverted ? "p.purple":"white"} bgBlendMode="">
      <Tag
        bg={
            inverted ? "white" : "p.purple"
        }
        color={inverted ? "p.purple" : "white"}
        borderRadius="full"
      >
        {tagtext}
      </Tag>
      <Text textStyle="h5" mt={4} fontWeight="medium"  color={inverted ? "white" : "black"}>
        {" "}
        {text}
      </Text>
    </CustomCard>
  );
};

export default InfoCard;
