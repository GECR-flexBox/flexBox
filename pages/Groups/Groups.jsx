import React from "react";
import "../stylesheet/Groups.css";
import Diversity3Icon from "@mui/icons-material/Diversity3";
import CodeIcon from "@mui/icons-material/Code";
import DataArrayIcon from "@mui/icons-material/DataArray";
import AdbIcon from "@mui/icons-material/Adb";
import AppleIcon from "@mui/icons-material/Apple";
import WebIcon from "@mui/icons-material/Web";
import SettingsSuggestIcon from "@mui/icons-material/SettingsSuggest";
import SportsCricketIcon from "@mui/icons-material/SportsCricket";
import AddIcon from "@mui/icons-material/Add";
const Groups = () => {
  return (
    <>
      <section id="groups">
        <aside>
          <div id="sec-title">Communities</div>
          <div id="gp-links">
            <div className="lnk" id="active">
              <Diversity3Icon /> <span>home</span>
            </div>

            <div className="lnk">
              <AdbIcon />
              <span>Android Dev</span>
            </div>
            <div className="lnk">
              <DataArrayIcon /> <span>DSA</span>
            </div>
            <div className="lnk">
              <AppleIcon />
              <span>IOS App Dev</span>
            </div>
            <div className="lnk">
              <WebIcon />
              <span>Frontend Dev</span>
            </div>
            <div className="lnk">
              <SportsCricketIcon />
              <span>Sports</span>
            </div>
            <div className="lnk">
              <SettingsSuggestIcon />
              <span>Backend Dev</span>
            </div>
            <div className="lnk">
              <CodeIcon /> <span>Problem Solving</span>
            </div>
          </div>
          <div id="gp-ftr">
            <div className="lnk">
              <AddIcon /> <span>Create a Group</span>
            </div>
          </div>
        </aside>
      </section>
    </>
  );
};

export default Groups;
