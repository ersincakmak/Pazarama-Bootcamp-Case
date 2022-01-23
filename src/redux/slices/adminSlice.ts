import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import api from '../../constants/axios'
import { ILoginPayload, IUser, IUserState } from '../../types/admin'

export const login = createAsyncThunk(
  'admin/login',
  async (payload: ILoginPayload, { rejectWithValue }) => {
    try {
      const { data } = await api.request({
        method: 'POST',
        url: 'admin/login',
        data: payload,
      })
      localStorage.setItem('token', data.data.accessToken as string)
      return data.data as IUser
    } catch (error) {
      return rejectWithValue((error as any).response.data.message as string)
    }
  }
)

export const getMe = createAsyncThunk(
  'admin/getMe',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await api.request({
        method: 'GET',
        url: 'admin/getMe',
      })
      return data.data as IUser
    } catch (error) {
      localStorage.removeItem('token')
      return rejectWithValue((error as any).response.data.message as string)
    }
  }
)

const initialState: IUserState = {
  applications: [],
  user: null,
  message: '',
}

const adminSlice = createSlice({
  name: 'admin',
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null
      localStorage.removeItem('token')
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.fulfilled, (state, action) => {
        state.user = action.payload
        state.message = ''
      })
      .addCase(login.rejected, (state, action) => {
        state.user = null
        state.message = action.payload as string
      })

    builder
      .addCase(getMe.fulfilled, (state, action) => {
        state.user = action.payload
      })
      .addCase(getMe.rejected, (state) => {
        state.user = null
      })
  },
})

export const { logout } = adminSlice.actions

export default adminSlice.reducer
