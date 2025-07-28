import { Box, Button, Paper, Typography } from "@mui/material";
import JobDashboardHeader from "../../Components/Header/JobDashboardHeader/JobDashboardHeader";
import InfoCard from "../../Components/InfoCard/InfoCard";
import { metricData } from "../../Constant/constant";
import Recomendations from "../../Components/Recomendations/Recomendations";
import { recommendations } from "../../Constant/constant";
import AddIcon from "@mui/icons-material/Add";
import ProposalTable from "../../Components/ProposalTable/ProposalTable";

const DashboardPage = () => {
  return (
    <Box display="flex" flexDirection="column">
      <JobDashboardHeader />
      <Box
        sx={{
          px: "32px",
          pt: "32px",
          pb: "27.5px",
          display: "flex",
          flexDirection: "column",
          gap: "20px",
        }}
      >
        <Box     display="flex" gap='20px'   sx={{
    flexDirection: {
      xs: 'column',  
      sm: 'column',  
      md: 'row', 
    },
  }}>
          {metricData.map((item, index) => (
            <InfoCard
              key={index}
              title={item.title}
              value={item.value}
              icon={item.icon}
              bgColor={item.bgColor}
              iconColor={item.iconColor}
            />
          ))}
        </Box>
        <Paper elevation={0}
          sx={{
            display: "flex",
            flexDirection: "column",
            gap:'24px',
            padding: '16px',
            backgroundColor: "#FFFFFF",
            border:'0.75px solid #EAECF0',
            borderRadius:'12px',
          }}
        >
        <Box
  sx={{
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    px: { xs: "8px", sm: "16px" }, 
    py: { xs: "8px", sm: "16px" },
    gap: { xs: "12px", sm: "0px" }, 
    flexWrap: "wrap",
  }}
>
  <Typography
    sx={{
      fontFamily: "Roboto",
      fontWeight: 500,
      fontSize: "18px",
      color: "#000000",
    }}
  >
    Recommended Proposal
  </Typography>

  <Button
    startIcon={
      <AddIcon
        sx={{ ml: "4px", width: "11.67px", height: "11.67px", color: "#0B6166" }}
      />
    }
    sx={{
      color: "#0B6166",
      px: "12px",
      py: "8px",
      fontFamily: "Inter",
      fontWeight: 600,
      fontSize: "14px",
    }}
  >
    New Proposal
  </Button>
</Box>
         <Box
  sx={{
    display: "flex",
    boxShadow:'none',
    flexDirection: {
      xs: 'column',
      sm: 'column',
      md: 'row',
    },
    alignItems: {
      xs: 'center', 
      sm: 'center',
      md: 'flex-start', 
    },
    justifyContent: {
      xs: 'center', 
      sm: 'center',
      md: 'flex-start',
    },
    gap: "26px",
    py: {
      sm: '16px',
      md: '8px',
    },
    pl: {
      sm: '12px',
      md: '4px',
    },
    pr: {
      sm: '82.33px',
      md: '2px',
    },
    backgroundColor: "#FFFFFF",
  }}

>
  {recommendations.map((item, index) => (
    <Recomendations
      key={index}
      image={item.image}
      title={item.title}
    />
  ))}
</Box>
        </Paper>
        <ProposalTable />
      </Box>
    </Box>
  );
};

export default DashboardPage;