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
