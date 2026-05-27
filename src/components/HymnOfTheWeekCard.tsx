import { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { Link } from 'expo-router';

import { HymnInterface, HymnOfTheWeekCardProps } from '@/types/app.types';
import { getHymn } from '@/services/hymns.service';

import IconSvg from '@/components/Icon';
import { ChevronRightSvg, HymnSvg } from '@/components/svg/SvgIcons';

const HymnOfTheWeekCard = ({
    ordinal,
    scheme = 'orange',
}: HymnOfTheWeekCardProps) => {
    const [hymn, setHymn] = useState<HymnInterface | null>(null);

    useEffect(() => {
        setHymn(getHymn(ordinal));
    }, [ordinal]);

    return (
        <Link
            href={{
                pathname: '/(hymns)/hymn',
                params: { number: hymn?.ordinal, scheme: scheme },
            }}
            asChild>
            <View className="gap-y-3 rounded-md p-4 bg-orange-200">
                <View className="flex-row items-end gap-x-2 ">
                    <Text className="font-googlesans-regular">
                        Hymn of the Week:
                    </Text>

                    <Text className="font-googlesans-medium">
                        {hymn?.ordinal}
                    </Text>
                </View>

                <View className="flex-row items-center gap-x-2 pt-2">
                    <IconSvg
                        className="shrink-0 rounded-full items-center justify-center size-8"
                        iconClassName="size-8 text-orange-900"
                        Icon={HymnSvg}
                    />
                    <Text className="flex-1 font-googlesans-medium text-xl text-orange-900 line-clamp-1">
                        {hymn?.preview}
                    </Text>
                    <IconSvg
                        className="shrink-0 rounded-full items-center justify-center size-8"
                        iconClassName="size-4 text-orange-900"
                        Icon={ChevronRightSvg}
                    />
                </View>

                <View className="flex-row items-center justify-between">
                    <Text className="font-googlesans-medium">
                        Stanzas: {hymn?.stanzas.length}
                    </Text>
                    <Text className="font-googlesans-medium">
                        By: {hymn?.author}
                    </Text>
                </View>
            </View>
        </Link>
    );
};

export default HymnOfTheWeekCard;
