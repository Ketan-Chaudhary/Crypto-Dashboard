import { Grid, GridItem } from "@chakra-ui/react";
import DashboardLayout from "../../Components/DashboardLayout";
import PortfolioSection from "./Components/PortfolioSection";
import PriceSection from "./Components/PriceSection";

const Dashboard = () => {
  return (
    <DashboardLayout title="Dashboard">
      <Grid
      gridTemplateColumns={{
        base: "repeat(1,1fr)",
        md: "repeat(2,1fr)"
      }}
      gap={6}
      >
        <GridItem colSpan={2}>
          <PortfolioSection />
        </GridItem>
        <GridItem colSpan={1}>
          <PriceSection />
        </GridItem>
      </Grid>
    </DashboardLayout>
  );
};

export default Dashboard;
