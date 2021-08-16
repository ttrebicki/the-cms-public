const paddingMapper = (padding: string | number) => {
	switch (padding) {
		case '0':
		case 0:
			return '0';

		case '16':
		case 16:
			return '16px';

		case '32':
		case 32:
			return '32px';

		default:
			return '0';
	}
};

export { paddingMapper };
