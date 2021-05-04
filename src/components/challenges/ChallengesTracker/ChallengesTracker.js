import React from 'react';
import DaysGrid from './DaysGrid';
import Restart from '../../../widgets/Restart';

const styles = {
  challengeInfo: {
    textAlign: 'center',
    marginBottom: '20px'
  },
  challengeImage: {
    height: '100px',
    width: '100px',
    objectFit: 'cover',
    marginTop: '10px'
  }
};

const ChallengesTracker = (props) => {
  return (
    <React.Fragment>
      <div style={styles.challengeInfo}>
        <h5>{props.challenge.name}</h5>
        <img src={require('../../../assets/images/food7.jpg')} style={styles.challengeImage} />
      </div>
      <DaysGrid />
      <Restart />
    </React.Fragment>
  );
};

export default ChallengesTracker;