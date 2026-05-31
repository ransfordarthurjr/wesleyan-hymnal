import { useCallback, useEffect, useState } from 'react';
import { FlatList, Text, View } from 'react-native';
import {
    SafeAreaView as ReactNativeSafeAreaView,
    useSafeAreaInsets,
} from 'react-native-safe-area-context';
import { Link, useFocusEffect } from 'expo-router';

import { styled } from 'nativewind';

import { APP_HEADING_TAB } from '@/constants/app.constants';
import {
    HymnIndexInterface,
    HymnIndexSchemeType,
    ScreenHeadingProps,
} from '@/types/app.types';
import { cn, generateRandomMathNumber } from '@/utils/utility';
import { getFavouriteHymnsIndexes, getIndexes } from '@/services/hymns.service';

import IconSvg from '@/components/Icon';
import { FirstLineIndexSvg, NumberIndexSvg } from '@/components/svg/SvgIcons';

import { ScreenHeading } from '@/components/Headings';
import HymnOfTheWeekCard from '@/components/HymnOfTheWeekCard';
import { HymnIndexFavouriteCard } from '@/components/HymnIndexCards';

const SafeAreaView = styled(ReactNativeSafeAreaView);
const HymnsScreen = () => {
    const heading: ScreenHeadingProps = {
        ...APP_HEADING_TAB,
        title: 'Hymns',
    } as ScreenHeadingProps;

    const insets = useSafeAreaInsets();
    const { top, bottom } = insets;

    const schemes: HymnIndexSchemeType[] = [
        'slate',
        'red',
        'violet',
        'orange',
        'green',
        'fuchsia',
        'teal',
        'rose',
        'cyan',
        'blue',
    ];

    const [scheme, setScheme] = useState<HymnIndexSchemeType>(schemes[0]);
    const [hymnOfTheWeekOrdinal, setHymnOfTheWeekOrdinal] = useState<number>(1);
    const [favouriteIndexes, setFavouriteIndexes] = useState<
        HymnIndexInterface[]
    >([]);

    const hymnsIndexes: HymnIndexInterface[] = getIndexes();

    useEffect(() => {
        setScheme(schemes[generateRandomMathNumber(0, schemes.length - 1)]);

        // @Todo get from firebase in aggreated hymns of week
        setHymnOfTheWeekOrdinal(
            hymnsIndexes[generateRandomMathNumber(0, hymnsIndexes.length - 1)]
                .ordinal,
        );
    }, [scheme]);

    useFocusEffect(
        useCallback(() => {
            setFavouriteIndexes(getFavouriteHymnsIndexes());
        }, []),
    );

    return (
        <SafeAreaView className="flex-1 gap-y-6 p-2 bg-white">
            <View className="flex-row items-center gap-x-2 px-1">
                {heading.mode === 'sub' && (
                    <View className="shrink-0 flex-row items-center justify-center size-8"></View>
                )}

                <ScreenHeading
                    title={heading.title}
                    mode={heading.mode}
                    size={heading.size}
                    justify={heading.justify}
                />

                <View className="shrink-0 flex-row items-center justify-center size-8"></View>
            </View>

            <View className="flex-1 gap-y-4">
                <View className="shrink-0 flex-row gap-2">
                    <Link
                        href={{
                            pathname: '/(hymns)/hymns-index',
                            params: { mode: 'list' },
                        }}
                        asChild>
                        <View
                            className={cn(
                                'flex-1 flex-row items-center gap-x-2 rounded-md bg-sky-200 p-4 active:opacity-75',
                            )}>
                            <IconSvg
                                className="rounded-full items-center justify-center size-8"
                                iconClassName="size-8 text-slate-800"
                                Icon={FirstLineIndexSvg}
                            />
                            <Text className="font-googlesans-medium text-base leading-1.3 text-sky-900 line-clamp-1">
                                First Line Index
                            </Text>
                        </View>
                    </Link>

                    <Link
                        href={{
                            pathname: '/(hymns)/hymns-index',
                            params: { mode: 'grid' },
                        }}
                        asChild>
                        <View
                            className={cn(
                                'flex-1 flex-row items-center gap-x-2 rounded-md bg-fuchsia-200 p-4 active:opacity-75',
                            )}>
                            <IconSvg
                                className="rounded-full items-center justify-center size-6"
                                iconClassName="size-6 text-slate-800"
                                Icon={NumberIndexSvg}
                            />
                            <Text className="font-googlesans-medium text-base leading-1.3 text-fuchsia-900 line-clamp-1">
                                Number Index
                            </Text>
                        </View>
                    </Link>
                </View>

                <HymnOfTheWeekCard
                    ordinal={hymnOfTheWeekOrdinal}
                    scheme={scheme}
                />

                <View className="flex-1 gap-y-2">
                    <Text className="shrink-0 font-googlesans-semibold text-lg text-indigo-900">
                        Favourites
                    </Text>

                    <View className="flex-1">
                        <FlatList
                            data={favouriteIndexes}
                            keyExtractor={(item) => item.ordinal.toString()}
                            renderItem={({ item, index }) => (
                                <HymnIndexFavouriteCard
                                    hymn={item}
                                    first={index === 0}
                                    last={index === favouriteIndexes.length - 1}
                                    scheme={
                                        schemes[item.ordinal % schemes.length]
                                    }
                                />
                            )}
                            ItemSeparatorComponent={() => (
                                <View className="h-1"></View>
                            )}
                            showsVerticalScrollIndicator={false}
                            contentContainerStyle={{
                                paddingBottom: bottom + 24,
                            }}
                        />
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
};

export default HymnsScreen;
