import { View } from 'react-native';
import clsx from 'clsx';
import { IconProps, TabIconProps } from '@/types/app.types';

export default function IconSvg({ className, iconClassName, Icon }: IconProps) {
    return (
        <View className={clsx(className)}>
            <Icon className={clsx(iconClassName)} />
        </View>
    );
}

export function TabIconSvg({ focused, Icon }: TabIconProps) {
    return (
        <View
            className={clsx(
                'rounded-full items-center justify-center size-13',
                focused && 'bg-slate-50',
            )}>
            <Icon
                focused={focused}
                className={clsx(
                    'size-8 text-indigo-50',
                    focused && 'text-indigo-800',
                )}
            />
        </View>
    );
}
