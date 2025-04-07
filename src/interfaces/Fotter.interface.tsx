export interface NavigationLink {
  text: string;
  href: string;
}

export interface FooterNavigationItemProps {
  links: NavigationLink[];
}

export interface SocialIconProps {
  icon: React.ComponentType;
  className?: string;
}
