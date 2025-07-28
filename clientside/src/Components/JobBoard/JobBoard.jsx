import React from "react";
import JobColumn from "../JobColumn/JobColumn";
import ListAltIcon from "@mui/icons-material/ListAlt";
import PauseCircleOutlineOutlinedIcon from '@mui/icons-material/PauseCircleOutlineOutlined';
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';
import ArchiveSharpIcon from '@mui/icons-material/ArchiveSharp';
import DashboardIcon from '@mui/icons-material/Dashboard';
const dummyTasks = [
  {
    title: "UX Research",
    subtitle: "School Website",
    priority: "Urgent",
    date: "5 Oct",
    comments: 5,
    attachments: 5,
    members: [{ avatar: "/avatar1.png" }, { avatar: "/avatar2.png" }],
  },
  {
    title: "UI Design",
    subtitle: "School Website",
    priority: "Medium",
    date: "5 Oct",
    comments: 2,
    attachments: 0,
    members: [{ avatar: "/avatar3.png" }],
  },
];
const JobBoard = () => {
  const columns = [
    {
      title: "To do",
      backgroundcolor: "#F6F6F6",
      tasks: dummyTasks,
      icon: ListAltIcon,
    },
    {
      title: "In Progress",

      backgroundcolor: "#3A98EB1A",
      tasks: dummyTasks,
      icon: DashboardIcon,
    },
    {
      title: "Review",
      backgroundcolor: "#F1A02E1A",
      tasks: dummyTasks,
      icon:  PauseCircleOutlineOutlinedIcon,
    },
    {
      title: "Completed",
      backgroundcolor: "#20BB701A",
      tasks: dummyTasks.slice(0, 1),
      icon: CheckCircleOutlineOutlinedIcon,
    },
    {
      title: "Archive",
      backgroundcolor: "#F6F6F6",
      tasks: dummyTasks.slice(0, 1),
      icon: ArchiveSharpIcon,
    },
  ];
  return (
    <div
      style={{
        display: "flex",
        overflow: "hidden",
        padding: 16,
        overflowX: "auto",
      }}
    >
      {columns.map((job,index) => (
        <JobColumn
         key={index}
          title={job.title}
          backgroundcolor={job.backgroundcolor}
          tasks={job.tasks}
          Icon={job.icon}
        />
      ))}
    </div>
  );
};

export default JobBoard;
