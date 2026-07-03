import { useEffect, useState } from 'react';
import { FlatList, Pressable, Text, View } from 'react-native';
import {
    SafeAreaView as ReactNativeSafeAreaView,
    useSafeAreaInsets,
} from 'react-native-safe-area-context';
import { Link, router } from 'expo-router';

import { styled } from 'nativewind';

import {
    APP_HEADING_TAB,
    HYMNS_FAVOURITES_ORDER_OPTIONS,
} from '@/constants/app.constants';
import {
    HymnIndexInterface,
    SchemeMetaDataInterface,
    SchemeType,
    ScreenHeadingProps,
} from '@/types/app.types';
import { cn, generateRandomMathNumber, getSchemes } from '@/utils/utility';

import { getIndexes, getOrderingIcon } from '@/services/hymns.service';
import { useHymnsFavourites } from '@/hooks/useHymnsFavourites';

import IconSvg from '@/components/Icon';
import {
    LinesIndexSvg,
    NumberIndexSvg,
    ViewAllSvg,
} from '@/components/svg/SvgIcons';

import { ScreenHeading, SectionHeading } from '@/components/Headings';
import HymnOfTheWeekCard from '@/components/HymnOfTheWeekCard';
import { HymnIndexFavouriteCard } from '@/components/HymnIndexCards';
import { FavouritesEmptyState } from '@/app/(hymns)/hymns-favourites';

const SafeAreaView = styled(ReactNativeSafeAreaView);

const SCHEMES_META_DATA: SchemeMetaDataInterface[] = getSchemes();

const HymnsScreen = () => {
    const heading: ScreenHeadingProps = {
        ...APP_HEADING_TAB,
        title: 'Hymns',
    } as ScreenHeadingProps;

    const { bottom } = useSafeAreaInsets();

    const hymnOfTheWeekScheme: SchemeType =
        SCHEMES_META_DATA[
            generateRandomMathNumber(0, SCHEMES_META_DATA.length - 1)
        ].scheme;

    const [hymnOfTheWeekOrdinal, setHymnOfTheWeekOrdinal] = useState<number>(1);

    const { favouriteIndexes, order, setOrder } = useHymnsFavourites();

    const handleOrderAndCycleToNextOrder = () => {
        const currentIndex = HYMNS_FAVOURITES_ORDER_OPTIONS.findIndex(
            (opt) => opt.value === order,
        );
        const nextIndex =
            (currentIndex + 1) % HYMNS_FAVOURITES_ORDER_OPTIONS.length;

        setOrder(HYMNS_FAVOURITES_ORDER_OPTIONS[nextIndex].value);
    };

    const hymnsIndexes: HymnIndexInterface[] = getIndexes();

    useEffect(() => {
        // @Todo get from firebase in aggregated hymns of week
        setHymnOfTheWeekOrdinal(
            hymnsIndexes[generateRandomMathNumber(0, hymnsIndexes.length - 1)]
                .ordinal,
        );
    }, []);

    return (
        <SafeAreaView className="flex-1 gap-y-6 p-2 bg-white">
            <View className="flex-row items-center gap-x-2 px-1">
                <ScreenHeading
                    title={heading.title}
                    mode={heading.mode}
                    size={heading.size}
                    justify={heading.justify}
                />
                <View className="shrink-0 flex-row items-center justify-center size-8" />
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
                                Icon={LinesIndexSvg}
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
                    scheme={hymnOfTheWeekScheme}
                />

                <View className="flex-1 gap-y-2 pt-2">
                    <View className="flex-row items-center justify-between">
                        <SectionHeading title="Favourites" />

                        {favouriteIndexes.length !== 0 && (
                            <View className="shrink-0 flex-row items-center gap-x-8 px-1">
                                <Pressable
                                    onPress={() =>
                                        router.push('/(hymns)/hymns-favourites')
                                    }
                                    className="shrink-0 flex-row items-center justify-center">
                                    <IconSvg
                                        className="items-center justify-center size-6"
                                        iconClassName={cn(
                                            'size-6 text-indigo-900',
                                        )}
                                        Icon={ViewAllSvg}
                                    />
                                </Pressable>

                                <Pressable
                                    onPress={() =>
                                        handleOrderAndCycleToNextOrder()
                                    }
                                    className="shrink-0 flex-row items-center justify-center">
                                    <IconSvg
                                        className="items-center justify-center size-6"
                                        iconClassName={cn(
                                            'size-6 text-indigo-900',
                                        )}
                                        Icon={getOrderingIcon(order)}
                                    />
                                </Pressable>
                            </View>
                        )}
                    </View>

                    <View className="flex-1">
                        {favouriteIndexes.length === 0 ? (
                            <FavouritesEmptyState />
                        ) : (
                            <FlatList
                                data={favouriteIndexes}
                                keyExtractor={(item) => item.ordinal.toString()}
                                renderItem={({ item, index }) => (
                                    <HymnIndexFavouriteCard
                                        hymn={item}
                                        first={index === 0}
                                        last={
                                            index ===
                                            favouriteIndexes.length - 1
                                        }
                                        scheme={
                                            SCHEMES_META_DATA[
                                                item.ordinal %
                                                    SCHEMES_META_DATA.length
                                            ].scheme
                                        }
                                    />
                                )}
                                ItemSeparatorComponent={() => (
                                    <View className="h-1" />
                                )}
                                showsVerticalScrollIndicator={false}
                                contentContainerStyle={{
                                    paddingBottom: bottom + 24,
                                }}
                            />
                        )}
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
};

export default HymnsScreen;
