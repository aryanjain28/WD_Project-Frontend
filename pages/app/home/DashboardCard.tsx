import { Box, Grid, Icon, Typography } from "@mui/material";
import { green, amber, red, blue, orange, grey } from "@mui/material/colors";
import ClientsIcon from "@mui/icons-material/Group";
import StaffIcon from "@mui/icons-material/AssignmentInd";
import TasksIcon from "@mui/icons-material/Assignment";
import TaskTypesIcon from "@mui/icons-material/List";
import MeetingsIcon from "@mui/icons-material/VpnLock";
import HoursIcon from "@mui/icons-material/QueryBuilder";
import React, { Component } from "react";
import { useRouter } from "next/router";
import { ROUTES } from "../../../constants/routes";

const dashboardCardData = [
  {
    id: 0,
    title: "Clients",
    icon: <ClientsIcon />,
    url: ROUTES.clients,
    color: red[400],
  },
  {
    id: 1,
    title: "Staff",
    icon: <StaffIcon />,
    url: ROUTES.staff,
    color: green[400],
  },
  {
    id: 2,
    title: "Tasks",
    icon: <TasksIcon />,
    url: ROUTES.tasks,
    color: amber[400],
  },
  {
    id: 3,
    title: "Task Types",
    icon: <TaskTypesIcon />,
    url: ROUTES.taskTypes,
    color: blue[400],
  },
  {
    id: 4,
    title: "Meetings",
    icon: <MeetingsIcon />,
    url: ROUTES.meetings,
    color: orange[800],
  },
  {
    id: 5,
    title: "Office Hours",
    icon: <HoursIcon />,
    url: ROUTES.officeHours,
    color: grey[400],
  },
];

const DashboardCards = () => {
  const router = useRouter();

  return (
    <Grid
      container
      display="flex"
      alignItems="center"
      justifyContent="space-evenly"
      gap={2}
      my={2}
    >
      {dashboardCardData.map(({ title, color, icon, url }) => {
        return (
          <Grid item width={500} height={250} my={5}>
            <Box
              width="100%"
              height="100%"
              boxShadow={3}
              borderRadius={2}
              borderTop={`8px solid ${color}`}
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              sx={{ cursor: "pointer" }}
              onClick={() => router.push(url)}
            >
              {React.cloneElement(icon, {
                sx: { fontSize: 150, color, mx: 4 },
              })}

              <Typography variant="h4" mr={5} color={grey.A400}>
                {title}
              </Typography>
            </Box>
          </Grid>
        );
      })}
    </Grid>
  );
};

export default DashboardCards;
