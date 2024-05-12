import { createContext } from "react";
import { BuilderContextProps } from "../../@types/contexts/BuilderContext/BuilderContextProps.types";

const BuilderContext = createContext({} as BuilderContextProps);

export default BuilderContext;
