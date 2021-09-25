import { FC } from 'react';

import { IconButton, Link } from '@material-ui/core';

import { IIconLinkPassedProps } from './IconLink.types';

const IconLink: FC<IIconLinkPassedProps> = ({
	children,
	disabled,
	target,
	url,
}) => {
	return (
		<Link href={url} target={target}>
			<IconButton disabled={disabled}>{children}</IconButton>
		</Link>
	);
};

export default IconLink;
