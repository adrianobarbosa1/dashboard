import { createSlice } from "@reduxjs/toolkit";
import { loginUser } from "./thunks";

const initialState: UserSliceState = {
  cpf: "",
  email: "",
  nome: "",
  errorMessage: "",
  status: "idle",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.status = "loading";
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.status = "idle";
      })
      .addCase(loginUser.rejected, (state) => {
        state.status = "failed";
      });
  },
});

/* Types */
export interface UserSliceState {
  cpf: string;
  email: string;
  nome: string;
  errorMessage: string;
  status: "idle" | "loading" | "failed";
}
