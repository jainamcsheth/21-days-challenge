import React from 'react';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { Button } from '@material-ui/core';

const Coins = () => {
  return (
    <div>
      Coins
      <Button>0<FavoriteIcon color="secondary" /></Button>
    </div>
  )
};

export default Coins;