import React from 'react';
import { AppleStore } from '../../../assets/icons/AppleStore';
import { GooglePlay } from '../../../assets/icons/GooglePlay';

const Applications = () => {
  return (
    <div className="footer__applications">
      <AppleStore></AppleStore>
      <GooglePlay></GooglePlay>
    </div>
  );
};

export default Applications;
