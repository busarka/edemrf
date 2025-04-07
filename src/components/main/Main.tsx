import React, { useCallback, useEffect } from 'react';
import Trip from './trip/Trip';
import { useDispatch, useSelector } from 'react-redux';
import { ITrip } from '../../interfaces/Main.interface';
import { AppDispatch, RootState } from '../../redux/store';
import {
  incrementDisplayedCount,
  setInitialTrips,
} from '../../redux/trips/trips.slice';
import { tripsData } from '../../mock/generateJson';
import { Counter } from './trip/Counter';
import { fetchTrips } from '../../api/fetchTrips';

export const Main: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const { trips, displayedCount, hasMore } = useSelector(
    (state: RootState) => state.trips
  );

  console.log(displayedCount);
  useEffect(() => {
    dispatch(setInitialTrips());
  }, [dispatch]);

  const handleScroll = useCallback(() => {
    if (
      window.innerHeight + document.documentElement.scrollTop !==
        document.documentElement.offsetHeight ||
      !hasMore
    )
      return;

    dispatch(fetchTrips(trips.length));

    dispatch(incrementDisplayedCount());
  }, [dispatch, hasMore, trips.length]);

  useEffect(() => {
    if (trips.length >= tripsData.length) {
      setTimeout(() => {
        alert('Поездок больше не найдено');
      }, 1000);
      // Добавила задержку, чтобы alert появился после рендера поездок с 100 по 103,
      // иначе он бы показывался до рендера.
    }
  }, [trips.length]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  return (
    <main className="main">
      <section className="main__wrapper">
        <Counter count={displayedCount} />
        <ul className="main__trips-list">
          {trips?.slice(0, displayedCount).map((trip: ITrip) => (
            <Trip key={trip.id} trip={trip} />
          ))}
        </ul>
        <div id="scroll-target" style={{ height: '1px' }} />
      </section>
    </main>
  );
};
