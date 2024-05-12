import { IBuilder } from "../../interface/Builder.interface";

export type BuilderContextProps = {
	builderDetails: IBuilder | null,
	setBuilderDetails: (builderDetails: IBuilder) => void;
};
