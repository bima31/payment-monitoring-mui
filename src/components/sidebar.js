import React from "react";
import * as AiIcons from "react-icons/ai";
import HomeIcon from '@mui/icons-material/Home';
import CreateNewFolderIcon from '@mui/icons-material/CreateNewFolder';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';

export const UKSidebarData = [
  {
    title: "Beranda",
    path: "/unitkerja-beranda",
    icon: <HomeIcon/>,
    cName: "nav-text",
  },
  // {
  //   title: "Admin Role",
  //   path: "/admin-beranda",
  //   icon: <AiIcons.AiFillHome />,
  //   cName: "nav-text",
  // },
  {
    title: "Payment Request",
    path: "/unitkerja-paymentrequest",
    icon: <CreateNewFolderIcon/>,
    cName: "nav-text",
  },
];

export const GSSidebarData = [
  {
    title: "Daftar GS",
    path: "/gs-beranda",
    icon: <HomeIcon/>,
    cName: "nav-text",
  },
];

export const AccountingSidebarData = [
  {
    title: "Daftar Accounting",
    path: "/accounting-beranda",
    icon: <HomeIcon/>,
    cName: "nav-text",
  },
];

export const AdminSidebarData = [
  {
    title: "Management Role & Account",
    path: "/admin-beranda",
    icon: <AiIcons.AiOutlineUser />,
    cName: "nav-text",
  },
  {
    title: "Service Level Agreement",
    path: "/admin-beranda",
    icon: <AiIcons.AiFillSetting />,
    cName: "nav-text",
  },

];
export const SignOutSidebarData = [
  {
    title: "Sign Out",
    path: "/",
    icon: <ExitToAppIcon />,
    cName: "nav-text",
  },
];
