import React from 'react';
import { Button } from '@material-ui/core';
import BackInHistory from '../../../widgets/BackInHistory';

const styles = {
  challengeInfoMain: {
    textAlign: 'center'
  },
  challengeName: {
    fontWeight: 'bold',
  },
  addMargin: {
    marginBottom: '10px'
  }
}

const ChallengeInfo = (props) => {
  return (
    <div style={styles.challengeInfoMain}>
      <BackInHistory history={props.history} />
      <div style={{ ...styles.challengeName, ...styles.addMargin }}>{props.challenge.name}</div>
      <div style={styles.addMargin}>{props.challenge.info}</div>
      <Button variant="contained" style={styles.addMargin}>
        Complete challenge and get 5 coins
      </Button>
    </div>
  );
};

export default ChallengeInfo;