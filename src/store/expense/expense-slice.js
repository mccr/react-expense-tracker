import { createSlice } from "@reduxjs/toolkit";

export const expenseSlice = createSlice({
  name: "expenseSlice",
  initialState: {
    income: 0,
    expenseList: [],
  },
  reducers: {
    addExpenseAction: (currentSlice, action) => {
      currentSlice.expenseList.push(action.payload);
    },
    setIncomeAction: (currentSlice, action) => {
      currentSlice.income = action.payload;
    },
  },
});

export const { addExpenseAction, setIncomeAction } = expenseSlice.actions;
