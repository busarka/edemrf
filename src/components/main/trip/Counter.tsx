import React from 'react';
import { CounterProps } from '../../../interfaces/Main.interface';
import { getCargoTransportWord } from '../../../helpers/helpers';

export const Counter = React.memo(({ count }: CounterProps) => {
  const cargoTransportWord = getCargoTransportWord(count);

  return (
    <h1 className="main__title">
      Найдено: {count} {cargoTransportWord}
    </h1>
  );
});
