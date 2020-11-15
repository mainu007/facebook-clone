import { Avatar } from "@material-ui/core";
import React from "react";
import classes from "./SidebarRow.module.css";

const SidebarRow = ({ src, Icon, title }) => {
   return (
      <div className={classes.SidebarRow}>
         {src && <Avatar src={src} />}
         {Icon && <Icon className={classes.SidebarIcon} />}
         <h4 className={classes.SidebarTitle}>{title}</h4>
      </div>
   );
};

export default SidebarRow;
