import { useCallback, useReducer } from "react";
import AuthContext from "./authContext";
import { ContextProviderProps } from "../../@types/contexts/context.types";
import { IUser } from "../../@types/interface/user.interface";
import actions from "./actions";
import reducer from "./reducer";
import { Store } from "../../@types/contexts/authContext/store.types";

const getUserFromLocalStorage = () => {
  const user = localStorage.getItem("@admin");
  return user ? JSON.parse(user) : null;
};

const initialState: Store = {
  isLoggedIn: false,
  user: getUserFromLocalStorage(),
};

const AuthContextProvider = ({ children }: ContextProviderProps) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = {
    user: state.user,
    isLoggedIn: state.isLoggedIn,
    setUser: useCallback(
      (user: IUser) => {
        dispatch({ type: actions.SET_USER, payload: { ...state, user } });
      },
      [dispatch]
    ),
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthContextProvider;
