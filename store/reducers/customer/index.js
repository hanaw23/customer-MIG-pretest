import { createSlice } from "@reduxjs/toolkit";

const customerManagementSlice = createSlice({
  name: "customer",
  initialState: {
    getCustomers: null,
    addCustomer: null,
    editCustomer: null,
    deleteCustomer: null,
  },
  reducers: {
    getCustomers: (state, action) => {
      state.getCustomers = action.payload;
    },
    addCustomer: (state, action) => {
      state.addCustomer = action.payload;
    },
    editCustomer: (state, action) => {
      state.editCustomer = action.payload;
    },
    deleteCustomer: (state, action) => {
      state.deleteCustomer = action.payload;
    },
  },
});

export const { getCustomers, addCustomer, editCustomer, deleteCustomer } = customerManagementSlice.actions;

export const customerReducer = customerManagementSlice.reducer;
