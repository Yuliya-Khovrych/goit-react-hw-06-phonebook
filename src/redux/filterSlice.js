import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    onFilter(state, action) {
      return (state = action.payload);
    },
  },
});

export const { onFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;

//Selectors
export const getFilterContact = state => state.filter;
