import React from "react";
import { Avatar, IconButton } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import ForumIcon from "@material-ui/icons/Forum";
import NotificationsActiveIcon from "@material-ui/icons/NotificationsActive";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import classes from "./HeaderRight.module.css";
import { useStateValue } from "../../../store/StateProvider";

const HeaderRight = () => {
   const [{ user }] = useStateValue();

   return (
      <div className={classes.HeaderRight}>
         <div className={classes.HeaderInfo}>
            <Avatar src={user.photoURL} />
            <h4>{user.displayName}</h4>
         </div>

         <IconButton>
            <AddIcon />
         </IconButton>
         <IconButton>
            <ForumIcon />
         </IconButton>
         <IconButton>
            <NotificationsActiveIcon />
         </IconButton>
         <IconButton>
            <ExpandMoreIcon />
         </IconButton>
      </div>
   );
};

export default HeaderRight;
