import instance from ".";
import { setToken } from "./storage";

const login = async (userInfo) => {
  const { data } = await instance.post("/auth/login", userInfo);
  setToken(data.token);
  return data;
};

const register = async (userInfo) => {
  const formData = new FormData();
  for (const key in userInfo) {
    formData.append(key, userInfo[key]);
  }
  const { data } = await instance.post("/auth/register", formData);
  setToken(data.token);
  return data;
};

const me = async () => {
  const { data } = await instance.get("/auth/me");
  return data;
};

const getAllUsers = async () => {
  const { data } = await instance.get("/auth/users");
  return data;
};
const logout = () => {
  localStorage.removeItem("token");
};

export { getAllUsers, me, register, login };
