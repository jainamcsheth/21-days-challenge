import React from 'react';
import AvatarImage from './AvatarImage';

const styles = {
  greetingsMain: {
    padding: '20px',
    alignItems: 'center',
    flexWrap: 'noWrap',
    color: 'white',
    fontSize: '1.5rem',
    lineHeight: '1.25'
  }
};

const Greetings = () => {
  return (
    <div style={styles.greetingsMain} className="row">
      <AvatarImage />
      <div>
        <span>Hello Greetings,</span>
        <br></br>
        <span>Jainam</span>
      </div>
    </div>
  );
};

export default Greetings;