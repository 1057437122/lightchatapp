import Cookies from "js-cookie";

// User
const tokenKey = "accessToken";
export const getToken = () => Cookies.get(tokenKey);
export const setToken = (token: string) => Cookies.set(tokenKey, token);

const idKey = "userId";
export const getId = () => Cookies.get(idKey);
export const setId = (id: string) => Cookies.set(idKey, id);
