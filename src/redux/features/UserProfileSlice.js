import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const baseUrl = "http://127.0.0.1:3000";

const initialState = {
  user: null,
  isLoading: false,
  error: null,
};

export const updateUserProfile = createAsyncThunk(
  "user/updateProfile",
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.patch(
        `${baseUrl}/users/${data.userId}`,
        data.formData
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const userProfileSlice = createSlice({
  name: "userProfile",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // update user profile
    builder
      .addCase(updateUserProfile.pending, (state) => ({
        ...state,
        isLoading: true,
      }))
      .addCase(updateUserProfile.fulfilled, (state, action) => ({
        ...state,
        user: action.payload,
        isLoading: false,
      }))
      .addCase(updateUserProfile.rejected, (state, action) => ({
        ...state,
        error: action.payload.error,
        isLoading: false,
      }));
  },
});

export default userProfileSlice.reducer;
