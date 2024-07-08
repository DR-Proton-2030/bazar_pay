const a11yScrollableProps = (index: number) => {
	return {
		id: `scrollable-auto-tab-${index}`,
		"aria-controls": `scrollable-auto-tabpanel-${index}`
	};
};

export default a11yScrollableProps;
