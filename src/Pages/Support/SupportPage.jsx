import React from "react";
import SupportCard from "./Components/SupportCard";
import DashbordLayout from "../../Components/DashboardLayout";
import ContactCard from "./Components/ContactCard";
import { IoMdMail } from "react-icons/io";
import { MdMessage } from "react-icons/md";
import InfoCard from "../Dashboard/Components/InfoCard";
import { Stack } from "@chakra-ui/react";

const SupportPage = () => {
  return (
    <DashbordLayout title="Support">
      <Stack spacing="5rem">
      <SupportCard
        leftComponent={<ContactCard />}
        title="Contact Us"
        text=" Have a question or just want to know more? Feel free to reach out to
          us."
        icon={IoMdMail}
      />
      <SupportCard
        leftComponent={
          <InfoCard
            tagtext="Chatbot"
            imgUrl="/grid_bg.svg"
            inverted="true"
            text="Chat with us now"
          />
        }
        title="Live Chat"
        text="Don't have time to wait for the answer? Chat with us now."
        icon={MdMessage}
      />
            </Stack>
    </DashbordLayout>
  );
};

export default SupportPage;
