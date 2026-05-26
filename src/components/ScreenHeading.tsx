import { View, Text } from 'react-native';
import { ScreenHeadingProps } from '../types/app.types';
import { cn } from '@/utils/utility';

const ScreenHeading = ({ title, mode = 'sub' }: ScreenHeadingProps) => {
    return (
        <View className="flex-1 flex-row items-center justify-center">
            <Text
                className={cn(
                    'font-googlesans-regular text-2xl text-indigo-900 leading-1.5 line-clamp-1',
                    { 'text-3xl': mode === 'main' },
                )}>
                {title}
            </Text>
        </View>
    );
};

export default ScreenHeading;
