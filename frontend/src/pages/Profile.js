import React from 'react';

const Profile = ({ match }) => {
  return (
    <div className="Profile">
      {match.params.username}'s Profile
    </div>
  );
};

export default Profile;