import { useMemo, useRef, useState } from 'react';
import { FlatList, Pressable, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { router, useLocalSearchParams } from 'expo-router';
import { TextInput as ReactNativeTextInput } from 'react-native';

import { styled } from 'nativewind';

import { APP_HEADING_SUB } from '@/constants/app.constants';
import {
    HymnIndexInterface,
    HymnIndexModeType,
    HymnIndexSchemeType,
    ScreenHeadingProps,
} from '@/types/app.types';

import { cn } from '@/utils/utility';
import { getIndexes } from '@/services/hymns.service';

import IconSvg from '@/components/Icon';
import {
    ArrowBackSvg,
    FirstLineIndexSvg,
    NumberIndexSvg,
    SearchSvg,
} from '@/components/svg/SvgIcons';
import { ScreenHeading } from '@/components/Headings';
import {
    HymnIndexFirstLineCard,
    HymnIndexGridCard,
} from '@/components/HymnIndexCards';

const TextInput = styled(ReactNativeTextInput);
const HymnsIndexScreen = () => {
    const heading: ScreenHeadingProps = {
        ...APP_HEADING_SUB,
        title: 'Hymns Index',
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

    const { mode } = useLocalSearchParams<{
        mode: HymnIndexModeType;
    }>();

    const [searchQuery, setSearchQuery] = useState('');
    const [scrollPercent, setScrollPercent] = useState(0);
    const [indexMode, setIndexMode] = useState<HymnIndexModeType>(
        mode ?? 'list',
    );
    const [searchIconColor, setSearchIconColor] =
        useState<string>('text-indigo-400');

    const searchInputRef = useRef<ReactNativeTextInput>(null);

    const hymnsIndexes: HymnIndexInterface[] = useMemo(() => getIndexes(), []);

    const filteredIndexes = searchQuery.trim()
        ? hymnsIndexes.filter((hymn) => {
              const q = searchQuery.toLowerCase();
              return (
                  hymn.ordinal.toString().includes(q) ||
                  hymn.preview?.toLowerCase().includes(q)
              );
          })
        : hymnsIndexes;

    const handleSearchChange = (text: string) => {
        const value = indexMode === 'grid' ? text.replace(/[^0-9]/g, '') : text;
        setSearchQuery(value);

        setScrollPercent(0);
    };

    const handleScroll = (event: any) => {
        const { contentOffset, contentSize, layoutMeasurement } =
            event.nativeEvent;
        const scrollable = contentSize.height - layoutMeasurement.height;
        const percent =
            scrollable > 0 ? (contentOffset.y / scrollable) * 100 : 0;
        setScrollPercent(Math.min(Math.max(percent, 0), 100));
    };

    const handleToggleMode = () => {
        setIndexMode(indexMode === 'grid' ? 'list' : 'grid');

        setSearchQuery('');
        setScrollPercent(0);
    };

    return (
        <View
            className="flex-1 gap-y-6 p-2 bg-white"
            style={{ paddingTop: top + 8 }}>
            <View className="flex-row items-center gap-x-2 px-1">
                <Pressable
                    onPress={() => {
                        if (router.canGoBack()) router.back();
                        else router.push('/(tabs)');
                    }}
                    className="shrink-0 flex-row items-center justify-center">
                    <IconSvg
                        className="rounded-full items-center justify-center size-8"
                        iconClassName="size-8 text-indigo-800"
                        Icon={ArrowBackSvg}
                    />
                </Pressable>

                <ScreenHeading
                    title={heading.title}
                    mode={heading.mode}
                    size={heading.size}
                    justify={heading.justify}
                />

                <View className="shrink-0 flex-row items-center justify-center size-8"></View>
            </View>

            <View className="px-2 gap-y-0.5">
                <Pressable
                    onPress={() => searchInputRef.current?.focus()}
                    className="flex-row items-center gap-x-4 border border-indigo-400 rounded-md px-4 py-1 bg-indigo-200">
                    <View className="flex-1 flex-row">
                        <TextInput
                            ref={searchInputRef}
                            placeholder={
                                indexMode === 'grid'
                                    ? 'Search Number Index...'
                                    : 'Search First Line Index...'
                            }
                            maxLength={32}
                            className="font-googlesans-semibold text-xl text-indigo-900 placeholder:font-googlesans-regular placeholder:text-lg  placeholder:text-indigo-400"
                            keyboardType={
                                indexMode === 'grid' ? 'number-pad' : 'default'
                            }
                            value={searchQuery}
                            onChangeText={handleSearchChange}
                            onFocus={() => {
                                setSearchIconColor('text-indigo-600');
                            }}
                            onBlur={() => {
                                setSearchIconColor('text-indigo-400');
                            }}
                        />
                    </View>
                    <IconSvg
                        className="shrink-0 rounded-full items-center justify-center size-12"
                        iconClassName={cn('size-8', searchIconColor)}
                        Icon={SearchSvg}
                    />
                </Pressable>
                <View className="px-0.5">
                    <View className="flex flex-row items-center rounded-full h-1 w-full bg-slate-200">
                        <View
                            id="percentage-scroll"
                            className="flex flex-row rounded-full h-1 bg-indigo-900"
                            style={{ width: `${scrollPercent}%` }}></View>
                    </View>
                </View>
            </View>

            <View className="flex-1 gap-y-2">
                <View className="flex-row items-end justify-between">
                    <Text className="shrink-0 font-googlesans-semibold text-lg text-indigo-900">
                        {indexMode === 'grid'
                            ? 'Number Index'
                            : 'First Line Index'}
                    </Text>

                    <Pressable
                        onPress={() => handleToggleMode()}
                        className="shrink-0 flex-row items-center justify-center">
                        {indexMode === 'grid' ? (
                            <IconSvg
                                className="rounded-full items-center justify-center size-8"
                                iconClassName="size-8 text-slate-800"
                                Icon={NumberIndexSvg}
                            />
                        ) : (
                            <IconSvg
                                className="rounded-full items-center justify-center size-8"
                                iconClassName="size-8 text-slate-800"
                                Icon={FirstLineIndexSvg}
                            />
                        )}
                    </Pressable>
                </View>

                <View className="flex-1">
                    <FlatList
                        key={indexMode}
                        onScroll={handleScroll}
                        scrollEventThrottle={16}
                        data={filteredIndexes}
                        keyExtractor={(item) => item.ordinal.toString()}
                        numColumns={indexMode === 'grid' ? 4 : 1}
                        renderItem={({ item, index }) =>
                            indexMode === 'grid' ? (
                                <View className="flex-1 flex-row px-2 pb-1">
                                    <HymnIndexGridCard
                                        hymn={item}
                                        first={index === 0}
                                        last={
                                            index === filteredIndexes.length - 1
                                        }
                                        scheme={
                                            schemes[
                                                item.ordinal % schemes.length
                                            ]
                                        }
                                    />
                                </View>
                            ) : (
                                <HymnIndexFirstLineCard
                                    hymn={item}
                                    first={index === 0}
                                    last={index === filteredIndexes.length - 1}
                                    scheme={
                                        schemes[item.ordinal % schemes.length]
                                    }
                                />
                            )
                        }
                        ItemSeparatorComponent={() => (
                            <View className="h-1"></View>
                        )}
                        showsVerticalScrollIndicator={false}
                        contentContainerStyle={{ paddingBottom: bottom }}
                    />
                </View>
            </View>
        </View>
    );
};

export default HymnsIndexScreen;
