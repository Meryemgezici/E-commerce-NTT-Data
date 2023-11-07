import { createSlice } from "@reduxjs/toolkit";
import { getProducts } from "../actions/productAction";

const initialState={
    // değişmeyen dizi
    mainProducts:[],
    // filtrelenen dizi
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
            state.mainProducts = action.payload;
            state.products=action.payload;
            state.isLoading = false;
            state.isError = false;
            
        })
        // olumsuz cevap geldiğinde
        .addCase(getProducts.rejected,(state)=>{
            state.isLoading = false;
            state.isError = false;
            alert("üzgünüz bir hata oluştu")
        })
    },

    reducers: {
        statuLike: (state, action) => {
            const index = state.products.findIndex((item) => item.id === action.payload);

            const updatedProducts = [...state.products];
        
            updatedProducts[index]={...updatedProducts[index],like:!updatedProducts[index].like}
            console.log("updatedProducts[index].like:"+updatedProducts[index].like);
          
            state.products = updatedProducts;
            console.log(state.products);
          
        },
        filterFavorite: (state) => {
            const filter = state.products.filter((item) => item.like === true);

            state.products=filter;
          
        },
        removeFilter: (state) => {
        
            state.products=state.mainProducts;
          
        },
      },
});


export default productSlice.reducer;
export const {  statuLike,filterFavorite,removeFilter } = productSlice.actions;
