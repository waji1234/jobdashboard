import React from "react";
import Header from "../Components/Header/Header";
import ProjectInfo from "../Components/ProjectInfo/ProjectInfo";
import NavigationTabs from "../Components/NavigationTabs/NavigationTabs";
import JobBoard from "../Components/JobBoard/JobBoard";
import Box from "@mui/material/Box";
import { Paper } from "@mui/material";

const Home = () => {
  return (
    <Box display="flex" flexDirection="column" gap="15px">
      <Box sx={{ px: "37px" }}>
        <Header />
      </Box>
      <Box
        sx={{ px: "52px"}}
        display="flex"
        flexDirection="column"
        gap="15px"
      >
        <ProjectInfo />

        <Paper
          elevation={3}
          sx={{
            px: "18px",
            display: "flex",
            flexDirection: "column",
            gap: "15px",
            backgroundColor: "#fafbfc"
          }}
        >
          <NavigationTabs />
          <JobBoard />
        </Paper>
      </Box>
    </Box>
  );
};

export default Home;
