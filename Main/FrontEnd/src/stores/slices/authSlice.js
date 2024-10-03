import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { LoginUser, CreateUser } from "../../services/userService";

export const login = createAsyncThunk('auth/login', async (userData) => {
  const response = await LoginUser(userData);
  return response; 
});

export const register = createAsyncThunk('auth/register', async (userData) => {
  const response = await CreateUser(userData);
  return response; 
});

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    token: localStorage.getItem("token") || null,
    username: localStorage.getItem("username") || null, 
    isLoading: false,
    error: null,
  },
  reducers: {
    logout: (state) => {
      state.token = null;
      state.username = null;
      localStorage.removeItem("token");
      localStorage.removeItem("username"); 
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        console.log('Login successful:', action.payload); 
        state.isLoading = false;
        state.token = action.payload.accessToken; 
        state.username = action.payload.userInfo.username; 
        localStorage.setItem("token", action.payload.accessToken);
        localStorage.setItem("username", action.payload.userInfo.username); 
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(register.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(register.fulfilled, (state) => {
        state.isLoading = false;
        state.error = null;
      })
      .addCase(register.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
