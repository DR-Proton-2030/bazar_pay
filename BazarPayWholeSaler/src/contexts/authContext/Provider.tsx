import initialState from './store';
import actions from './actions';
import reducer from './reducer';
import { useCallback, useEffect, useReducer } from 'react';
import AuthContext from './authContext';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ContextProviderProps } from '../../@types/contexts/context.types';
import { IUserDetails } from '../../@types/types/user.interface';

const AuthContextProvider = ({ children }: ContextProviderProps) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchUserFromStorage = useCallback(async () => {
    // ... [same content as above]
    try {
      const storedData = await AsyncStorage.getItem('@user');
      if (storedData) {
        const parsedData = JSON.parse(storedData);
        dispatch({ type: actions.SET_USER, payload: { ...state, user: parsedData } });
      }
    } catch (error) {
      console.error('Error fetching user from storage:', error);
    }
  }, [dispatch]);

  const value = {
    user: state.user,
    // eslint-disable-next-line react-hooks/exhaustive-deps
    setUser: useCallback(
      (user: IUserDetails | null) => dispatch({ type: actions.SET_USER, payload: { ...state, user } }),
      [],
    ),
  };

  useEffect(() => {
    fetchUserFromStorage();
  }, [fetchUserFromStorage]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthContextProvider;
