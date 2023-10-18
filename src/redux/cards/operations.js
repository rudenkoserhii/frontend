import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// GET @ /cards
export const fetchCards = createAsyncThunk(
  'cards',
  async (_, thunkAPI) => {
    try {
      const res = await axios.get('/posts');
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);