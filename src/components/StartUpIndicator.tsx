import { View } from 'react-native';

import { StartUpIndicatorProps } from '@/types/app.types';
import { cn } from '@/utils/utility';

export const StartUpIndicator = ({
    startup,
    active = false,
}: StartUpIndicatorProps) => {
    return (
        <View
            className={cn('rounded-full size-1 bg-indigo-400', {
                'bg-white': active,
            })}></View>
    );
};
