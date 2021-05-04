import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

import SideBar from './SideBar';
import Coins from '../../widgets/Coins';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
  appBar: {
    boxShadow: 'none',
    backgroundColor: 'rgb(255, 224, 155)',
    color: 'black'
  }
}));

const AppBarMain = () => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <AppBar position="sticky" className={classes.appBar}>
        <Toolbar>
          <SideBar />
          <Typography variant="h6" className={classes.title}>
            Challenge
          </Typography>
          <Coins />
          <Button color="inherit"><AccountCircleIcon /></Button>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  )
};

export default AppBarMain;