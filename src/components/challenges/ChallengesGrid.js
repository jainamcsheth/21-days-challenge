import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import ChallengeCard from './ChallengeCard';
import Greetings from '../Greetings';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    // padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4];

export default function ChallengesGrid() {
  const classes = useStyles();

  function FormRow() {
    return (
      <React.Fragment>
        {
          arr.map(item => {
            return (
              <Grid item xs={6} sm={4}>
                <Paper className={classes.paper}>
                  {item % 2 === 0 ?
                    <ChallengeCard show={true} /> :
                    <ChallengeCard show={false} />
                  }
                </Paper>
              </Grid>
            );
          })
        }
      </React.Fragment>
    );
  }

  return (
    <React.Fragment >
      <Greetings />
      <Grid container spacing={2} className={classes.root}>
        <FormRow />
      </Grid>
    </React.Fragment>
  );
}
