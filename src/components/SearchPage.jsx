import React from "react";

import '../css/searchpage.css';

import ChannelRow from "./ChannelRow";
import VideoRow from "./VideoRow";


import TuneIcon from '@material-ui/icons/Tune';



function SearchPage(){

    return(

        <div className="searchPage">

            <div className="searchPage__filter">

                <TuneIcon />
                <h2>Filter</h2>

            </div>

            <hr/>

            <ChannelRow
                image=''
                channel = "Clever Programmer"
                verified
                subs = "660K"
                noOfVideos = {382}
                description = "You can find programming lessons and a lot of tips and tricks how to solve problems with ease."
            />

            <hr/>

            <VideoRow
                image = "data:image/jpeg;base64,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"
                subs = "645K"
                description = "SQL fundamemntals, CRUD with java language"
                timestamp= "1 minute ago"
                channel= "Clever Programmer"
                title = "SQL fundamentals"
                views = "100K"
            />

            <VideoRow
               image = "data:image/jpeg;base64,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"
               subs = "645K"
               description = "SQL fundamemntals, CRUD with java language"
               timestamp= "1 minute ago"
               channel= "Clever Programmer"
               title = "SQL fundamentals"
               views = "100K"
            />

        </div>

    );


}

export default SearchPage;