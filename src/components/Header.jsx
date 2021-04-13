import React, {useState} from "react";
//import css for Header

import "../css/header.css";

import {Link} from "react-router-dom";

//icons import 
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import VideoCall from "@material-ui/icons/VideoCall";
import AppsIcon from "@material-ui/icons/Apps";
import NotificationIcon from "@material-ui/icons/Notifications";
import Avatar from "@material-ui/core/Avatar";

//header component

function Header(){

    const [inputSearch, setInputSearch] = useState("");

    return (

        <div className="header">

            <div className="header__left">

                <MenuIcon />
                <Link to='/home'>
                    <img className="header__logo"
                         alt='youtubelogo'
                         src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/502px-Logo_of_YouTube_%282015-2017%29.svg.png">
                    </img>
                </Link>

            </div>

            <div className="header__input">
                <input
                onChange={(e => setInputSearch(e.target.value))}
                value={inputSearch}
                placeholder="Search"
                type="text" />

                <Link to={`/search/${inputSearch}`}>
                    <SearchIcon className="header__inputButton"/>
                </Link>

            </div>

            <div className="header__icons">
                <VideoCall className="header__icon"/>
                <AppsIcon className="header__icon" />
                <NotificationIcon className="header__icon" />
                <Avatar className="header__icon" />
            </div>

        </div>
         
    );
}

export default Header;