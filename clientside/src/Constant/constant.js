import FavouriteLogo from '../assets/Favouritelogo.svg';
import fileLogo from '../assets/filelogo.svg';
import folderlogo from '../assets/folder.svg';
import Salesproposal from '../assets/Salesproposal.svg';
import Salesproposalsecondlogo from '../assets/Salesproposalsecondlogo.png';
import Salesthirdproposal from '../assets/Salesthirdproposal.svg'
import DasboardIcon from '../assets/dashboardicon.svg'
import clientIcon from '../assets/clients.svg'
import proposalIcon from '../assets/proposals.svg'
import projectIcon from '../assets/projects.svg'
import TeamIcon from '../assets/team.svg'
import chatIcon from '../assets/message-chat-circle.svg'
import calenderIcon from '../assets/calendar.svg'
import ReportIcon from '../assets/reports.svg'
import InvoiceIcon from '../assets/invoice.svg'
import folderLogo from '../assets/folder-logo.svg'

export const metricData = [
  {
    title: 'Recent Files',
    value: 20,
    icon: fileLogo,
    bgColor: '#B3B8DB',
    iconColor: '#4C5BD4',
  },
  {
    title: 'Favorites',
    value: 15,
    icon: FavouriteLogo,
    bgColor: '#DCFAE6',
    iconColor: '#00796B',
  },
  {
    title: 'Create by Me',
    value: 53,
    icon: fileLogo,
    bgColor: '#91C9CB',
    iconColor: '#FB8C00',
  },
   {
    title: 'Default Folder',
    value: 15,
    icon: folderlogo,
    bgColor: '#FEDF89',
    iconColor: '#FB8C00',
  },
];

export const recommendations = [
  {
    image: Salesproposal,
    title: 'Sales Proposal Template',
  },
  {
    image: Salesthirdproposal,
    title: 'Legal Document Template',
  },
  {
    image: Salesproposalsecondlogo,
    title: 'Project Documentation Template',
  },
];
export const proposalData = [
  {
    id: 1,
    name: 'Sales Proposal',
    projectManager: 'Jerome Bell',
    date: '22 Oct, 2020',
    teamMembers: ['User1', 'User2', 'User3'],
    status: 'Draft',
    lastUpdated: '21 Sep, 2020',
  },
  {
    id: 2,
    name: 'Sales Receipt',
    projectManager: 'Jane Cooper',
    date: '24 May, 2020',
    teamMembers: ['User1', 'User2'],
    status: 'Completed',
    lastUpdated: '8 Sep, 2020',
  },
  {
    id: 3,
    name: 'Sales Commission',
    projectManager: 'Devon Lane',
    date: '22 Oct, 2020',
    teamMembers: ['User1', 'User2', 'User3', 'User4'],
    status: 'Pending',
    lastUpdated: '21 Sep, 2020',
  },
  {
    id: 4,
    name: 'Sales Proposal',
    projectManager: 'Dianne Russell',
    date: '1 Feb, 2020',
    teamMembers: ['User1'],
    status: 'In Progress',
    lastUpdated: '24 May, 2020',
  },
  {
    id: 5,
    name: 'Sales Receipt',
    projectManager: 'Floyd Miles',
    date: '8 Sep, 2020',
    teamMembers: ['User1', 'User2', 'User3'],
    status: 'On Hold',
    lastUpdated: '1 Feb, 2020',
  },
  {
    id: 6,
    name: 'Marketing Campaign',
    projectManager: 'Alice Johnson',
    date: '10 Jan, 2021',
    teamMembers: ['User1', 'User5'],
    status: 'Draft',
    lastUpdated: '11 Jan, 2021',
  },
  {
    id: 7,
    name: 'Product Launch',
    projectManager: 'Bob Smith',
    date: '5 Mar, 2021',
    teamMembers: ['User2', 'User3'],
    status: 'Completed',
    lastUpdated: '6 Mar, 2021',
  },
  {
    id: 8,
    name: 'UX Redesign',
    projectManager: 'Charlie Brown',
    date: '15 Apr, 2021',
    teamMembers: ['User1', 'User3', 'User4'],
    status: 'Pending',
    lastUpdated: '18 Apr, 2021',
  },
  {
    id: 9,
    name: 'Customer Survey',
    projectManager: 'Daisy Miller',
    date: '22 May, 2021',
    teamMembers: ['User2'],
    status: 'In Progress',
    lastUpdated: '25 May, 2021',
  },
  {
    id: 10,
    name: 'SEO Optimization',
    projectManager: 'Ethan Davis',
    date: '30 Jun, 2021',
    teamMembers: ['User1', 'User3'],
    status: 'On Hold',
    lastUpdated: '2 Jul, 2021',
  },
  {
    id: 11,
    name: 'Social Media Strategy',
    projectManager: 'Fiona Clark',
    date: '12 Jul, 2021',
    teamMembers: ['User4', 'User5'],
    status: 'Draft',
    lastUpdated: '15 Jul, 2021',
  },
  {
    id: 12,
    name: 'Partnership Proposal',
    projectManager: 'George Lee',
    date: '20 Aug, 2021',
    teamMembers: ['User1', 'User6'],
    status: 'Completed',
    lastUpdated: '21 Aug, 2021',
  },
  {
    id: 13,
    name: 'Website Audit',
    projectManager: 'Hannah Scott',
    date: '8 Sep, 2021',
    teamMembers: ['User2', 'User3'],
    status: 'Pending',
    lastUpdated: '10 Sep, 2021',
  },
  {
    id: 14,
    name: 'Email Campaign',
    projectManager: 'Isaac White',
    date: '17 Oct, 2021',
    teamMembers: ['User1', 'User5', 'User6'],
    status: 'In Progress',
    lastUpdated: '18 Oct, 2021',
  },
  {
    id: 15,
    name: 'Customer Feedback Analysis',
    projectManager: 'Julia King',
    date: '25 Nov, 2021',
    teamMembers: ['User2'],
    status: 'On Hold',
    lastUpdated: '28 Nov, 2021',
  },
  {
    id: 16,
    name: 'Annual Report',
    projectManager: 'Kevin Adams',
    date: '1 Dec, 2021',
    teamMembers: ['User3', 'User4'],
    status: 'Draft',
    lastUpdated: '3 Dec, 2021',
  },
  {
    id: 17,
    name: 'Vendor Management',
    projectManager: 'Laura Perez',
    date: '10 Jan, 2022',
    teamMembers: ['User2', 'User5'],
    status: 'Completed',
    lastUpdated: '12 Jan, 2022',
  },
  {
    id: 18,
    name: 'Risk Assessment',
    projectManager: 'Mike Thomas',
    date: '22 Feb, 2022',
    teamMembers: ['User1'],
    status: 'Pending',
    lastUpdated: '23 Feb, 2022',
  },
  {
    id: 19,
    name: 'Compliance Review',
    projectManager: 'Nina Walker',
    date: '3 Mar, 2022',
    teamMembers: ['User4', 'User5', 'User6'],
    status: 'In Progress',
    lastUpdated: '5 Mar, 2022',
  },
  {
    id: 20,
    name: 'Finance Projection',
    projectManager: 'Oscar Young',
    date: '15 Apr, 2022',
    teamMembers: ['User3'],
    status: 'On Hold',
    lastUpdated: '17 Apr, 2022',
  },
  {
    id: 21,
    name: 'Tech Roadmap',
    projectManager: 'Paula Green',
    date: '27 May, 2022',
    teamMembers: ['User2', 'User4'],
    status: 'Draft',
    lastUpdated: '28 May, 2022',
  },
  {
    id: 22,
    name: 'Hiring Plan',
    projectManager: 'Quincy Allen',
    date: '9 Jun, 2022',
    teamMembers: ['User1', 'User5'],
    status: 'Completed',
    lastUpdated: '10 Jun, 2022',
  },
  {
    id: 23,
    name: 'Security Review',
    projectManager: 'Rachel Turner',
    date: '18 Jul, 2022',
    teamMembers: ['User6'],
    status: 'Pending',
    lastUpdated: '19 Jul, 2022',
  },
  {
    id: 24,
    name: 'Investor Pitch',
    projectManager: 'Samuel Harris',
    date: '26 Aug, 2022',
    teamMembers: ['User2', 'User3'],
    status: 'In Progress',
    lastUpdated: '27 Aug, 2022',
  },
  {
    id: 25,
    name: 'Content Calendar',
    projectManager: 'Tina Brooks',
    date: '6 Sep, 2022',
    teamMembers: ['User4', 'User5'],
    status: 'On Hold',
    lastUpdated: '8 Sep, 2022',
  }
];

export default proposalData;

export const statusStyles = [
  {
    status: 'Draft',
    color: '#B54708',
    backgroundColor: '#FFFAEB',
    bordercolor:'1px solid #FEDF89'
  },
  {
    status: 'Completed',
    color: '#0B6166',
    backgroundColor: '#E7F3F4',
    bordercolor:'1px solid #91C9CB'
  },
  {
    status: 'Pending',
    color: '#B93815',
    backgroundColor: '#FEF6EE',
    bordercolor:'1px solid #F9DBAF',
  },
  {
    status: 'In Progress',
    color: '#175CD3',
    backgroundColor: '#EFF8FF',
    bordercolor:'1px solid #B2DDFF',
  },
  {
    status: 'On Hold',
    color: '#B93815',
    backgroundColor: '#FEF6EE',
     bordercolor:'1px solid #F9DBAF',
  }
];

export const navItems = [
  { label: "Dashboard", icon: DasboardIcon, path: "Dashboard" },
  { label: "Clients", icon: clientIcon , path: "clients" },
  { label: "Proposals", icon: proposalIcon, path: "proposals" },
  { label: "Projects", icon: projectIcon , path: "/projects" },
  { label: "Profile", icon: clientIcon , path: "profile" },
  { label: "Team", icon: TeamIcon, path: "/team" },
  { label: "Chat", icon: chatIcon, path: "/chat" },
  { label: "Calendar", icon: calenderIcon, path: "/calendar" },
  { label: "Report", icon: ReportIcon , path: "/report" },
  { label: "Invoice", icon: InvoiceIcon , path: "/invoice" },
];

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