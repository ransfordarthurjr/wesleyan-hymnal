/* react, react-native, expo */
import { useCallback, useState } from 'react';
import { FlatList, Pressable, Text, View } from 'react-native';
import {
    SafeAreaView as ReactNativeSafeAreaView,
    useSafeAreaInsets,
} from 'react-native-safe-area-context';

import { router, useFocusEffect } from 'expo-router';

/* nativewind */
import { styled } from 'nativewind';

/* 3rd party libs */

/* constants & utilities */
import { APP_HEADING_SUB, APP_HEADING_TAB } from '@/constants/app.constants';
import {
    HymnIndexInterface,
    SchemeMetaDataInterface,
    ScreenHeadingProps,
} from '@/types/app.types';
import { cn, getSchemes } from '@/utils/utility';

/* custom defined hooks */

/* services */
import { getFavouriteHymnsIndexes } from '@/services/hymns.service';

/* components */
import IconSvg from '@/components/Icon';
import { ArrowBackSvg } from '@/components/svg/SvgIcons';
import { ScreenHeading } from '@/components/Headings';
import {
    HymnFavouriteCard,
    HymnIndexFavouriteCard,
} from '@/components/HymnIndexCards';

/* Styled RNs */

const SCHEMES_META_DATA: SchemeMetaDataInterface[] = getSchemes();
export const HymnsFavouritesScreen = () => {
    const heading: ScreenHeadingProps = {
        ...APP_HEADING_SUB,
        title: 'Favourites',
    } as ScreenHeadingProps;

    const insets = useSafeAreaInsets();
    const { top, bottom } = insets;

    const [favouriteIndexes, setFavouriteIndexes] = useState<
        HymnIndexInterface[]
    >([]);

    useFocusEffect(
        useCallback(() => {
            setFavouriteIndexes(getFavouriteHymnsIndexes());
        }, []),
    );

    return (
        <View
            className="flex-1 gap-y-6 p-2 bg-white"
            style={{ paddingTop: top + 8 }}>
            <View className="flex-row items-center gap-x-2 px-1">
                {heading.mode === 'sub' && (
                    <Pressable
                        onPress={() => {
                            if (router.canGoBack()) router.back();
                            else router.push('/(tabs)');
                        }}
                        className="shrink-0 flex-row items-center justify-center size-8">
                        <IconSvg
                            className="rounded-full items-center justify-center size-8"
                            iconClassName="size-8 text-indigo-800"
                            Icon={ArrowBackSvg}
                        />
                    </Pressable>
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
                <View className="flex-1">
                    <FlatList
                        data={favouriteIndexes}
                        keyExtractor={(item) => item.ordinal.toString()}
                        renderItem={({ item, index }) => (
                            <HymnFavouriteCard
                                hymn={item}
                                first={index === 0}
                                last={index === favouriteIndexes.length - 1}
                                scheme={
                                    SCHEMES_META_DATA[
                                        item.ordinal % SCHEMES_META_DATA.length
                                    ].scheme
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

            <View className="shrink-0 h-9" />
        </View>
    );
};

export default HymnsFavouritesScreen;
