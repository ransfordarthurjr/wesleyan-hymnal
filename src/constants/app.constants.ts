export const APP_VERSION: number = 1;
export const APP_NAME: string = 'Wesleyan Hymnal';
export const APP_START_UP_TEXT =
    "Let earth and heaven agree, Angels and men be joined, To celebrate with meThe Saviour of mankind;To adore the all-atoning Lamb,And bless the sound of Jesus' name";

export const DEFAULT_IS_USER_FIRST_TIME: boolean = true;

export const DEFAULT_HYMN_VERSION: number = 0.1;
export const DATE_FORMAT: string = 'yyyy-MM-dd';
export const DATETIME_FORMAT: string = `${DATE_FORMAT} HH:mm:ss`;

export const MAX_DAYS_BETWEEN_CHECKINS: number = 30;

export const LOREM_IPSUM: string =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

export const HYMNS_IS_USER_FIRST_TIME_KEY: string = 'hymns-is-user-first-time';
export const HYMNS_LAST_CHECKIN_TIMESTAMP_KEY: string =
    'hymns-last-checkin-timestamp';

export const HYMNS_VERSION_KEY: string = 'hymns-version';
export const HYMNS_KEY: string = 'hymns';
export const HYMNS_COUNT_KEY: string = 'hymns-count';
export const HYMN_PREFIX_KEY: string = 'hymn-';

export const HYMNS_FAVOURITES_KEY: string = 'hymns-my-favourites';
export const HYMNS_FAVOURITES_ORDER_OPTIONS = [
    {
        label: 'Preserve',
        value: 'preserve',
        description: 'Preserve the order of your favourites',
    },
    {
        label: 'Ascending',
        value: 'ascending',
        description: 'Order favourites by ascending order',
    },
    {
        label: 'Descending',
        value: 'descending',
        description: 'Order favourites by descending order',
    },
];
export const HYMNS_FAVOURITES_ORDER_KEY: string = 'hymns-my-favourites-order';

export const DEFAULT_HYMNS_PREFERENCES_KEY_STANZA_FONT_SIZE: string =
    'text-2xl';
export const HYMNS_PREFERENCES_KEY_STANZA_FONT_SIZE: string =
    'hymns-preferences-stanza-font-size';

export const DEFAULT_HYMNS_PREFERENCES_KEY_STANZA_FONT_FACE: string =
    'font-literata-italic';
export const HYMNS_PREFERENCES_KEY_STANZA_FONT_FACE: string =
    'hymns-preferences-stanza-font-face';

export const DEFAULT_HYMNS_PREFERENCES_KEY_INCLUDE_ALL_LINES_IN_SEARCH: boolean = false;
export const HYMNS_PREFERENCES_KEY_INCLUDE_ALL_LINES_IN_SEARCH: string =
    'hymns-preferences-include-all-lines-in-search';

export const APP_HEADING_MAIN = {
    title: 'Wesleyan Hymnal',
    mode: 'main',
    size: 'large',
    justify: 'center',
};

export const APP_HEADING_TAB = {
    title: '',
    mode: 'tab',
    size: 'medium',
    justify: 'start',
};

export const APP_HEADING_SUB = {
    title: '',
    mode: 'sub',
    size: 'regular',
    justify: 'start',
};

export const PREFERENCES_FONT_SIZE_OPTIONS = [
    { label: 'XL', fontSize: 'text-4xl', iconSize: 'size-8' },
    { label: 'L', fontSize: 'text-3xl', iconSize: 'size-8' },
    { label: 'R', fontSize: 'text-2xl', iconSize: 'size-8' },
    { label: 'S', fontSize: 'text-xl', iconSize: 'size-8' },
    { label: 'XS', fontSize: 'text-lg', iconSize: 'size-8' },
];

export const PREFERENCES_FONT_FACE_OPTIONS = [
    { label: 'Literata', fontFace: 'font-literata-italic' },
    { label: 'Roboto Mono', fontFace: 'font-robotomono-regular' },
    { label: 'Google Sans', fontFace: 'font-googlesans-regular' },
    { label: 'Quick Sand', fontFace: 'font-quicksand-medium' },
];

export const SCHEME_OPTION_SLATE = { label: 'Slate', vx: 'slate' } as const;
export const SCHEME_OPTION_RED = { label: 'Red', vx: 'red' } as const;
export const SCHEME_OPTION_VIOLET = { label: 'Violet', vx: 'violet' } as const;
export const SCHEME_OPTION_ORANGE = { label: 'Orange', vx: 'orange' } as const;
export const SCHEME_OPTION_GREEN = { label: 'Green', vx: 'green' } as const;
export const SCHEME_OPTION_FUCHSIA = {
    label: 'Fuchsia',
    vx: 'fuchsia',
} as const;
export const SCHEME_OPTION_TEAL = { label: 'Teal', vx: 'teal' } as const;
export const SCHEME_OPTION_ROCK = { label: 'Rose', vx: 'rose' } as const;
export const SCHEME_OPTION_CYAN = { label: 'Cyan', vx: 'cyan' } as const;
export const SCHEME_OPTION_BLUE = { label: 'Blue', vx: 'blue' } as const;
export const SCHEME_OPTION_SKY = { label: 'Sky', vx: 'sky' } as const;

export const SCHEME_OPTIONS = [
    SCHEME_OPTION_SLATE,
    SCHEME_OPTION_RED,
    SCHEME_OPTION_VIOLET,
    SCHEME_OPTION_ORANGE,
    SCHEME_OPTION_GREEN,
    SCHEME_OPTION_FUCHSIA,
    SCHEME_OPTION_TEAL,
    SCHEME_OPTION_ROCK,
    SCHEME_OPTION_CYAN,
    SCHEME_OPTION_BLUE,
    SCHEME_OPTION_SKY,
];
