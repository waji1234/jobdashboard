import { Box, Typography } from "@mui/material";
import React from "react";
import JobDashboardHeader from "../../Components/Header/JobDashboardHeader/JobDashboardHeader";
import UserProfileHeader from "../../Components/Teammeberprofilecomponent/UserProfileHeader/UserProfileHeader";
import UserProfileCard from "../../Components/Teammeberprofilecomponent/userProfilecard/UserProfileCard";
import SalaryStatement from "../../Components/Teammeberprofilecomponent/SalaryStatement/SalaryStatement";
import RevenueReport from "../../Components/Teammeberprofilecomponent/RevenueReport/RevenueReport";
import folderLogo from '../../assets/folder-logo.svg'

export const userProfileData = [
  {
    id: 1,
    title: 'Current Salary',
    price: '2000',
    cycle: 'Per month',
    icon: folderLogo ,
  },
  {
    id: 2,
    title: 'YTD Earnings',
    price: '45000',
    cycle: 'vs last month',
    icon: folderLogo,
    percentage:8,
  },
  {
    id: 3,
    title: 'Total Deduction',
    price: '2000',
    cycle: 'This month',
    icon: folderLogo,
  },
];

const TeamMeMberProfile = () => {
  return (
    <Box>
      <JobDashboardHeader />
      <Box
        display="flex"
        gap="24px"
        flexDirection="column"
        px="32px"
        pt="24.22px"
        pb="37px"
        bgcolor="#F9FAFB"
      >
        <Typography
          fontFamily="Roboto"
          color="#101828"
          lineHeight="100%"
          fontWeight={500}
          fontSize="24px"
        >
          My Profile
        </Typography>
        <UserProfileHeader />
       <Box
  display="flex"
  flexDirection={{ xs: "column", sm: "row" }}
  gap={{ xs: "16px", sm: "20px" }} 
  width="100%"
  sx={{
    minWidth: { sm: "400px" },
  }}
>
  {userProfileData.map((profile) => (
    <UserProfileCard
      key={profile.id}
      title={profile.title}
      price={profile.price}
      icon={profile.icon}
      amount={profile.price}
      paymentcycle={profile.cycle}
      percentage={profile.percentage}
    />
  ))}
</Box>
        <SalaryStatement />
        <RevenueReport />
      </Box>
    </Box>
  );
};

export default TeamMeMberProfile;