import { combineReducers } from 'redux';
import tripsSlice from './trips/trips.slice';

const rootReducer = combineReducers({
  trips: tripsSlice,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
