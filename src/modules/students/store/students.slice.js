import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "./../../../utils/axios";

export const fetchStudents = createAsyncThunk("students/fetch", async () => {
  try {
    const response = await axiosInstance.get(
      "https://edu-platform-pt9l.onrender.com/Students"
    );
    console.log("Response data:", response.data);

    return response.data;
  } catch (error) {
    console.error("Error fetching students:", error);
    throw error;
  }
});


const studentsSlice = createSlice({
  name: "students",
  initialState: {
    data: [],
    isLoading: false,  
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchStudents.pending, (state) => {
        state.isLoading = true;  
      })
      .addCase(fetchStudents.fulfilled, (state, action) => {
        state.data = action.payload;
        state.isLoading = false; 
        console.log("Updated students state:", state.data);
      });
  },
});

export default studentsSlice.reducer;