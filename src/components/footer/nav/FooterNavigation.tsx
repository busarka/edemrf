import React from 'react';
import FooterNavigationItem from './item/NavigationItem';
import { NavigationLink } from '../../../interfaces/Fotter.interface';

const FooterNavigation: React.FC = () => {
  const navigationItems: NavigationLink[][] = [
    [
      { text: 'О проекте', href: '/about' },
      { text: 'Блог', href: '/blog' },
      { text: 'Безопасность', href: '/security' },
    ],
    [
      { text: 'Способы оплаты', href: '/payments' },
      { text: 'Обратная связь', href: '/feedback' },
      { text: 'Вопросы и ответы', href: '/qa' },
    ],
    [
      { text: 'Автовокзалы России', href: '/busstations' },
      { text: 'Автобусные направления', href: '/basroutes' },
      { text: 'Расписание автобусов', href: '/busschedule' },
    ],
    [
      { text: 'Популярные маршруты', href: '/popularroutes' },
      { text: 'СМИ и Рекламодателям', href: '/mediaandads' },
    ],
  ];

  return (
    <div className="footer__navigation-item-wrapper">
      {navigationItems.map((links, index) => (
        <FooterNavigationItem key={index} links={links} />
      ))}
    </div>
  );
};

export default FooterNavigation;
