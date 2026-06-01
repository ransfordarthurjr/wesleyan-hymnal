import { useCallback, useEffect, useRef, useState } from 'react';
import { FlatList, Pressable, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { router, useLocalSearchParams } from 'expo-router';

import {
    APP_HEADING_MAIN,
    APP_HEADING_SUB,
    PREFERENCES_FONT_SIZE_OPTIONS,
} from '@/constants/app.constants';
import {
    SchemeType,
    HymnInterface,
    ScreenHeadingProps,
    FontSizeOptionInterface,
} from '@/types/app.types';
import { cn } from '@/utils/utility';

import {
    getPreferredStanzaFontFace,
    getPreferredStanzaFontSize,
    setPreferredStanzaFontSize,
} from '@/services/preferences.service';

import {
    getFavouriteHymns,
    getHymn,
    toggleHymnToFavourites,
} from '@/services/hymns.service';

import IconSvg from '@/components/Icon';
import {
    ArrowBackSvg,
    HeartFullSvg,
    HeartSvg,
} from '@/components/svg/SvgIcons';

import { ScreenHeading } from '@/components/Headings';
import { HymnStanzaCardV2 } from '@/components/HymnStanzaCard';

const FONT_SIZE_OPTIONS: FontSizeOptionInterface[] =
    PREFERENCES_FONT_SIZE_OPTIONS as FontSizeOptionInterface[];

const HymnScreen = () => {
    const insets = useSafeAreaInsets();
    const { top, bottom } = insets;

    const { number, scheme } = useLocalSearchParams<{
        number: string;
        scheme: SchemeType;
    }>();
    const ordinal: number = Number(number) || 1;

    const [heading, setHeading] = useState<ScreenHeadingProps>({
        ...APP_HEADING_SUB,
        title: 'Hymn',
        size: 'large',
        justify: 'center',
        themed: true,
    } as ScreenHeadingProps);
    const [isFavourite, setIsFavourite] = useState(false);
    const [hymn, setHymn] = useState<HymnInterface | null>();
    const [scrollPercent, setScrollPercent] = useState(0);
    const [stanzaFontSize, setStanzaFontSize] = useState<string>(
        () => getPreferredStanzaFontSize(), // lazy init — reads MMKV once on mount
    );
    const [stanzaFontFace, setStanzaFontFace] = useState<string>(
        () => getPreferredStanzaFontFace(), // lazy init — reads MMKV once on mount
    );

    useEffect(() => {
        heading.title = `Hymn: ${ordinal}`;

        const favourites: Set<number> = getFavouriteHymns();
        setIsFavourite(favourites.has(ordinal));

        initializeHymn(ordinal);
    }, [ordinal]);

    const initializeHymn = (ordinal: number) => {
        setHymn(getHymn(ordinal));
        setHeading((heading) => ({ ...heading, title: `Hymn: ${ordinal}` }));
        setScrollPercent(0);
    };

    const handleToggleHymnToFavourites = (ordinal: number) => {
        const favourites: Set<number> = toggleHymnToFavourites(ordinal);
        setIsFavourite(favourites.has(ordinal));
    };

    const handleScroll = (event: any) => {
        const { contentOffset, contentSize, layoutMeasurement } =
            event.nativeEvent;
        const scrollable = contentSize.height - layoutMeasurement.height;
        const percent =
            scrollable > 0 ? (contentOffset.y / scrollable) * 100 : 0;
        setScrollPercent(Math.min(Math.max(percent, 0), 100));
    };

    const pointerRef = useRef<number>(
        FONT_SIZE_OPTIONS.findIndex(
            (option) => option.fontSize === getPreferredStanzaFontSize(),
        )!,
    );

    const handleSetPreferredStanzaFontSize = useCallback(() => {
        pointerRef.current =
            (pointerRef.current + 1) % FONT_SIZE_OPTIONS.length;
        const next = FONT_SIZE_OPTIONS[pointerRef.current].fontSize;

        setPreferredStanzaFontSize(next);
        setStanzaFontSize(next); // triggers re-render with new size
    }, []);

    /*
    const renderItem = useCallback(
        ({ item }: { item: HymnStanzaType }) => (
            <HymnStanzaCardV2
                stanza={item}
                scheme={scheme}
                stanzaFontSize={stanzaFontSize}
            />
        ),
        [scheme, stanzaFontSize],
    );
    */

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
                    scheme === 'sky' && 'bg-sky-500',
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
                    scheme === 'sky' && 'bg-sky-500',
                )}>
                <Pressable
                    onPress={() => {
                        if (router.canGoBack()) router.back();
                        else router.push('/(hymns)/hymns-index');
                    }}
                    className="shrink-0 flex-row items-center justify-center">
                    <IconSvg
                        className="rounded-full items-center justify-center size-8"
                        iconClassName="size-8 text-indigo-50"
                        Icon={ArrowBackSvg}
                    />
                </Pressable>

                <ScreenHeading
                    title={heading.title}
                    mode={heading.mode}
                    size={heading.size}
                    justify={heading.justify}
                    themed={heading.themed}
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

            <View className="flex-1 gap-y-0 mt-6 px-1">
                <Pressable
                    onPress={() => {
                        handleSetPreferredStanzaFontSize();
                    }}
                    className="shrink-0 flex-row items-center px-2 py-1">
                    <Text
                        className={cn(
                            'font-googlesans-medium text-lg',
                            scheme === 'slate' && 'text-slate-900',
                            scheme === 'red' && 'text-red-900',
                            scheme === 'orange' && 'text-orange-900',
                            scheme === 'green' && 'text-green-900',
                            scheme === 'teal' && 'text-teal-900',
                            scheme === 'cyan' && 'text-cyan-900',
                            scheme === 'blue' && 'text-blue-900',
                            scheme === 'violet' && 'text-violet-900',
                            scheme === 'fuchsia' && 'text-fuchsia-900',
                            scheme === 'rose' && 'text-rose-900',
                            scheme === 'sky' && 'text-sky-900',
                        )}>
                        Author: {hymn?.author}
                    </Text>
                </Pressable>

                <View className="shrink-0">
                    <View
                        className={cn(
                            'flex flex-row items-center rounded-full h-1 w-full',
                            scheme === 'slate' && 'bg-slate-50',
                            scheme === 'red' && 'bg-red-50',
                            scheme === 'orange' && 'bg-orange-50',
                            scheme === 'green' && 'bg-green-50',
                            scheme === 'teal' && 'bg-teal-50',
                            scheme === 'cyan' && 'bg-cyan-50',
                            scheme === 'blue' && 'bg-blue-50',
                            scheme === 'violet' && 'bg-violet-50',
                            scheme === 'fuchsia' && 'bg-fuchsia-50',
                            scheme === 'rose' && 'bg-rose-50',
                            scheme === 'sky' && 'bg-sky-50',
                        )}>
                        <View
                            id="percentage-scroll"
                            className={cn(
                                'flex flex-row rounded-full h-1 ',
                                scheme === 'slate' && 'bg-slate-900',
                                scheme === 'red' && 'bg-red-900',
                                scheme === 'orange' && 'bg-orange-900',
                                scheme === 'green' && 'bg-green-900',
                                scheme === 'teal' && 'bg-teal-900',
                                scheme === 'cyan' && 'bg-cyan-900',
                                scheme === 'blue' && 'bg-blue-900',
                                scheme === 'violet' && 'bg-violet-900',
                                scheme === 'fuchsia' && 'bg-fuchsia-900',
                                scheme === 'rose' && 'bg-rose-900',
                                scheme === 'sky' && 'bg-sky-900',
                            )}
                            style={{ width: `${scrollPercent}%` }}></View>
                    </View>
                </View>

                <View className="flex-1 mt-6">
                    <FlatList
                        onScroll={handleScroll}
                        scrollEventThrottle={16}
                        data={hymn?.stanzas}
                        keyExtractor={(item) => item.stanza.toString()}
                        renderItem={({ item, index }) => (
                            <HymnStanzaCardV2
                                stanza={item}
                                scheme={scheme}
                                stanzaFontSize={stanzaFontSize}
                                stanzaFontFace={stanzaFontFace}
                            />
                        )}
                        ItemSeparatorComponent={() => Separator()}
                        showsVerticalScrollIndicator={false}
                        contentContainerStyle={{ paddingBottom: bottom }}
                    />
                </View>
            </View>
        </View>
    );
};

// Outside HymnScreen, at module level
const Separator = () => <View className="h-1" />;

export default HymnScreen;
