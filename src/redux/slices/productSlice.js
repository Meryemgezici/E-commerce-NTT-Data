import { createSlice } from "@reduxjs/toolkit";
import { getProducts } from "../actions/productAction";

const initialState={
    products:[],
    isLoading:true,
    isError:false
}
const productSlice=createSlice({
    name: "product",
    initialState,
    extraReducers:(builder)=>{
        // cevap beklerken
        builder.addCase(getProducts.pending,(state)=>{
            state.isLoading = true;
        })
        // olumlu cevap geldiğinde
        .addCase(getProducts.fulfilled,(state,action)=>{
            state.isLoading = false;
            state.isError = false;
            state.products=action.payload;
        })
        // olumsuz cevap geldiğinde
        .addCase(getProducts.rejected,(state)=>{
            state.isLoading = false;
            state.isError = false;
            alert("üzgünüz bir hata oluştu")
        })
    },
});


export default productSlice.reducer;

