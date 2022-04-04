import { createSlice } from '@reduxjs/toolkit'

export const BasketSlice = createSlice({
  name: 'basket',
  initialState: [],
  reducers: {
    addToBasket: (state, action) => {
      state.push(action.payload)
    },
    removeItem: (state, action) => {
      return state.filter((item) => item._id !== action.payload)
    }
  }
})

export const { addToBasket, removeItem } = BasketSlice.actions

export const selectBasketItems = (state) => state.basket
export const selectTotalItems = (state) => state.basket.length
export const selectTotalPrice = (state) =>
  state.basket.reduce((total, item) => total + item.price, 0)

export default BasketSlice.reducer
