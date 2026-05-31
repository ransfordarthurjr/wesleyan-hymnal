import { SvgProps } from 'react-native-svg';

export interface ScreenHeadingProps {
    title: string;
    mode: 'main' | 'tab' | 'sub';
    size: 'large' | 'medium' | 'regular';
    justify: 'start' | 'center' | 'end';
    themed?: boolean;
}

export type IconComponent = React.ComponentType<
    SvgProps & { className?: string; focused?: boolean }
>;

export interface IconProps {
    className?: string;
    iconClassName?: string;
    Icon: IconComponent;
}

export interface TabIconProps {
    focused: boolean;
    Icon: IconComponent;
}

export interface TabItemInterface {
    name: string;
    title: string;
    Icon: IconComponent;
}

export interface VerseOfTheDayProps {
    ordinal: number;
}

export interface YouVersionBibleDataInterface {
    id: number;
    abbreviation: string;
    promotional_content?: string | null;
    copyright?: string | null;
    info?: string | null;
    publisher_url?: string | null;
    language_tag: string;
    localized_abbreviation: string;
    localized_title: string;
    title: string;
    books: string[];
    youversion_deep_link: string;
    organization_id?: string | null;
}

export interface YouVersionVerseOfTheDayInterface {
    day: number;
    passage_id: string;
}

export interface YouVersionPassageInterface {
    id: string;
    content: string;
    reference: string;
}

export interface HymnOfTheWeekCardProps {
    ordinal: number;
    scheme?: HymnIndexSchemeType;
}

export type HymnListMode = 'list' | 'grid';

export interface HymnInterface {
    ordinal: number;
    author: string;
    category: string;
    preview: string;
    stanzas: Stanza[];
    refrain: Refrain;
    tags: string[];
}

export interface Stanza {
    stanza: number;
    lines: string[];
}

export interface Refrain {
    lines: string[];
}

export interface HymnIndexInterface {
    ordinal: number;
    category: string;
    preview: string;
    number_of_stanzas: number;
}

export type HymnIndexSchemeType =
    | 'red'
    | 'orange'
    | 'green'
    | 'teal'
    | 'cyan'
    | 'blue'
    | 'violet'
    | 'fuchsia'
    | 'rose'
    | 'sky'
    | 'slate';

export type HymnIndexModeType = 'list' | 'grid';

export interface HymnIndexProps {
    hymn: HymnIndexInterface;

    first?: boolean;
    last?: boolean;
    scheme?: HymnIndexSchemeType;
}

export interface HymnIndexProps {
    hymn: HymnIndexInterface;

    first?: boolean;
    last?: boolean;
    scheme?: HymnIndexSchemeType;
}

export interface HymnStanzaProps {
    stanza: Stanza;
    refrain?: Refrain;
    scheme?: HymnIndexSchemeType;

    stanzaFontSize?: string;
    stanzaFontFace?: string;
}

export interface FontSizeOptionInterface {
    label: string;
    fontSize: string;
    iconSize: string;
}

export interface FontFaceOptionInterface {
    label: string;
    fontFace: string;
}

export interface LinkCardProps {
    scheme?: HymnIndexSchemeType;

    pathname: any;
    params?: Record<string, string>;
    Icon: IconComponent;
    title: string;

    first?: boolean;
    last?: boolean;
}

export interface SchemeMetaDataInterface {
    label: string;
    vx: string;

    scheme: HymnIndexSchemeType;
}
