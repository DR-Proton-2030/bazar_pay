import initialState from './store';
import actions from './actions';
import reducer from './reducer';
import { useCallback, useEffect, useReducer } from 'react';
import { ContextProviderProps } from '../../@types/contexts/context.types';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { IWholesaler } from '../../@types/types/wholesaler.interface';
import WholesalerContext from './wholesalerContext';

const WholesalerContextProvider = ({ children }: ContextProviderProps) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchWholesalerFromStorage = useCallback(async () => {
    // ... [same content as above]
    try {
      const storedData = await AsyncStorage.getItem('@wholesaler');
      if (storedData) {
        const parsedData = JSON.parse(storedData);

        // Dispatch the user to update the state
        dispatch({ type: actions.SET_WHOLESALER, payload: { ...state, wholesaler: parsedData  } });
      }
    } catch (error) {
      console.error('Error fetching user from storage:', error);
    }
  }, [dispatch]);

  const value = {
    wholesaler: state.wholesaler,
    // eslint-disable-next-line react-hooks/exhaustive-deps
    setWholesaler: useCallback(
      (wholesaler: IWholesaler  | null) => dispatch({ type: actions.SET_WHOLESALER, payload: { ...state, wholesaler } }),
      [],
    ),
  };

  useEffect(() => {
    fetchWholesalerFromStorage();
  }, [fetchWholesalerFromStorage]);

  return <WholesalerContext.Provider value={value}>{children}</WholesalerContext.Provider>;
};

export default WholesalerContextProvider;
