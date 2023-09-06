import { apiUrl } from "@/services/api";
import { LoginData } from "./user.types";

export const fetchLoginUser = async (
  loginData: LoginData
): Promise<Response> => {
  const response = await fetch(`${apiUrl}/v1/usuarios/session`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(loginData),
  });
  return response;
};
