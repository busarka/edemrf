import React from 'react';
import { BellProps } from '../../interfaces/Header.interface';

export const Bell: React.FC<BellProps> = ({ className }) => {
  return (
    <svg
      className={className}
      width="16"
      height="20"
      viewBox="0 0 16 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.00001 20C9.10001 20 10 19.1 10 18H6.00001C6.00001 19.1 6.89001 20 8.00001 20ZM14 14V9C14 5.93 12.36 3.36 9.50001 2.68V2C9.50001 1.17 8.83001 0.5 8.00001 0.5C7.17001 0.5 6.50001 1.17 6.50001 2V2.68C3.63001 3.36 2.00001 5.92 2.00001 9V14L0.710006 15.29C0.0800057 15.92 0.520006 17 1.41001 17H14.58C15.47 17 15.92 15.92 15.29 15.29L14 14Z"
        fill="#0B1524"
        fillOpacity="0.46"
      />
    </svg>
  );
};
