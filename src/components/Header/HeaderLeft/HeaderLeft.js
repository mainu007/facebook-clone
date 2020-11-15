import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import classes from "./HeaderLeft.module.css";

const HeaderLeft = () => {
   return (
      <div className={classes.HeaderLeft}>
         <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/600px-Facebook_f_logo_%282019%29.svg.png"
            alt="..."
         />
         <div className={classes.HeaderInput}>
            <SearchIcon />
            <input type="text" placeholder="Search Facebook" />
         </div>
      </div>
   );
};

export default HeaderLeft;
