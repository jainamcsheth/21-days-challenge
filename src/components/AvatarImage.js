import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
  medium: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
  large: {
    width: theme.spacing(30),
    height: theme.spacing(30),
  }
}));

let styles = {
  border: {},
  backgroundColor: {}
};

const createStyles = (backgroundColor, border) => {
  if (backgroundColor) {
    styles.backgroundColor = {
      backgroundColor
    }
  }

  if (border) {
    styles.border = {
      border: '2px dashed black'
    }
  }
}

const AvatarImage = ({ imageSize, backgroundColor, border }) => {
  const classes = useStyles();
  createStyles(backgroundColor, border);

  return (
    <div className={classes.root}>
      <Avatar alt="" src={require('../assets/images/profile-pic-boy.png')}
        className={classes[imageSize]}
        style={{ ...styles.backgroundColor, ...styles.border }}
      />
    </div>
  );
};

export default AvatarImage;

AvatarImage.defaultProps = {
  imageSize: 'medium'
}