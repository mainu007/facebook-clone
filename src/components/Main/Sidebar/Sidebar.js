import React from 'react';
import LocalHospitalOutlinedIcon from '@material-ui/icons/LocalHospitalOutlined';
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags';
import PeopleIcon from '@material-ui/icons/People';
import ChatIcon from '@material-ui/icons/Chat';
import StorefrontIcon from '@material-ui/icons/Storefront';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined';
import SidebarRow from './SidebarRow/SidebarRow';
import classes from './Sidebar.module.css';
import { useStateValue } from '../../../store/StateProvider';

const Sidebar = () => {
   const [{ user }] = useStateValue();

   return (
      <div className={classes.Sidebar}>
         <SidebarRow src={user.photoURL} title={user.displayName} />
         <SidebarRow
            Icon={LocalHospitalOutlinedIcon}
            title="COVID-19 Information Center"
         />
         <SidebarRow Icon={EmojiFlagsIcon} title="Pages" />
         <SidebarRow Icon={PeopleIcon} title="Friends" />
         <SidebarRow Icon={ChatIcon} title="Messenger" />
         <SidebarRow Icon={StorefrontIcon} title="Marketplace" />
         <SidebarRow Icon={VideoLibraryIcon} title="Videos" />
         <SidebarRow Icon={ExpandMoreOutlinedIcon} title="Marketplace" />
      </div>
   );
};

export default Sidebar;
