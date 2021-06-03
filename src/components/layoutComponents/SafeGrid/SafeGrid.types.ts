export interface ISafeGrid {
    direction?: 'row' | 'column',
    padding?: '0' | '16' | '32' | 0 | 16 | 32,
    spacing?: '0' | '8' | '16' | '32' | '80' | 0 | 8 | 16 | 32 | 80,
    mainColumn?: boolean,
    background?: boolean,
    elevation?: boolean,
    fillContainer?: boolean,
}