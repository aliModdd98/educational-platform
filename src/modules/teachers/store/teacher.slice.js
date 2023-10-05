import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "./../../../utils/axios";
import axios from "axios";

export const fetchTeachers = createAsyncThunk("teachers/fetch", async () => {
  try {
    const response = await axios.get(
      "https://edu-data.onrender.com/Teachers"
    );
    console.log("Response data:", response.data); // Log the response data

    return response.data;
  } catch (error) {
    console.error("Error fetching teachers:", error);
    throw error;
  }
});

const teachersSlice = createSlice({
  name: "teachers",
  initialState: {
    data: [],
    loading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchTeachers.pending, (state) => {
      state.loading = true; 
    });
    builder.addCase(fetchTeachers.fulfilled, (state, action) => {
      state.loading = false; 
      state.data = action.payload;
      console.log("Updated teachers state:", state.data);
    });
  },
});

export default teachersSlice.reducer;