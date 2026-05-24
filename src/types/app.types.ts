import { SvgProps } from 'react-native-svg';

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
