import axios from "axios";

export const axiosToFastAPIInstance = axios.create({
  baseURL: "http://127.0.0.1:8000",
});

type User = {
  name: string;
  age: number;
};

export const getData = async () => {
  const response = await axiosToFastAPIInstance.get<User>("/");

  return response.data;
};

export const axiosToNodeJSInstance = axios.create({
  baseURL: "http://127.0.0.1:3000",
});
export const getUserData = async () => {
  const response = await axiosToNodeJSInstance.get("/api/users");

  return response.data;
};
