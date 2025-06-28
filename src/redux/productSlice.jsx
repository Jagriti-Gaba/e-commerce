import { createSlice } from '@reduxjs/toolkit'

const initialState={
    products:[]
};

export const productSlice=createSlice({
    name:'product',
    initialState, 
    reducers:{
        add:(state,action)=>{
                state.products.push(action.payload)
        },
        remove:(state,action)=>{
                state.products=state.products.filter(p=>p.id!==action.payload)
        }

    }
});
export const{add,remove}=productSlice.actions;
export default productSlice.reducer;

