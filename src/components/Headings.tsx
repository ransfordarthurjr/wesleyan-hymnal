import { View, Text } from 'react-native';
import { ScreenHeadingProps } from '../types/app.types';
import { cn } from '@/utils/utility';

export const ScreenHeading = ({
    title,
    mode = 'sub',
    size = 'medium',
    justify = 'start',
    themed = false,
}: ScreenHeadingProps) => {
    return (
        <View
            className={cn('flex-1 flex-row items-center', {
                'justify-start': justify === 'start',
                'justify-center': justify === 'center',
                'justify-end': justify === 'end',
            })}>
            <Text
                className={cn(
                    'font-googlesans-medium text-indigo-900 leading-1.5 line-clamp-1',
                    {
                        'text-3xl': size === 'large',
                        'text-2xl': size === 'medium',
                        'text-xl': size === 'regular',
                    },
                    {
                        'font-googlesans-regular': size === 'large',
                    },
                    { 'text-white': themed },
                )}>
                {title}
            </Text>
        </View>
    );
};

export const SectionHeading = ({ title }: { title: string }) => {
    return (
        <Text className="shrink-0 font-googlesans-medium text-lg text-slate-950">
            {title}
        </Text>
    );
};
