import React from 'react';
import { Button } from '@material-ui/core';

const styles = {
  restartMain: {
    padding: '5px 10px 10px',
    textAlign: 'center'
  }
}

const Restart = () => {
  return (
    <div style={styles.restartMain}>
      <Button variant="contained" color="secondary">
        Restart
      </Button>
    </div>
  );
};

export default Restart;