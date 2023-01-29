import { createSlice } from "@reduxjs/toolkit";

const defaultAddress = {
  province: "",
  city: "",
  postalCode: "",
  postalAddress: "",
  latitude: "",
  longitude: "",
  transferee: "",
  id: -1,
};

const defaultPetGeneralData = {
  name: "",
  petType: "",
  breed: "",
  sex: "",
  birthData: "",
};

const initialState = {
  address: {
    data: [],
    onChange: {
      mode: "none", // create | edit | none
      data: defaultAddress,
    },
  },
  pet: {
    data: [],
    onChange: {
      mode: "none",
      data: defaultPetGeneralData,
    },
  },
};

export const dashboardSlice = createSlice({
  name: "dashboard",
  initialState,
  reducers: {
    // Address
    setAddresses: (state, action) => {
      state.address.data = action.payload;
    },
    addAddress: (state, action) => {
      state.address.data = [action.payload, ...state.address.data];
    },
    setEditAddressMode: (state, action) => {
      // action: 1 (id of address)
      state.address.onChange = {
        mode: "edit",
        data: state.address.data[action.payload],
      };
    },
    setCreateAddressMode: (state) => {
      state.address.onChange = {
        mode: "create",
        data: defaultAddress,
      };
    },
    resetAddressMode: (state) => {
      state.address.onChange = {
        mode: "none",
        data: defaultAddress,
      };
    },
    // Pet
    
  },
});

export const {
  setAddresses,
  addAddress,
  setOnChangeAddress,
  resetAddressMode,
  setCreateAddressMode,
  setEditAddressMode,
} = dashboardSlice.actions;

export const selectAddresses = (state) => state.dashboard.address.data;
export const selectOnChangeAddress = (state) =>
  state.dashboard.address.onChange;

export default dashboardSlice.reducer;
