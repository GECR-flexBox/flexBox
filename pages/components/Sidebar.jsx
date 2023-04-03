import React from "react";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import InsertDriveFileOutlinedIcon from "@mui/icons-material/InsertDriveFileOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import Link from 'next/link';
import styles from "../../styles/Sidebar.module.css"
const Sidebar = () => {
  return (
    <>
      <div id={styles.side_nav}>
        <header id={styles.side_header} className={styles.row}>
          <div className={styles.logo}>
            Flex
            <span className={styles.gray}>Box</span>
          </div>
          <div className={`${styles.toggle} ${styles.gray}`}>
            <MenuOpenIcon />
          </div>
        </header>
        <div id={styles.nav_links}>
          <div id={styles.link}>
            <Link href="/Dashboard">
              <span>
                <DashboardOutlinedIcon />
              </span>
              <b>dashboard</b>
            </Link>
            <Link href="/">
              <span>
                <HomeRoundedIcon />
              </span>
              <b>homepage</b>
            </Link>
          </div>
          <small>community</small>
          <div id={styles.link}>
            <Link href="/Social">
              <span>
                <FavoriteBorderOutlinedIcon />
              </span>
              <b>social wall</b>
            </Link>
            <Link href="/Members">
              <span>
                <LanguageOutlinedIcon />
              </span>
              <b>members</b>
            </Link>
            <Link href="/Groups">
              <span>
                <PeopleAltIcon />
              </span>
              <b>groups</b>
            </Link>
            <Link href="/Forums">
              <span>
                <ChatBubbleOutlineIcon />
              </span>
              <b>forums</b>
            </Link>
          </div>
          <small>others</small>
          <div id={styles.link}>
            <Link href="/">
              <span>
                <ErrorOutlineIcon />
              </span>
              <b>news</b>
            </Link>
            <Link href="/">
              <span>
                <InsertDriveFileOutlinedIcon />
              </span>
              <b>Pages</b>
            </Link>
            <Link href="/Signup">
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
