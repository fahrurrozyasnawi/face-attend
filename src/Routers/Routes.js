import React from 'react';
import { 
    BrowserRouter as Router,
    Route,
    withRouter
} from 'react-router-dom';

import { CssBaseline } from '@material-ui/core';

import Header from '../Components/Header';
// import Drawer from '../Components/Drawer';

function Routes() {
    return (
        <Router>
            <Header />
        </Router>
    );
}

export default withRouter(Routes);