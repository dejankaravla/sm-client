export const USER_LOGGEDIN = "USER_LOGGEDIN";
export const USER_LOGGEDOUT = "USER_LOGGEDOUT";
export const SET_USER_NAME = "SET_USER_NAME";
export const USER_DATA = "USER_DATA";
import { iLogin } from "./types";

export const handleLogin = (value: iLogin) => {
  return {
    type: USER_LOGGEDIN,
    payload: value,
  };
};
