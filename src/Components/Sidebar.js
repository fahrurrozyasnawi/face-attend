import React from 'react';
import { Link } from 'react-router-dom';
import { 
    Drawer as MuIDrawer,
    ListItem,
    List,
    ListItemIcon,
    ListItemText
} from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';

//material-ui icons
import DashboardIcon from '@material-ui/icons/Dashboard';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import EventNoteIcon from '@material-ui/icons/EventNote';
import PersonalVideoIcon from '@material-ui/icons/PersonalVideo';

import { withRouter} from 'react-router-dom';

const useStyles = makeStyles({
    drawer: {
        width: '190px'
    }
});

function Drawer(props) {
    const { history } = props;
    const classes = useStyles();
    const itemList = [
        {
            text: "Dashboard",
            icon: <DashboardIcon />
        },
        {
            text: "Data Mahasiswa",
            icon: <PeopleAltIcon />
        },
        {
            text: "Hasil Absensi",
            icon: <EventNoteIcon />
        }

    ];

    return(
        <MuIDrawer 
        variant="temporary"
        className={classes.drawer}
        >
            <List>
                {itemList.map((item, index) =>{
                    const { text, icon } = item;
                    return(
                        <ListItem>
                            { icon &&
                                <ListItemIcon>{icon}</ListItemIcon>
                            }
                            <ListItemText primary={text} />
                        </ListItem>
                    );
                })}
            </List>
        </MuIDrawer>
    );
}

export default Drawer;