import React from 'react';
import ChallengesGrid from './ChallengesGrid';
import { Route, Switch } from 'react-router-dom';
import ChallengesTracker from './ChallengesTracker/ChallengesTracker';
import ChallengeInfo from './ChallengesTracker/ChallengeInfo';
import '../../css/challenges.scss';

const styles = {
  fixedBackground: {
    height: '300px',
    backgroundColor: 'rgb(255, 224, 155)',
    position: 'absolute',
    top: '0',
    left: '0',
    right: '0'
  },
  challengeBox: {
    position: 'relative',
    maxWidth: '800px',
    padding: '10px 30px'
  }
};

const challenge = {
  id: 1,
  name: 'First Challenge',
  info: 'Your first challenge is...'
};

const Challenges = (props) => {
  const { match } = props;
  return (
    <div className='challenges-main'>
      <div style={styles.fixedBackground}></div>
      <div style={styles.challengeBox} className="container">
        <Switch>
          <Route path={`${match.url}/:name/:no`} render={(props) => <ChallengeInfo {...props} challenge={challenge} />} />
          <Route path={`${match.url}/:name`} render={(props) => <ChallengesTracker {...props} challenge={challenge} />} />
          <Route path={`${match.url}/`} exact component={ChallengesGrid} />
        </Switch>
      </div>
    </div>
  );
};

export default Challenges;