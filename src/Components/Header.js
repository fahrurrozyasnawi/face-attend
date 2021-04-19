import React, { Component, useState } from 'react';
//material-ui
import {
    Typography,
    Drawer,
    Grid,
    AppBar,
    Toolbar,
    Button,
    ClickAwayListener,
    Paper,
    Hidden,
    WithStyles
} from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';
import MuiExpansionPanel from '@material-ui/core/ExpansionPanel';
import MuiExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import MuiExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';

//material-ui icons
import {
    AccountCircleIcon,
    PersonIcon,
    StorageIcon,
    AssignmentIcon,
} from '@material-ui/core/icons';