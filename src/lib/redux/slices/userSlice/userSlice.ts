import { createSlice } from "@reduxjs/toolkit";
import { loginUser } from "./thunks";
import { User } from "./user.types";

const initialState: UserSliceState = {
  user: {} as User,
  status: "idle",
  errorMessage: "",
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
        state.user = action.payload.result;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.status = "failed";
        state.errorMessage = action.error.message;
      });
  },
});

/* Types */
export interface UserSliceState {
  user: User;
  status: "idle" | "loading" | "failed";
  errorMessage: string | undefined;
}
