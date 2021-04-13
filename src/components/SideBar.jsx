import React from "react";
import SideBarRow from "./SideBarRow";

import HomeIcon from "@material-ui/icons/Home";
import WhatshotIcon from "@material-ui/icons/Whatshot";
import Subscription from "@material-ui/icons/Subscriptions";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import HistoryIcon from "@material-ui/icons/History";
import OndemandVideoIcon from "@material-ui/icons/OndemandVideo";
import ThumbUpAltOutlinedIcon from "@material-ui/icons/ThumbUpAltOutlined";
import ExpandMoreOutlinedIcon from "@material-ui/icons/ExpandMoreOutlined";

import {Link} from "react-router-dom";

// css for sidebar 
import '../css/sidebar.css';

function SideBar( ) {
    return (
        <div className="sidebar">

            <Link to="/home">
                <SideBarRow selected Icon={HomeIcon} title="Home"/>
            </Link>

            <Link to="/trending">
                <SideBarRow Icon={WhatshotIcon} title="Trending"/>
            </Link>

            <Link to="/subscription">
                <SideBarRow Icon={Subscription} title="Subscription"/>
            </Link>

            <hr/>

            <Link to="/library">
                <SideBarRow Icon={VideoLibraryIcon} title="Library"/>
            </Link>

            <Link to="/history">
                <SideBarRow Icon={HistoryIcon} title="History"/>
            </Link>

            <Link to="/yourvideos">
                <SideBarRow Icon={OndemandVideoIcon} title="Your videos"/>
            </Link>

            <Link to="/whatchlater">
                <SideBarRow Icon={VideoLibraryIcon} title="Whatch Later"/>
            </Link>

            <Link to="/likedvideos">
                <SideBarRow Icon={ThumbUpAltOutlinedIcon} title="Liked videos"/>
            </Link>

            <SideBarRow Icon={ExpandMoreOutlinedIcon} title="Show more"/>

            <hr/>

        </div>
    );
}

export default SideBar;