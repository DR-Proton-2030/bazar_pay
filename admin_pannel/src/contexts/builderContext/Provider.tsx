/* eslint-disable react-hooks/exhaustive-deps */

import { useReducer, useCallback } from "react";
import { ContextProviderProps } from "../../@types/contexts/context.types";
import reducer from "./reducer";
import initialState from "./store";
import BuilderContext from "./BuilderContext";
import { IBuilder } from "../../@types/interface/Builder.interface";
import actions from "./actions";


const BuilderContextProvider = ({ children }: ContextProviderProps) => {
	const [state, dispatch] = useReducer(reducer, initialState);
	const value = {
		builderDetails: state.builderDetails,
		setBuilderDetails: useCallback((builderDetails: IBuilder) => {
			dispatch({ type: actions.SET_BUIDER, payload: { ...state, builderDetails } });
		}, []),
	};

	return <BuilderContext.Provider value={value}>{children}</BuilderContext.Provider>;
};

export default BuilderContextProvider;
