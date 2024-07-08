import React, { createContext, useReducer, useEffect, useCallback } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import reducer from './reducer';
import actions from './store';

export const ProductCartContext = createContext<ProductCartContextType | undefined>(undefined);

const initialState = {
  products: [],
};

export type ProductCartContextType = {
  products: any[];
  setProduct: (product: any) => void;
  addProduct: (product: any) => void;  // Add this line
  resetProductCart: () => void;
};

const ProductCartContextProvider= ({ children }:any) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchUserFromStorage = useCallback(async () => {
    try {
      const storedData = await AsyncStorage.getItem('@productCart');
      if (storedData) {
        const parsedData = JSON.parse(storedData);
        dispatch({ type: actions.SET_PRODUCTCART, payload: { products: parsedData } });
      }
    } catch (error) {
      console.error('Error fetching user from storage:', error);
    }
  }, []);

  const setProduct = useCallback((product: any) => {
    dispatch({ type: actions.SET_PRODUCTCART, payload: { products: product } });
    try {
      AsyncStorage.setItem('@productCart', JSON.stringify(product));
    } catch (err) {
      console.log('Failed to store product cart.');
    } finally {
      console.log('Data added successfully.');
    }
  }, []);

  const addProduct = useCallback((product: any) => {  // Add this function
    dispatch({ type: actions.SET_PRODUCTCART, payload: { products: [...state.products, product] } });
    try {
      AsyncStorage.setItem('@productCart', JSON.stringify([...state.products, product]));
    } catch (err) {
      console.log('Failed to store product cart.');
    } finally {
      console.log('Product added successfully.');
    }
  }, [state.products]);

  const resetProductCart = useCallback(() => {
    dispatch({ type: actions.RESET_PRODUCTCART });
    try {
      AsyncStorage.removeItem('@productCart');
    } catch (err) {
      console.log('Failed to reset product cart.');
    } finally {
      console.log('Product cart reset successfully.');
    }
  }, []);

  useEffect(() => {
    fetchUserFromStorage();
  }, [fetchUserFromStorage]);

  return (
    <ProductCartContext.Provider value={{ products: state.products, setProduct, addProduct, resetProductCart }}>
      {children}
    </ProductCartContext.Provider>
  );
};

export default ProductCartContextProvider;
