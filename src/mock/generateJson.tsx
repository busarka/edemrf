import { ITrip } from '../interfaces/Main.interface';
function getRandom(min: number, max: number) {
  return Math.floor(Math.random() * (max - min) + min);
}
function generateTrips(count: number) {
  const trips: ITrip[] = [];

  for (let i = 1; i <= count; i++) {
    trips.push({
      id: i,
      title: `Поездка ${i}`,
      imageUrl: `../mock-img/${getRandom(1, 4)}.jpg`,
      route: `Маршрут ${i}`,
      tariffs: parseInt((Math.random() * 100).toFixed(2)),
      cargoType: `Тип груза ${i}`,
      time: `${Math.floor(Math.random() * 24)}:${Math.floor(
        Math.random() * 60
      )}`,
    });
  }

  return trips;
}
export const tripsData = generateTrips(103);
