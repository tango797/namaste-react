import { createSlice, current } from "@reduxjs/toolkit";

// it will have a config 
const cartSlice = createSlice({

    name:'cart',
    initialState:{
        items:[]
    },
    reducers:{

        addItem:(state,action)=>{
            //mutating directly our state here 
            state.items.push(action.payload)

        },
        removeItem:(state,action)=>{
            state.items.pop();
        },

        
        clearCart:(state,action)=>{
            // state.action.length=0;//[]  have done this 
            console.log(state);//
            console.log(current(state));
            
           // state =[]; if we do like this it will update the local state not the original state.
            console.log(current(state));
            state.items=[];
        },

    }
});

export const {addItem,clearCart,removeItem}= cartSlice.actions;
export default cartSlice.reducer ;








