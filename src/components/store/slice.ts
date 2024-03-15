import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ProductState {
  name: string;
  // Add other product properties as needed
}

const initialState: ProductState = {
  name: '',
};

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    initializeProduct(state:any, action: PayloadAction<any>) {
      state.name = action.payload.name;
      // Update other product properties based on the payload
    },
    setProductName(state:any, action: PayloadAction<string>) {
      state.name = action.payload;
    },
  },
});

export const { initializeProduct, setProductName } = productSlice.actions;
export default productSlice.reducer;