import React from "react";
import { Avatar } from "@material-ui/core";
import classes from "./Story.module.css";

const Story = ({ backgroundImage, profileImage, title }) => {
   return (
      <div
         className={classes.Story}
         style={{ backgroundImage: `url(${backgroundImage})` }}
      >
         <Avatar className={classes.StoryAvatar} src={profileImage} />
         <h4 className={classes.StoryTitle}>{title}</h4>
      </div>
   );
};

export default Story;
