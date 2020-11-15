import React from 'react';
import Feed from './Feed/Feed';
import Sidebar from './Sidebar/Sidebar';
import classes from './Main.module.css';
import Widgets from './Widgets/Widgets';

const Main = () => {
   return (
      <div className={classes.Main}>
         <Sidebar />
         <Feed />
         <Widgets />
      </div>
   );
};

export default Main;
