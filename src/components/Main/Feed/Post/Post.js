import React from "react";
import { Avatar } from "@material-ui/core";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import NearMeIcon from "@material-ui/icons/NearMe";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import ExpandMoreOutlinedIcon from "@material-ui/icons/ExpandMoreOutlined";
import classes from "./Post.module.css";

const Post = ({ profilePic, username, timestamp, message, image }) => {
   return (
      <div className={classes.Post}>
         <div className={classes.PostTop}>
            <Avatar src={profilePic} />
            <div className={classes.PostInfo}>
               <h3>{username}</h3>
               <p>{new Date(timestamp?.toDate()).toUTCString()}</p>
            </div>
         </div>

         <div className={classes.PostText}>
            <p>{message}</p>
         </div>

         <div className={classes.PostImage}>
            {image && <img src={image} alt="..." />}
         </div>

         <div className={classes.PostOptions}>
            <div className={classes.PostOption}>
               <ThumbUpIcon />
               <p>Like</p>
            </div>
            <div className={classes.PostOption}>
               <ChatBubbleOutlineIcon />
               <p>Comment</p>
            </div>
            <div className={classes.PostOption}>
               <NearMeIcon />
               <p>Share</p>
            </div>
            <div className={classes.PostOption}>
               <AccountCircleIcon />
               <ExpandMoreOutlinedIcon />
            </div>
         </div>
      </div>
   );
};

export default Post;
