import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getProducts = createAsyncThunk("getProducts",
    async() => {
       const res= await axios.get("https://honey-badgers-ecommerce.glitch.me/products");

       const newData=res.data.map((product)=>({...product,like:false}));
       return newData;
    }
    
);