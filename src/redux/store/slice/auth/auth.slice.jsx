import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import instance from "../../../axios/api.helper";
import { API_END_POINT } from "../../../axios/api";

const initialState = {
  loading: false,
  userRole: null,
};

export const login = createAsyncThunk(
  "auth/register",
  async (params, { rejectWithValue }) => { 
    try {
      return await instance.post(API_END_POINT.USER_LOGIN, params);
    } catch (err) {
      return rejectWithValue;
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.loading = true;
        state.isLoggedIn = false;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false;
        state.isLoggedIn = true;
        state.userRole = action.payload.data.user_role;
      })
      .addCase(login.rejected, (state) => {
        state.loading = false;
        state.isLoggedIn = false;
      });
  },
});

export default authSlice.reducer;
