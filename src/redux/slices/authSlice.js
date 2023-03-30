import { createSlice , createAsyncThunk } from "@reduxjs/toolkit";


let initialState = {
    user : "",
    token : "",
    loading : false,
}

const authSlice = createSlice({
    name : "user",
    initialState,
    reducers : {
        
    }
})