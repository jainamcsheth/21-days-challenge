import React from 'react';
import { Card, CardActionArea } from '@material-ui/core';

const DayCard = (props) => {
  let classes = 'card ';
  if (props.completed) {
    classes += 'completed-day'
  }

  return (
    <Card>
      <CardActionArea>
        <div className={classes}>Day <br></br>{props.dayNo}</div>
      </CardActionArea>
    </Card>
  );
};

export default DayCard;
