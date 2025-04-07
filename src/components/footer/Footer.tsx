import React from 'react';
import Applications from './applications/Applications';
import SocialNerworks from './social/SocialNerworks';
import Agreement from './agreement/Agreement';
import FooterNavigation from './nav/FooterNavigation';

export const Footer = () => (
  <footer className="footer">
    <div className="footer__body">
      <div className="footer__wrapper">
        <div className="footer__navigation">
          <FooterNavigation></FooterNavigation>
          <Applications></Applications>
          <SocialNerworks></SocialNerworks>
        </div>
        <div className="footer__agreement">
          <Agreement></Agreement>
        </div>
      </div>
    </div>
  </footer>
);
