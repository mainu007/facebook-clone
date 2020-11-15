import React from "react";
import VideocamIcon from "@material-ui/icons/Videocam";
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import classes from "./MessageSenderBottom.module.css";

const MessageSenderBottom = () => {
   return (
      <div className={classes.MessageSenderBottom}>
         <div className={classes.MessageSenderOption}>
            <VideocamIcon style={{ color: "red" }} />
            <h3>Live Video</h3>
         </div>
         <div className={classes.MessageSenderOption}>
            <PhotoLibraryIcon style={{ color: "green" }} />
            <h3>Photo/Video</h3>
         </div>
         <div className={classes.MessageSenderOption}>
            <InsertEmoticonIcon style={{ color: "orange" }} />
            <h3>Feeling/Activity</h3>
         </div>
      </div>
   );
};

export default MessageSenderBottom;
