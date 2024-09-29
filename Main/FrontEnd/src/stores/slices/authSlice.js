import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { LoginUser, CreateUser } from "../../services/userService"; 

export const login = createAsyncThunk('auth/login', async (userData) => {
  const response = await LoginUser(userData);
  return response; // Return the API response for login
});

export const register = createAsyncThunk('auth/register', async (userData) => {
  const response = await CreateUser(userData);
  console.log("Data sent to API:", userData);
  console.log("API Response:", response);

  if (!response || response.status !== 200) {
    throw new Error('Failed to register.'); // Ném lỗi nếu phản hồi không thành công
  }

  return response; // Trả về phản hồi từ API nếu thành công
});


const authSlice = createSlice({
  name: 'auth',
  initialState: {
    token: localStorage.getItem("token") || null,
    username: null,
    isLoading: false,
    error: null,
  },
  reducers: {
    logout: (state) => {
      state.token = null;
      state.username = null; // Clear username on logout
      localStorage.removeItem("token");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false;
        state.token = action.payload.token; // Store token from login response
        state.username = action.payload.username; // Store username from login response
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(register.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.isLoading = false;
        state.username = action.payload.username; // Optionally store username from registration
      })
      .addCase(register.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export const { logout } = authSlice.actions;

export default authSlice.reducer;
