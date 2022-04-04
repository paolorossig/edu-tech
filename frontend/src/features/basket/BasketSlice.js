import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  selected: [],
  status: 'idle',
  error: null
}

export const BasketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    addToBasket: (state, action) => {
      state.selected.push(action.payload)
    },
    removeItem: (state, action) => {
      state.selected = state.selected.filter(
        (item) => item._id !== action.payload
      )
    }
  }
})

export const { addToBasket, removeItem } = BasketSlice.actions

export const selectBasketItems = (state) => state.basket.selected
export const selectTotalPrice = (state) =>
  state.basket.selected.reduce((total, item) => total + item.price, 0)

export default BasketSlice.reducer
