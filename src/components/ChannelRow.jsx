import React from "react";

import '../css/channelrow.css';

import {Avatar } from "@material-ui/core";
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';



function ChannelRow({
    image,
    channel,
    subs,
    noOfVideos,
    description, verified,
    })
{

    return(

        <div className='channelRow'>

            <Avatar className='channelRow__logo'
            alt={channel} src={image}
            />

            <div className='channelRow__text'>

                <h4 className='channelRow__title'> {channel} {verified && <CheckCircleOutlineIcon/>}</h4>
                 {/*for full dot type alt + 7 = ' • '*/}
                <p>{subs} subscribers • {noOfVideos} videos</p>
                <p>{description}</p>

            </div>

        </div>

    );
}

    export default ChannelRow;