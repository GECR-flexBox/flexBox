import React from "react";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import "../stylesheet/Sidebar.css";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import InsertDriveFileOutlinedIcon from "@mui/icons-material/InsertDriveFileOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import { Link } from "react-router-dom";
const Sidebar = () => {
  return (
    <>
      <div id="side-nav">
        <header id="side-header" className="row">
          <div className="logo">
            Flex
            <span className="gray">Box</span>
          </div>
          <div className="toggle gray">
            <MenuOpenIcon />
          </div>
        </header>
        <div id="nav-links">
          <div id="link">
            <Link to="/dashboard">
              <span>
                <DashboardOutlinedIcon />
              </span>
              <b>dashboard</b>
            </Link>
            <Link to="/">
              <span>
                <HomeRoundedIcon />
              </span>
              <b>homepage</b>
            </Link>
          </div>
          <small>community</small>
          <div id="link">
            <Link to="/social">
              <span>
                <FavoriteBorderOutlinedIcon />
              </span>
              <b>social wall</b>
            </Link>
            <Link to="/members">
              <span>
                <LanguageOutlinedIcon />
              </span>
              <b>members</b>
            </Link>
            <Link to="/groups">
              <span>
                <PeopleAltIcon />
              </span>
              <b>groups</b>
            </Link>
            <Link to="/forums">
              <span>
                <ChatBubbleOutlineIcon />
              </span>
              <b>forums</b>
            </Link>
          </div>
          <small>others</small>
          <div id="link">
            <Link to="/">
              <span>
                <ErrorOutlineIcon />
              </span>
              <b>news</b>
            </Link>
            <Link to="/">
              <span>
                <InsertDriveFileOutlinedIcon />
              </span>
              <b>Pages</b>
            </Link>
            <Link to="/">
              <span>
                <LogoutOutlinedIcon />
              </span>
              <b>logout</b>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
