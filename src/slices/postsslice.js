import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
export const fetchPosts = createAsyncThunk('posts', async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
    return response.data
})

const initialState = {
    posts: "",
    status: ""
}




export const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {

    },
    extraReducers(builder) {
        builder
            .addCase(fetchPosts.pending, (state, action) => {
                state.status = 'loading'
                console.log("pending", action.payload)
            })
            .addCase(fetchPosts.fulfilled, (state, action) => {
                state.status = 'succeeded'
                // Add any fetched posts to the array
                console.log("done", action.payload)
                state.posts = action.payload
            })
            .addCase(fetchPosts.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message
            })
    }

})

// Action creators are generated for each case reducer function
export const { increment, incrementByAmount } = postsSlice.actions

export default postsSlice.reducer