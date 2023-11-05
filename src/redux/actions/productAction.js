import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getProducts = createAsyncThunk("getProducts",
    async() => {
       const res= await axios.get("https://honey-badgers-ecommerce.glitch.me/products");

       return res.data;
    }

    
);