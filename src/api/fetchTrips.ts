import { createAsyncThunk } from '@reduxjs/toolkit';
import { tripsData } from '../mock/generateJson';

export const fetchTrips = createAsyncThunk(
  'trips/fetchTrips',
  async (offset: number) => {
    await new Promise((resolve) => setTimeout(resolve, 200));
    // через setTimeout сделала эмуляцию ожидания ответа от сервера

    return tripsData.slice(
      offset,
      offset + Math.min(10, tripsData.length - offset)
    );
  }
);
