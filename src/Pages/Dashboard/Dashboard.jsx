import { Grid, GridItem } from "@chakra-ui/react";
import DashboardLayout from "../../Components/DashboardLayout";
import PortfolioSection from "./Components/PortfolioSection";
import PriceSection from "./Components/PriceSection";
import Transcation from "./Components/Transcation";
import InfoCard from "./Components/InfoCard";

const Dashboard = () => {
  return (
    <DashboardLayout title="Dashboard">
      <Grid
        gridTemplateColumns={{
          base: "repeat(1,1fr)",
          xl: "repeat(2,1fr)",
        }}
        gap={6}
      >
        <GridItem colSpan={{
          base:1,
          xl:2
        }}>
          <PortfolioSection />
        </GridItem>
        <GridItem colSpan={1}>
          <PriceSection />
        </GridItem>
        <GridItem colSpan={1}>
          <Transcation />
        </GridItem>
        <GridItem colSpan={1}>
          <InfoCard
            tagtext="Loan"
            imgUrl="/dot_bg.svg"
            text="Learn more about Loans - Keep your Bitcoin, access it's value without selling it"
          />
        </GridItem>
        <GridItem colSpan={1}>
          <InfoCard
            tagtext="Contact"
            imgUrl="/grid_bg.svg"
            inverted="true"
            text="Learn more about our real state, mortgage, and corporate account services"
          />
        </GridItem>
      </Grid>
    </DashboardLayout>
  );
};

export default Dashboard;
