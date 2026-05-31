import { View } from 'react-native';
import { IconProps, TabIconProps } from '@/types/app.types';
import { cn } from '@/utils/utility';

export default function IconSvg({ className, iconClassName, Icon }: IconProps) {
    return (
        <View className={cn(className)}>
            <Icon className={cn(iconClassName)} />
        </View>
    );
}

export function TabIconSvg({ focused, Icon }: TabIconProps) {
    return (
        <View
            className={cn(
                'flex items-center justify-center rounded-full size-13',
                focused && 'bg-slate-50',
            )}>
            <Icon
                focused={focused}
                className={cn(
                    'size-8 text-indigo-50',
                    focused && 'text-indigo-800',
                )}
            />
        </View>
    );
}
