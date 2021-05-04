import React from 'react';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { Button } from '@material-ui/core';

const handleBackClick = (history) => {
  history.goBack();
}

const BackInHistory = (props) => {
  return (
    <React.Fragment>
      <Button onClick={() => handleBackClick(props.history)}><ArrowBackIcon color="secondary" /></Button>
    </React.Fragment>
  )
};

export default BackInHistory;