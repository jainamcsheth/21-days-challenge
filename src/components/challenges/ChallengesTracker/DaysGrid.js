import React from 'react';
import { Grid, makeStyles, Paper } from '@material-ui/core';
import DayCard from './DayCard';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    // padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  daysMain: {
    maxWidth: '500px',
    margin: '0 auto',
    padding: '20px 0'
  },
  completedGrid: {
    backgroundColor: 'red'
  }
}));

const DaysGrid = (props) => {
  const classes = useStyles();
  const totalDaysArr = Array.apply(null, Array(props.noOfDays));

  return (
    <div className={classes.daysMain}>
      <Grid container spacing={3} className={classes.root}>
        {
          totalDaysArr.map((item, index) => {
            return (
              <Grid item xs={3} sm={2}>
                <Paper className={classes.paper}>
                  <DayCard dayNo={index + 1} />
                </Paper>
              </Grid>
            );
          })
        }
      </Grid>
    </div>
  );
};

export default DaysGrid;

DaysGrid.defaultProps = {
  noOfDays: 21
};