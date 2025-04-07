import React from 'react';
import { Map } from '../../../assets/icons/Map';
import { Box } from '../../../assets/icons/Box';
import { TripComponentProps } from '../../../interfaces/Main.interface';

const Trip = React.memo(({ trip }: TripComponentProps) => {
  const { title, imageUrl, route, tariffs, time, cargoType } = trip;

  return (
    <li className="card">
      <div className="card__listing-card">
        <img
          alt={title}
          className="card__photo"
          src={process.env.PUBLIC_URL + imageUrl}
        />
        <div className="card__listing-card-inner">
          <div className="card__body">
            <div className="card__head">
              <h2 className="card__listing-card-title">{title}</h2>
            </div>
            <div className="card__row">
              <div className="card__row-route">
                <Map />
                <span className="card__row-route-city">{route}</span>
                <span className="card__row-route-time">{time}</span>
              </div>
            </div>
            <div className="card__row">
              <div className="card__row-delivery">
                <Box />
                <div className="card__row-delivery-inner">
                  <span className="card__row-delivery-inner-title">
                    Тип груза:
                  </span>
                  <span className="card__row-delivery-inner-type">
                    {cargoType}
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="card__price">
            <span className="card__price-time">за 1 час</span>
            <span className="card__price-value">от {tariffs} ₽</span>
          </div>
        </div>
      </div>
    </li>
  );
});

export default Trip;
