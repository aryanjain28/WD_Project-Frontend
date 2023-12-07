import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { TopBar } from "../../../components/TopBar";
import DashboardCards from "./DashboardCard";

const Home = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  if (!loaded) {
    return null;
  }

  return (
    <>
      <TopBar />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Typography
          display="flex"
          alignItems="center"
          justifyContent="center"
          p={2}
          sx={{
            fontSize: 30,
            letterSpacing: 4,
            fontWeight: "light",
            textShadow: 3,
          }}
        >
          Smart Office Solution
        </Typography>

        {/* Display Table */}
        <DashboardCards />

        {/* <TabComponent currentTab={currentTab} setCurrentTab={setCurrentTab} />
          {currentTab == 0 && <ClientTable />}
          {currentTab == 1 && <StaffTable />}
          {currentTab == 2 && <TaskTable />}
          {currentTab == 3 && <TaskTypesTable />}
          {currentTab == 4 && <MeetingTable />}
          {currentTab == 5 && <OfficeHoursTable />} */}
        {/* </Grid> */}
      </Box>
    </>
  );
};

export default Home;
