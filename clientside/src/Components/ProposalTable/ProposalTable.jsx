import React, { useState } from "react";
import deletebutton from "../../assets/deletebutton.svg";
import editbutton from "../../assets/editbutton.svg";
import { toast } from "react-toastify";
import {
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Chip,
} from "@mui/material";
import { Tooltip } from "@mui/material";
import proposalData from "../../Constant/constant";
import UserAvatar from "../UserAvatars/AvatarGroup";
import { statusStyles } from "../../Constant/constant";
import Pagination from "../Pagination/Pagination";
import SortingButtons from "../sortingbuttons/SortingButtons";

const ProposalTable = () => {
  const [currentpage, setcurrentpage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortedData, setSortedData] = useState(proposalData);
  const itemsperpage = 5;
  const totalPages = Math.ceil(sortedData.length / itemsperpage);
  const currentpagedata = sortedData.slice(
    (currentpage - 1) * itemsperpage,
    currentpage * itemsperpage
  );

  const handledelete = (id) => {
    const updatedsorteddata = sortedData.filter((item) => item.id !== id);
    setSortedData(updatedsorteddata);
    toast.success("record deleted successfully");
    if (currentpage === totalPages && currentpagedata.length == 1) {
      setcurrentpage(currentpage - 1);
    }
  };

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    const filtered = proposalData.filter((item) => item.name.includes(value));
    setSortedData(filtered);
  };

  const handleSort = () => {
    const sorted = [...sortedData].sort((a, b) => a.name.localeCompare(b.name));
    setSortedData(sorted);
  };

  const getStatusStyle = (status) =>
    statusStyles.find((s) => s.status === status) || {
      color: "#344054",
      backgroundColor: "#F2F4F7",
    };

  return (
    <>
      <Paper
      elevation={0}
        sx={{
          backgroundColor: "#FFFFFF",
          borderRadius: "12px",
          border:'1px solid #EAECF0',
          py: "16px",
        }}
      >
        <SortingButtons
          searchTerm={searchTerm}
          handleSearch={handleSearch}
          sort={handleSort}
        />
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow
                sx={{
                  backgroundColor: "#F9FAFB",
                  width: "100%",
                }}
              >
                {[
                  "Name",
                  "Project Manager",
                  "Date",
                  "Teams",
                  "Status",
                  "Last Updated",
                  "",
                ].map((label, index) => (
                  <TableCell
                    key={index}
                    sx={{
                      fontFamily: "Inter",
                      fontWeight: 500,
                      fontSize: "12px",
                      color: "#475467",
                      backgroundColor: "#F9FAFB",
                    }}
                  >
                    {label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {currentpagedata.map((item, index) => {
                const { color, backgroundColor, bordercolor } = getStatusStyle(
                  item.status
                );

                return (
                  <TableRow key={index}>
                    <TableCell
                      sx={{
                        fontFamily: "Inter",
                        fontWeight: 500,
                        fontSize: "14px",
                        color: "#101828",
                      }}
                    >
                      {item.name}
                    </TableCell>
                    <TableCell
                      sx={{
                        fontFamily: "Inter",
                        fontWeight: 400,
                        fontSize: "14px",
                        color: "#475467",
                      }}
                    >
                      {item.projectManager}
                    </TableCell>
                    <TableCell
                      sx={{
                        fontFamily: "Inter",
                        fontWeight: 400,
                        fontSize: "14px",
                        color: "#475467",
                      }}
                    >
                      {item.date}
                    </TableCell>
                    <TableCell>
                      <UserAvatar
                        useradditionbutton={false}
                        members={item.teamMembers}
                      />
                    </TableCell>
                    <TableCell>
                      <Chip
                        label={item.status}
                        size="small"
                        sx={{
                          backgroundColor,
                          color,
                          border: bordercolor,
                          fontWeight: 500,
                          fontSize: "12px",
                          fontFamily: "Inter",
                          borderRadius: "9999px",
                          height: "24px",
                        }}
                      />
                    </TableCell>
                    <TableCell
                      sx={{
                        fontFamily: "Inter",
                        fontWeight: 400,
                        fontSize: "14px",
                        color: "#475467",
                      }}
                    >
                      {item.lastUpdated}
                    </TableCell>

                    <TableCell>
                      <Tooltip title="Delete">
                        <IconButton
                          size="small"
                          onClick={() => handledelete(item.id)}
                        >
                          <img src={deletebutton} alt="delete" />
                        </IconButton>
                      </Tooltip>
                      <Tooltip title="Edit">
                        <IconButton size="small">
                          <img src={editbutton} alt="edit" />
                        </IconButton>
                      </Tooltip>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
        <Pagination
          currentpage={currentpage}
          totalPages={totalPages}
          onPageChange={(page) => setcurrentpage(page)}
        />
      </Paper>
    </>
  );
};

export default ProposalTable;