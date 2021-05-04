import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
// import confused_image from '../../assets/images/confused-image.png';

const useStyles = makeStyles({
  root: {
    // maxWidth: 345,
  },
  media: {
    height: 140,
  },
  challengeCardImage: {
    width: '100%',
    height: '100px',
    objectFit: 'cover'
  },
  cardHeaderStyle: {
    padding: '5px'
  },
  cardFooterStyle: {
    padding: '5px'
  },
  cardBodyStyle: {
    padding: '10px 15px'
  },
});

const ChallengeCard = ({ show }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <div className="card-main">
          <div className={`card-header ${classes.cardHeaderStyle}`}>
            <span>0</span>/<span>21</span>
          </div>
          <div className={`card-body ${classes.cardBodyStyle}`}>
            {/* {
              show === true ? <img src={require("../../assets/images/confused_image.png")} className={classes.challengeCardImage} /> : <img src={require("../../assets/images/food7.jpg")} className={classes.challengeCardImage} />
            } */}
            <img src={require("../../assets/images/confused-brain.png")} className={classes.challengeCardImage} />
          </div>
          <div className={`card-footer ${classes.cardFooterStyle}`}>
            Stop Junk
          </div>
        </div>
      </CardActionArea>
    </Card>
  );
}

export default ChallengeCard;
