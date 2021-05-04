import React from 'react';
import FavoriteIcon from '@material-ui/icons/Favorite';
import DoneIcon from '@material-ui/icons/Done';
import DoneAllIcon from '@material-ui/icons/DoneAll';

const styles = {
  statisticsMain: {
    textAlign: 'center'
  }
}

const Statistics = () => {
  return (
    <div class="d-flex justify-content-around" style={styles.statisticsMain}>
      <div>
        <FavoriteIcon className="rounded-mat-icon" />
        <div>
          0 <br></br>Likes
        </div>
      </div>
      <div>
        <DoneIcon className="rounded-mat-icon" />
        <div>
          0 <br></br> Current <br></br> Challenges
        </div>
      </div>
      <div>
        <DoneAllIcon className="rounded-mat-icon" />
        <div>
          0 <br></br> Completed <br></br> Challenges
        </div>
      </div>
    </div>
  );
};

export default Statistics;