/* Instruments */
import { createAppAsyncThunk } from "@/lib/redux/createAppAsyncThunk";
import { fetchLoginUser } from "./fetchLoginUser";
import { LoginData } from "./user.types";

export const loginUser = createAppAsyncThunk(
  "user/fetchLoginUser",
  async (loginData: LoginData, thunkApi) => {
    const response = await fetchLoginUser(loginData);
    console.log(response);
    if (response.status === 500) {
      return thunkApi.rejectWithValue(await response.json());
    }
    return response.json();
  }
);
