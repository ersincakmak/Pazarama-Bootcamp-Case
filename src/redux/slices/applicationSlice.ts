import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import api from '../../constants/axios'
import { IApplication, IApplicationState } from '../../types/application'

export const createApplication = createAsyncThunk(
  'application/create',
  async (payload: FormData, { rejectWithValue }) => {
    try {
      const { data } = await api.request<IApplication>({
        method: 'POST',
        data: payload,
        url: 'create-application',
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      return data as IApplication
    } catch (error) {
      return rejectWithValue((error as any).response.data.message)
    }
  }
)

const initialState: IApplicationState = {
  application: {
    _id: '',
    address: '',
    age: 0,
    answers: [],
    applicationReason: '',
    files: [],
    firstName: '',
    lastName: '',
    status: 'waiting',
    tcNo: '',
  },
  message: '',
}

export const sliceName = createSlice({
  name: 'application',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createApplication.pending, (state) => {
        state.message = ''
      })
      .addCase(createApplication.fulfilled, (state, action) => {
        state.application = action.payload
      })
      .addCase(createApplication.rejected, (state, action) => {
        state.application = initialState.application
        state.message = action.payload as string
      })
  },
})

export default sliceName.reducer
