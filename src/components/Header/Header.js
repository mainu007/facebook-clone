import React from 'react';
import HeaderLeft from './HeaderLeft/HeaderLeft';
import HeaderMiddle from './HeaderCenter/HeaderCenter';
import HeaderRight from './HeaderRight/HeaderRight';
import classes from './Header.module.css';

const Header = () => {
   return (
      <div className={classes.Header}>
         <HeaderLeft />
         <HeaderMiddle />
         <HeaderRight />
      </div>
   );
};

export default Header;
