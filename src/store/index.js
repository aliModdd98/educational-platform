import { applyMiddleware, configureStore } from "@reduxjs/toolkit";
import reduxThunk from "redux-thunk"; 
import coursesSlice from './../modules/courses/store/courses.slice'
import teachersSlice from './../modules/teachers/store/teacher.slice.js'
import studentsSlice from "../modules/students/store/students.slice";

const reducers = {
    reducer: {
      courses:coursesSlice ,
      teachers: teachersSlice,
      students:studentsSlice
    },
  };

const store = configureStore(reducers, applyMiddleware(reduxThunk));

export default store;