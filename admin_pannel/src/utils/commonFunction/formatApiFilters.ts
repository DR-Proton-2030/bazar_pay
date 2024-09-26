import { FilterModel } from "ag-grid-community";

export const formatFilters = (filterModel: FilterModel) => {
	const filters: Record<string, any> = {};
	Object.keys(filterModel).forEach((field) => {
		const filterDetails = filterModel[field];
		if (filterDetails.filterType === "text" && filterDetails.filter) {
			filters[field] = { $regex: `^${filterDetails.filter}`, $options: "i" };
		}
		if (filterDetails.filterType === "number" && filterDetails.filter) {
			filters[field] = {
				$gte: filterDetails.filter
			};
		}
		if (filterDetails.filterType === "number" && filterDetails.type === "inRange") {
			filters[field] = {
				$gte: filterDetails.filter,
				$lte: filterDetails.filterTo
			};
		}
	});

	return filters;
};
