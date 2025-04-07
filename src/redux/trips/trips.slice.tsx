import { createSlice } from '@reduxjs/toolkit';
import { tripsData } from '../../mock/generateJson';
import { TripsState } from '../../interfaces/Redux.interface';
import { fetchTrips } from '../../api/fetchTrips';

const initialState: TripsState = {
  trips: [],
  displayedCount: 30,
  loading: false,
  hasMore: true,
};

const tripsSlice = createSlice({
  name: 'trips',
  initialState,
  reducers: {
    setInitialTrips(state) {
      state.trips = tripsData.slice(0, state.displayedCount);
      state.hasMore = tripsData.length > state.displayedCount;
    },
    incrementDisplayedCount(state) {
      state.displayedCount += Math.min(
        10,
        tripsData.length - state.displayedCount
      );
      state.hasMore = state.displayedCount < tripsData.length;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchTrips.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchTrips.fulfilled, (state, action) => {
        state.loading = false;
        state.trips.push(...action.payload);
        if (state.trips.length >= tripsData.length) {
          state.hasMore = false;
        }
      });
  },
});

export const { setInitialTrips, incrementDisplayedCount } = tripsSlice.actions;

export default tripsSlice.reducer;
