import { View, Text } from 'react-native';
import { Link } from 'expo-router';

import { cn } from '@/utils/utility';

import IconSvg from '@/components/Icon';
import {
    ChevronRightSvg,
    HymnSvg,
    NumberIndexSvg,
} from '@/components/svg/SvgIcons';

import { HymnOfTheWeekCardProps } from '@/types/app.types';

const HymnOfTheWeekCard = ({
    ordinal,
    firstLine,
    stanzas,
    author,
}: HymnOfTheWeekCardProps) => {
    return (
        <Link href={{ pathname: '/(hymns)/hymn', params: { ordinal } }} asChild>
            <View className="gap-y-3 rounded-md p-4 bg-orange-200">
                <View className="flex-row items-end gap-x-2 ">
                    <Text className="font-googlesans-regular">
                        Hymn of the Week:
                    </Text>

                    <Text className="font-googlesans-medium">{ordinal}</Text>
                </View>

                <View className="flex-row items-center gap-x-2 pt-2">
                    <IconSvg
                        className="shrink-0 rounded-full items-center justify-center size-8"
                        iconClassName="size-8 text-orange-900"
                        Icon={HymnSvg}
                    />
                    <Text className="flex-1 font-googlesans-medium text-xl text-orange-900 line-clamp-1">
                        {firstLine}
                    </Text>
                    <IconSvg
                        className="shrink-0 rounded-full items-center justify-center size-8"
                        iconClassName="size-4 text-orange-900"
                        Icon={ChevronRightSvg}
                    />
                </View>

                <View className="flex-row items-center justify-between">
                    <Text className="font-googlesans-medium">
                        Stanzas: {stanzas}
                    </Text>
                    <Text className="font-googlesans-medium">By: {author}</Text>
                </View>
            </View>
        </Link>
    );
};

export default HymnOfTheWeekCard;
