import React from 'react';
import { FooterNavigationItemProps } from '../../../../interfaces/Fotter.interface';

const FooterNavigationItem: React.FC<FooterNavigationItemProps> = ({
  links,
}) => {
  return (
    <nav className="footer__navigation-item">
      {links.map((link, index) => (
        <a className="footer__navigation-link" key={index} href={link.href}>
          <span>{link.text}</span>
        </a>
      ))}
    </nav>
  );
};

export default FooterNavigationItem;
