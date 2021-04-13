import React from "react";
import "../css/videocard.css";
import Avatar from "@material-ui/core/Avatar";

function VideoCard({image, title, channel, views, timestamp, channelimage,}){

    return(

        <div className="videoCard">

            <img className="videoCard__thumbnail" src={image} alt=""/>

            <div className="videoCard__info">

                <Avatar className="videoCard__avatar"
                alt={channel} src={channelimage} />

                <div className="videoCard__text">

                    <h4>{title}</h4>
                    <p>{channel}</p>
                    <p> {views} • {timestamp} </p>

                </div>

            </div>

        </div>
    );
}

export default VideoCard;