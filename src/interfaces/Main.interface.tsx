export interface ITrip {
  id: number;
  title: string;
  imageUrl: string;
  route: string;
  tariffs: number;
  cargoType: string;
  time: string;
}

export interface TripComponentProps {
  trip: ITrip;
}

export interface CounterProps {
  count: number;
}
