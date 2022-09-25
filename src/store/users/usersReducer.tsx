import { USER_LOGGEDIN, USER_LOGGEDOUT, SET_USER_NAME, USER_DATA } from "./usersAction";
import { iLogin, DataState } from "./types";

const initialState: DataState = {
  isLoggedIn: false,
  id: "",
  admin: "",
};

export const userReducer = (state = initialState, action: iLogin) => {
  switch (action.type) {
    case USER_DATA:
      return {
        ...state,
        ...action.payload,
      };
    case SET_USER_NAME:
      return {
        ...state,
        name: action.payload,
      };
    case USER_LOGGEDIN:
      return {
        ...state,
        id: action.payload._id,
        admin: action.payload.admin,
        isLoggedIn: true,
      };
    case USER_LOGGEDOUT:
      return {
        isLoggedIn: false,
        token: null,
        permissions: [],
      };
    default:
      return state;
  }
};
