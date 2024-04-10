import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import instance from "../../../axios/api.helper";
import { API_END_POINT } from "../../../axios/api";

const initialState = {
  loading: false,
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
export const forgotPassword = createAsyncThunk(
  "forgot/password",
  async (params, { rejectWithValue }) => {
    try {
      return await instance.post(API_END_POINT.FORGOT_PASSWORD, params);
    } catch (err) {
      return rejectWithValue;
    }
  }
);
export const changePassword = createAsyncThunk(
  "change/password",
  async (params, { rejectWithValue }) => {
    try {
      return await instance.post(API_END_POINT.CHANGE_PASSWORD, params);
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
      .addCase(login.fulfilled, (state,action) => {
        console.log('action',action);
        state.loading = false;
        state.isLoggedIn = true;
      })
      .addCase(login.rejected, (state) => {
        state.loading = false;
        state.isLoggedIn = false;
      });
  },
});

export default authSlice.reducer;
