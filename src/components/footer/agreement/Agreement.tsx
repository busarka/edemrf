import React from 'react';

const Agreement = () => {
  return (
    <div className="footer__agreement">
      <div className="footer__company-name">© 2022 ООО «КОНТЕНТ»</div>
      <div className="footer__agreement-wrapper">
        <a>
          <span className="footer__policy">Политика конфиденциальности</span>
        </a>
        <a>
          <span className="footer__agreement-link">
            Пользовательское соглашение
          </span>
        </a>
      </div>
    </div>
  );
};

export default Agreement;
