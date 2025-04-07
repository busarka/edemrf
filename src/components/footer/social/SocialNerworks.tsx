import React from 'react';
import { Odnoklassniki } from '../../../assets/icons/Odnoklassniki';
import { Vk } from '../../../assets/icons/Vk';
import { Telegram } from '../../../assets/icons/Telegram';
import { SocialIconProps } from '../../../interfaces/Fotter.interface';

const SocialIcon: React.FC<SocialIconProps> = ({
  icon: IconComponent,
  className,
}) => (
  <div className={`footer__social-item ${className}`}>
    <IconComponent />
  </div>
);

const SocialNerworks: React.FC = () => {
  return (
    <div className="footer__social">
      <SocialIcon icon={Vk} className="footer__social-item--vk" />
      <SocialIcon
        icon={Odnoklassniki}
        className="footer__social-item--odnoklassniki"
      />
      <SocialIcon icon={Telegram} className="footer__social-item--telegram" />
    </div>
  );
};

export default SocialNerworks;
