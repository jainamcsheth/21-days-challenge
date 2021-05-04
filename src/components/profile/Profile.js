import React from 'react';
import AvatarImage from '../AvatarImage';
import Statistics from './Statistics';

const styles = {
  container: {
    maxWidth: '1200px',
    margin: '20px auto',
    justifyContent: 'center'
  },
  name: {
    textAlign: 'center',
    marginTop: '1rem',
    fontWeight: 'bold',
    fontSize: '1.5rem'
  }
}

const Profile = () => {
  return (
    <div style={styles.container} className="two-col">
      <div className="left-col">
        <div className="d-flex justify-content-center">
          <AvatarImage imageSize={'large'} backgroundColor={'rgb(255, 224, 155)'} border={true} />
        </div>
        {/* <div> */}
        <div style={styles.name}>Jainam</div>
      </div>
      <div className="mt-3 right-col">
        <Statistics />
      </div>
      {/* </div> */}
    </div>
  );
};

export default Profile;
