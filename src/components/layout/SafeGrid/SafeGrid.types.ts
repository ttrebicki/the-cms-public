import { Theme } from '@material-ui/core';

export interface ISafeGrid {
	direction?: 'row' | 'column';
	padding?: '0' | '16' | '32' | 0 | 16 | 32;
	spacing?: '0' | '8' | '16' | '32' | '80' | 0 | 8 | 16 | 32 | 80;
	mainColumn?: boolean;
	background?: boolean;
	elevation?: boolean;
	fillContainer?: boolean;
}

export interface ISafeGridStyleProps {
	safeDirection: 'row' | 'column';
	safeFillContainer: boolean;
	safePadding: '0' | '16px' | '32px';
	safeSpacing: '0' | '8' | '16' | '32' | '80' | 0 | 8 | 16 | 32 | 80;
}
