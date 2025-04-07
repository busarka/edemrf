import { ITrip } from './Main.interface';

export interface TripsState {
  trips: ITrip[];
  displayedCount: number;
  loading: boolean;
  hasMore: boolean;
}
