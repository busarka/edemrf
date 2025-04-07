import React from 'react';
import { Logo } from './Logo';
import { Message } from '../../assets/icons/Message';
import { Bell } from '../../assets/icons/Bell';
import { NoticeCount } from '../../assets/icons/NoticeCount';

export const Header = () => {
  const noticeCount = Math.floor(Math.random() * 30);

  return (
    <header className="header">
      <div className="header__wrapper">
        <div className="header__logo">
          <div className="header__logo-inner">
            <a href="/">
              <Logo />
            </a>
          </div>
          <div className="header__logo-title-wrapper">
            <span className="header__logo-title">
              Лучший способ путешествовать дешевле
            </span>
          </div>
        </div>
        <div className="header__auth">
          <div className="header__auth-inner">
            <Message />
            <div className="header__auth-notice">
              <Bell className="header__auth-icon" />
              <NoticeCount count={noticeCount} className="header__auth-count" />
            </div>
          </div>
          <div className="header__auth-profile">
            <div className="header__profile-photo">
              <picture>
                <source srcSet="./avatar.jpg" type="image/jpg" />
                <img src="../avatar.jpg" alt="profile-photo" />
              </picture>
            </div>
            <span className="header__profile-title">Оксана</span>
          </div>
        </div>
      </div>
    </header>
  );
};
