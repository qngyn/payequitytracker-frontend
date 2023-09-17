import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const baseUrl = "http://127.0.0.1:3000";

const initialState = {
  salaries: [],
  isLoading: false,
  error: null,
};

// Fetch all existing salaries
export const fetchSalaries = createAsyncThunk(
  "salary/fetchSalaries",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(`${baseUrl}/reservations`, {
        headers: {
          authorization: thunkAPI.getState().auth.token,
        },
      });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue({ error: error.message });
    }
  }
);

// Create a new salary
export const createSalary = createAsyncThunk(
  "salary/createSalary",
  async ({ _, details }, thunkAPI) => {
    try {
      const response = await axios.post(`${baseUrl}/reservations`, details, {
        headers: {
          authorization: thunkAPI.getState().auth.token,
        },
      });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue({ error: error.message });
    }
  }
);

const salarySlice = createSlice({
  name: "salary",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // fetch all existing salaries
    builder
      .addCase(fetchSalaries.pending, (state) => ({
        ...state,
        isLoading: true,
      }))
      .addCase(fetchSalaries.fulfilled, (state, action) => ({
        ...state,
        salaries: action.payload,
        isLoading: false,
      }))
      .addCase(fetchSalaries.rejected, (state, action) => ({
        ...state,
        error: action.payload.error,
        isLoading: false,
      }));

    // create a new salary input
    builder
      .addCase(createSalary.pending, (state) => ({
        ...state,
        isLoading: true,
        isSuccessfull: false,
      }))
      .addCase(createSalary.fulfilled, (state, action) => ({
        ...state,
        salaries: [...state.salaries, action.payload],
        isLoading: false,
        isSuccessfull: true,
      }))
      .addCase(createSalary.rejected, (state, action) => ({
        ...state,
        error: action.payload.error,
        isLoading: false,
        isSuccessfull: false,
      }));
  },
});

export default salarySlice.reducer;