import { React, useState } from 'react';

//material-ui core components
import {
    makeStyles,
    MenuItem,
    MenuList,
    Grow,
    Paper,
    ClickAwayListener,
    Hidden,
    Poppers,
    Divider,
    FormControl,
    InputLabel,
    Input,
    IconButton
} from '@material-ui/core';

//material-ui icons
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import Notifications from '@material-ui/icons/Notifications';
import Dashboard from '@material-ui/icons/Dashboard';
import Search from '@material-ui/icons/Search';

import styles from '../Assets/Styles/NavbarLinkStyle';

const useStyles = makeStyles(styles);

export default function NavbarLink() {
  const classes = useStyles();
  // const [openNotification, setOpenNotifation] = useState(null);
  // const [openProfile, setOpenProfile] = useState(null);

  // const handleClickProfile = event => {
  //   if (openProfile && openProfile.contains(event.target)) {
  //     setOpenProfile(null);
  //   } else {
  //     setOpenProfile(event.currentTarget);
  //   }
  // };
  // const handleCloseProfile = () => {
  //   setOpenProfile(null);
  // };

  return(
    <div>
      <div className={classes.searchWrapper}>
        <FormControl className={classes.margin + " " + classes.search}>
          <InputLabel >Search</InputLabel>
          <Input placeholder="Search" />
        </FormControl>
        <IconButton aria-label="search">
          <Search />
        </IconButton>
      </div>
      <Button
        color={window.innerWidth > 959 ? "transparent" : "white"}
        justIcon={window.innerWidth > 959}
        simple={!(window.innerWidth > 959)}
        aria-label="Dashboard"
        className={classes.buttonLink}
      >
        <Dashboard className={classes.icons} />
        <Hidden mdUp implementation="css">
          <p className={classes.linkText}>Dashboard</p>
        </Hidden>
      </Button>
      <div className={classes.manager} >
        <Button
          color={window.innerWidth > 959 ? "transparent" : "white"}
          justIcon={window.innerWidth > 959}
          simple={!(window.innerWidth > 959)}
          aria-owns={openProfile ? "profile-menu-list-grow" : null}
          aria-haspopup="true"
          // onClick={handleClickProfile}
          className={classes.buttonLink}
        >
          <ExitToAppIcon className={classes.icons} />
          <Hidden mdUp implementation="css">
            <p className={classes.linkText} >Logout</p>
          </Hidden>
        </Button>
      </div>
    </div>
  );
}