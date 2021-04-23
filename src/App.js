import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import { Grid } from '@material-ui/core';
import Routes from './Routers/Routes';
import { makeStyles } from '@material-ui/core/styles';

//Nav Drawer
import Drawer from './Components/Sidebar';

const useStyles = makeStyles({
  container: {
    display: 'flex'
  }
});

function App() {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Router>
        <Drawer />
        <Routes />
      </Router>
    </div>
  );
}

export default App;
