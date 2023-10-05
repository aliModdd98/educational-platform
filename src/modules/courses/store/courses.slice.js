import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchCourses = createAsyncThunk("courses/fetch", async () => {
  try {
    const response = await axios.get(
      "https://edu-data.onrender.com/Courses"
    );
    console.log("Response data:", response.data);

    return response.data;
  } catch (error) {
    console.error("Error fetching courses:", error);
    throw error;
  }
});

const coursesSlice = createSlice({
  name: "courses",
  initialState: {
    data: [],
    loading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCourses.pending, (state) => {
      state.loading = true; });
    builder.addCase(fetchCourses.fulfilled, (state, action) => {
      state.loading = false; 
      state.data = action.payload;
      console.log("Updated courses state:", state.data);
    });
  },
});

export default coursesSlice.reducer;