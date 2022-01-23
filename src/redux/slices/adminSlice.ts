import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import api from '../../constants/axios'
import { ILoginPayload, IUserState } from '../../types/admin'

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
      return true
    } catch (error) {
      return rejectWithValue((error as any).response.data.message as string)
    }
  }
)

const initialState: IUserState = {
  applications: [],
  message: '',
}

const adminSlice = createSlice({
  name: 'admin',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(login.rejected, (state, action) => {
      state.message = action.payload as string
    })
  },
})

export default adminSlice.reducer
