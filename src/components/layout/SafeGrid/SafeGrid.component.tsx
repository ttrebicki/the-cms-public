import React, { Children, FC } from 'react';

import cn from 'classnames';

import { paddingMapper } from './propMappers';
import { ISafeGrid } from './SafeGrid.types';
import useStyles from './SafeGrid.styles';
import { useTheme } from '@material-ui/core';

const SafeGrid: FC<ISafeGrid> = ({
	direction,
	padding,
	spacing,
	background,
	elevation,
	fillContainer,
	mainColumn,
	children,
}) => {
	const safeDirection = direction ? direction : 'column';
	const safePadding = padding ? paddingMapper(padding) : '0';
	const safeSpacing = spacing ? spacing : 0;
	const safeBackground = background ? background : false;
	// const safeElevation = elevation ? elevation : false;
	const safeFillContainer = fillContainer ? fillContainer : false;
	const safeMainColumn = mainColumn ? mainColumn : false;
	// setting up default values if props are not provided

	const theme = useTheme();
	const classes = useStyles({
		safeDirection,
		safeFillContainer,
		safePadding,
		safeSpacing,
	})(theme);

	const mappedChildren = Children.map(children, (child) => {
		if (child === null) {
			return;
		}

		if (
			React.isValidElement(child) &&
			(child as React.ReactElement<any>).type === SafeGrid
		) {
			return child;
		}

		return (
			<div
				className={cn(
					safeDirection && safeDirection === 'row'
						? classes.childRow
						: classes.childColumn,
					safeBackground && classes.withBackground
				)}
			>
				{child}
			</div>
		);
	});

	return (
		<div
			className={cn(
				classes.root,
				safeDirection && safeDirection === 'row'
					? classes.childRow
					: classes.childColumn,
				safeBackground && classes.withBackground,
				safeMainColumn && classes.mainColumn
			)}
		>
			{mappedChildren}
		</div>
	);
};

export default SafeGrid;
