import React from 'react';
import { NoticeCountProps } from '../../interfaces/Header.interface';

export const NoticeCount: React.FC<NoticeCountProps> = ({
  count,
  className,
}) => {
  return (
    <svg
      className={className}
      width="22"
      height="16"
      viewBox="0 0 22 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8Z"
        fill="#FF4E3D"
      />
      <path
        d="M22 8C22 12.4183 18.4183 16 14 16C9.58172 16 6 12.4183 6 8C6 3.58172 9.58172 0 14 0C18.4183 0 22 3.58172 22 8Z"
        fill="#FF4E3D"
      />
      <path d="M8 0H14V16H8V0Z" fill="#FF4E3D" />
      <text
        fontSize="11"
        x="11"
        y="9"
        textAnchor="middle"
        dominantBaseline="middle"
        fill="white"
      >
        {count}
      </text>
    </svg>
  );
};
