export type BasicPaginationPropsType = {
	pageCount: number | undefined;
	currentPage: number | undefined;
	handlePageChange: (event: React.ChangeEvent<unknown>, page: number) => void;
};
