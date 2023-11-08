import { createSlice } from "@reduxjs/toolkit";
import { getProducts } from "../actions/productAction";

const initialState = {
  // değişmeyen dizi
  mainProducts: [],
  // filtrelenen dizi
  products: [],
  isLoading: true,
  isError: false,
};
const productSlice = createSlice({
  name: "product",
  initialState,
  extraReducers: (builder) => {
    // cevap beklerken
    builder
      .addCase(getProducts.pending, (state) => {
        state.isLoading = true;
      })
      // olumlu cevap geldiğinde
      .addCase(getProducts.fulfilled, (state, action) => {
        state.mainProducts = action.payload;
        state.products = action.payload;
        state.isLoading = false;
        state.isError = false;
      })
      // olumsuz cevap geldiğinde
      .addCase(getProducts.rejected, (state) => {
        state.isLoading = false;
        state.isError = false;
        alert("üzgünüz bir hata oluştu");
      });
  },

  reducers: {
    statuLike: (state, action) => {
      const index = state.mainProducts.findIndex(
        (item) => item.id === action.payload
      );

      const updatedProducts = [...state.mainProducts];

      updatedProducts[index] = {
        ...updatedProducts[index],
        like: !updatedProducts[index].like,
      };

      state.mainProducts = updatedProducts;
      state.products = updatedProducts;
    },
    filterFavorite: (state) => {
      const filter = state.mainProducts.filter((item) => item.like === true);

      state.products = filter;
    },
    removeFilter: (state) => {
      state.products = state.mainProducts;
    },
  },
});

export default productSlice.reducer;
export const { statuLike, filterFavorite, removeFilter } = productSlice.actions;
