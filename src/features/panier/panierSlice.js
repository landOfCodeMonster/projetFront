import { createSlice } from '@reduxjs/toolkit'

export const panierSlice = createSlice({
  name: 'panier',
  initialState: {
    cart: []
  },
  reducers: {
    add: (state, action) => {
      state.cart.push(action.payload)
    },
    remove: (state, action) => {
      state.cart =  state.cart.filter(item => !item.name.includes(action.payload.name))
    }
  }
})

// Action creators are generated for each case reducer function
export const { add, remove } = panierSlice.actions

export default panierSlice.reducer