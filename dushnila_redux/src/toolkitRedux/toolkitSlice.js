import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const initialState = {
    isLoading: false,
    error: null,
    temp: 24,
    count: 500,
    isOk: true
}

export const fetchContent = createAsyncThunk(
    'content/fetchContent',
    async () => {
        const url = 'http://dushnila.gooddelo.com/data'
        const res = await fetch(url)
        const data = await res.json() 
      return data
    }
)

export const toolkitSlice = createSlice({
    name: 'toolkit',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
      builder.addCase(fetchContent.pending, (state) => {
        state.isLoading = true
      })
      builder.addCase(fetchContent.fulfilled, (state, action) => {
        state.isLoading = false
        state.temp = Number(action.payload.temp).toFixed(1);
        state.count = Math.floor(Number(action.payload.co2))
        if( state.temp > 27 || state.count > 800){
            state.isOk =false
        }else{
            state.isOk =true
        }
      })
      builder.addCase(fetchContent.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.error.message
      })
    },
  })

export const {increment} = toolkitSlice.actions
export default toolkitSlice.reducer