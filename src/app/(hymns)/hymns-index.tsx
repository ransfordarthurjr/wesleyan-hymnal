import { useState } from 'react';
import { View, Pressable, FlatList, TextInput } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { router } from 'expo-router';

import { HymnIndexInterface, HymnIndexSchemeType } from '@/types/app.types';

import { getIndexes } from '@/services/hymns.service';

import IconSvg from '@/components/Icon';
import { ArrowBackSvg, SearchSvg } from '@/components/svg/SvgIcons';
import ScreenHeading from '@/components/ScreenHeading';
import { HymnIndexFirstLineCard } from '@/components/HymnIndexFirstLineCard';

const HymnsIndexScreen = () => {
    const insets = useSafeAreaInsets();
    const { top, bottom } = insets;

    const hymnsIndexes: HymnIndexInterface[] = getIndexes();

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

    const [scrollPercent, setScrollPercent] = useState(0);

    const handleScroll = (event: any) => {
        const { contentOffset, contentSize, layoutMeasurement } =
            event.nativeEvent;
        const scrollable = contentSize.height - layoutMeasurement.height;
        const percent =
            scrollable > 0 ? (contentOffset.y / scrollable) * 100 : 0;
        setScrollPercent(Math.min(Math.max(percent, 0), 100));
    };

    return (
        <View
            className="flex-1 gap-y-6 p-2 bg-white"
            style={{ paddingTop: top + 8 }}>
            <View className="flex-row items-center gap-x-2 px-1">
                <Pressable
                    onPress={() => {
                        if (router.canGoBack()) router.back();
                        else router.push('../(tabs)');
                    }}
                    className="shrink-0 flex-row items-center justify-center">
                    <IconSvg
                        className="rounded-full items-center justify-center size-8"
                        iconClassName="size-8 text-indigo-800"
                        Icon={ArrowBackSvg}
                    />
                </Pressable>

                <ScreenHeading title="Hymns Index" mode="sub" />

                <View className="shrink-0 flex-row items-center justify-center size-8"></View>
            </View>

            <View className="px-2 gap-y-0.5">
                <View className="flex-row items-center gap-x-4 rounded-md px-4 py-1 bg-indigo-900">
                    <View className="flex-1">
                        <TextInput
                            placeholder="Search..."
                            maxLength={32}
                            placeholderTextColor="gray"
                            className="text-white"
                        />
                    </View>
                    <IconSvg
                        className="shrink-0 rounded-full items-center justify-center size-12"
                        iconClassName="size-8 text-indigo-50"
                        Icon={SearchSvg}
                    />
                </View>
                <View className="flex flex-row items-center rounded-full h-1 w-full bg-slate-200">
                    <View
                        id="percentage-scroll"
                        className="flex flex-row rounded-full h-1 bg-indigo-800"
                        style={{ width: `${scrollPercent}%` }}></View>
                </View>
            </View>

            <View className="flex-1">
                <FlatList
                    onScroll={handleScroll}
                    scrollEventThrottle={16}
                    data={hymnsIndexes}
                    keyExtractor={(item) => item.ordinal.toString()}
                    renderItem={({ item, index }) => (
                        <HymnIndexFirstLineCard
                            ordinal={item.ordinal}
                            hymn={item}
                            first={item.ordinal === 1}
                            last={
                                item.ordinal ===
                                hymnsIndexes[hymnsIndexes.length - 1].ordinal
                            }
                            scheme={schemes[item.ordinal % schemes.length]}
                        />
                    )}
                    ItemSeparatorComponent={() => (
                        <View className="h-0.5"></View>
                    )}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{ paddingBottom: bottom }}
                />
            </View>
        </View>
    );
};

export default HymnsIndexScreen;
