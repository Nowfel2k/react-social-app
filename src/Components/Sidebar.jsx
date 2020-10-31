import React from "react";
import SidebarRow from "./Child Components/SidebarRow";
import "../Styles/Sidebar.css";

import LocalHospitalIcon from "@material-ui/icons/LocalHospital";
import EmojiFlagsIcon from "@material-ui/icons/EmojiFlags";
import PeopleIcon from "@material-ui/icons/People";
import ChatIcon from "@material-ui/icons/Chat";
import StorefrontIcon from "@material-ui/icons/Storefront";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";

import { ExpandMoreOutlined } from "@material-ui/icons";
import { useStateValue } from "../StateProvider";
import { Link } from "react-router-dom";

function Sidebar() {
  const [{ user }] = useStateValue();

  return (
    <div className="sidebar">
      <Link to="/profile">
        <SidebarRow src={user?.photoURL} title={user?.displayName} />
      </Link>

      <SidebarRow
        Icon={LocalHospitalIcon}
        title="Covid-19 Information Center"
      />
      <SidebarRow Icon={EmojiFlagsIcon} title="Pages" />

      <Link to="/requests">
        <SidebarRow Icon={PeopleIcon} title="Friends" />
      </Link>
      <SidebarRow Icon={ChatIcon} title="Messenger" />
      <SidebarRow Icon={StorefrontIcon} title="Marketplace" />
      <SidebarRow Icon={VideoLibraryIcon} title="Videos" />
      <SidebarRow Icon={ExpandMoreOutlined} title="See more" />
    </div>
  );
}

export default Sidebar;
