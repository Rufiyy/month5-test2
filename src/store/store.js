import {configureStore} from "@reduxjs/toolkit";
import getSliceData from "../feauters/getSliceData";

const store = configureStore({
    reducer:{
        getSliceData
    }
});
export default store;
