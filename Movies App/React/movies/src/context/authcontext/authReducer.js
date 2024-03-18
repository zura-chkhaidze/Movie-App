import authActions from "./authActions";
import { decodeToken, toggleLocalStorage } from "../../utils/index";
export const initialState = {
  isUserLoggedin: false,
  user: {
    userName: "",
    email: "",
  },
};

export const authReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case authActions.logIn: {
      const { token } = payload;
      toggleLocalStorage(token);
      console.log(payload);
      const userData = decodeToken(token);
      return {
        ...state,
        isUserLoggedin: true,
        user: {
          userName: userData.userName,
          email: userData.email,
        },
      };
    }
    case authActions.logOut: {
      return {
        ...state,
        isUserLoggedin: false,
        user: { userName: "", email: "" },
      };
    }

    default:
      return state;
  }
};
