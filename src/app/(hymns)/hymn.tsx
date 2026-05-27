import { useEffect, useState } from 'react';
import { View, Pressable } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { router, useLocalSearchParams } from 'expo-router';

import { HymnIndexSchemeType } from '@/types/app.types';

import { cn } from '@/utils/utility';

import {
    getFavouriteHymns,
    toggleHymnToFavourites,
} from '@/services/hymns.service';

import IconSvg from '@/components/Icon';
import {
    ArrowBackSvg,
    HeartFullSvg,
    HeartSvg,
} from '@/components/svg/SvgIcons';
import ScreenHeading from '@/components/ScreenHeading';

const HymnScreen = () => {
    const insets = useSafeAreaInsets();
    const { top, bottom } = insets;

    const { number, scheme } = useLocalSearchParams<{
        number: string;
        scheme: HymnIndexSchemeType;
    }>();
    const ordinal: number = Number(number) || 1;

    const [isFavourite, setIsFavourite] = useState(false);

    useEffect(() => {
        const favourites: Set<number> = getFavouriteHymns();
        setIsFavourite(favourites.has(ordinal));
    }, [ordinal]);

    const handleToggleHymnToFavourites = (ordinal: number) => {
        const favourites: Set<number> = toggleHymnToFavourites(ordinal);
        setIsFavourite(favourites.has(ordinal));
    };

    return (
        <View className="flex-1 gap-y-0 p-0 bg-white">
            <View
                className={cn(
                    'h-6',
                    scheme === 'slate' && 'bg-slate-500',
                    scheme === 'red' && 'bg-red-500',
                    scheme === 'orange' && 'bg-orange-500',
                    scheme === 'green' && 'bg-green-500',
                    scheme === 'teal' && 'bg-teal-500',
                    scheme === 'cyan' && 'bg-cyan-500',
                    scheme === 'blue' && 'bg-blue-500',
                    scheme === 'violet' && 'bg-violet-500',
                    scheme === 'fuchsia' && 'bg-fuchsia-500',
                    scheme === 'rose' && 'bg-rose-500',
                )}
                style={{ paddingTop: top + 8 }}></View>
            <View
                className={cn(
                    'flex-row items-center gap-x-2 px-3 pb-6 shadow-lg',
                    scheme === 'slate' && 'bg-slate-500',
                    scheme === 'red' && 'bg-red-500',
                    scheme === 'orange' && 'bg-orange-500',
                    scheme === 'green' && 'bg-green-500',
                    scheme === 'teal' && 'bg-teal-500',
                    scheme === 'cyan' && 'bg-cyan-500',
                    scheme === 'blue' && 'bg-blue-500',
                    scheme === 'violet' && 'bg-violet-500',
                    scheme === 'fuchsia' && 'bg-fuchsia-500',
                    scheme === 'rose' && 'bg-rose-500',
                )}>
                <Pressable
                    onPress={() => {
                        if (router.canGoBack()) router.back();
                        else router.push('../(tabs)');
                    }}
                    className="shrink-0 flex-row items-center justify-center">
                    <IconSvg
                        className="rounded-full items-center justify-center size-8"
                        iconClassName="size-8 text-indigo-50"
                        Icon={ArrowBackSvg}
                    />
                </Pressable>

                <ScreenHeading
                    title={`Hymn: ${ordinal}`}
                    mode="sub"
                    themed={true}
                />

                <Pressable
                    onPress={() => {
                        handleToggleHymnToFavourites(ordinal);
                    }}
                    className="shrink-0 flex-row items-center justify-center">
                    <IconSvg
                        className="rounded-full items-center justify-center size-8"
                        iconClassName="size-6 text-indigo-50"
                        Icon={isFavourite ? HeartFullSvg : HeartSvg}
                    />
                </Pressable>
            </View>

            <View className="flex-1"></View>
        </View>
    );
};

export default HymnScreen;
