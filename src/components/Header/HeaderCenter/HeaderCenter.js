import React from "react";
import HomeIcon from "@material-ui/icons/Home";
import FlagIcon from "@material-ui/icons/Flag";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import StorefrontIcon from "@material-ui/icons/Storefront";
import SupervisedUserCircleIcon from "@material-ui/icons/SupervisedUserCircle";
import classes from "./HeaderCenter.module.css";

const HeaderMiddle = () => {
   const optionClasses = [classes.HeaderOption, classes.HeaderOptionActive];
   return (
      <div className={classes.HeaderMiddle}>
         <div className={optionClasses.join(" ")}>
            <HomeIcon fontSize="large" className={classes.Icon} />
         </div>
         <div className={classes.HeaderOption}>
            <FlagIcon fontSize="large" className={classes.Icon} />
         </div>
         <div className={classes.HeaderOption}>
            <SubscriptionsIcon fontSize="large" className={classes.Icon} />
         </div>
         <div className={classes.HeaderOption}>
            <StorefrontIcon fontSize="large" className={classes.Icon} />
         </div>
         <div className={classes.HeaderOption}>
            <SupervisedUserCircleIcon
               fontSize="large"
               className={classes.Icon}
            />
         </div>
      </div>
   );
};

export default HeaderMiddle;
