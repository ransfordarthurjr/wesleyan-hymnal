/* react, react-native, expo */
import { useRef } from 'react';
import { Alert, FlatList, Pressable, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import ReanimatedSwipeable, {
    SwipeableMethods,
} from 'react-native-gesture-handler/ReanimatedSwipeable';
import Animated, {
    interpolate,
    SharedValue,
    useAnimatedStyle,
} from 'react-native-reanimated';
import Toast from 'react-native-toast-message';

import { router } from 'expo-router';

/* constants & utilities */
import {
    APP_HEADING_SUB,
    HYMNS_FAVOURITES_ORDER_OPTIONS,
} from '@/constants/app.constants';
import {
    HymnIndexInterface,
    SchemeMetaDataInterface,
    ScreenHeadingProps,
} from '@/types/app.types';
import { cn, getSchemes } from '@/utils/utility';

/* services */
import { getOrderingIcon } from '@/services/hymns.service';

/* custom defined hooks */
import { useHymnsFavourites } from '@/hooks/useHymnsFavourites';

/* components */
import IconSvg from '@/components/Icon';
import {
    ArrowBackSvg,
    DeleteAllSvg,
    DeleteSvg,
    HeartSvg,
} from '@/components/svg/SvgIcons';
import { ScreenHeading, SectionHeading } from '@/components/Headings';
import { HymnFavouriteCard } from '@/components/HymnIndexCards';

const SCHEMES_META_DATA: SchemeMetaDataInterface[] = getSchemes();

export const HymnsFavouritesScreen = () => {
    const heading: ScreenHeadingProps = {
        ...APP_HEADING_SUB,
        title: 'Favourites',
    } as ScreenHeadingProps;

    const { top, bottom } = useSafeAreaInsets();

    const { favouriteIndexes, order, removeAllHymns, removeHymn, setOrder } =
        useHymnsFavourites();

    const handleOrderAndCycleToNextOrder = () => {
        const currentIndex = HYMNS_FAVOURITES_ORDER_OPTIONS.findIndex(
            (opt) => opt.value === order,
        );
        const nextIndex =
            (currentIndex + 1) % HYMNS_FAVOURITES_ORDER_OPTIONS.length;

        setOrder(HYMNS_FAVOURITES_ORDER_OPTIONS[nextIndex].value);
    };

    const handleRemoveAll = () => {
        Alert.alert(
            'Remove All Favourites',
            'All favourites will be removed.',
            [
                {
                    text: 'Remove All',
                    style: 'destructive',
                    onPress: () => {
                        removeAllHymns();

                        Toast.show({
                            type: 'toaster',
                            text1: 'All favourites have been removed',
                            props: { scheme: 'rose', icon: DeleteAllSvg },
                        });
                    },
                },
                { text: 'Cancel', style: 'cancel' },
            ],
        );
    };

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

                <View className="shrink-0 flex-row items-center justify-center size-8" />
            </View>

            <View className="flex-1 gap-y-2 pt-2">
                <View className="flex-row items-center justify-between">
                    <View></View>

                    {favouriteIndexes.length !== 0 && (
                        <View className="shrink-0 flex-row items-center gap-x-8 px-1">
                            <Pressable
                                onPress={() => handleRemoveAll()}
                                className="shrink-0 flex-row items-center justify-center">
                                <IconSvg
                                    className="items-center justify-center size-6"
                                    iconClassName="size-6 text-rose-900"
                                    Icon={DeleteAllSvg}
                                />
                            </Pressable>

                            <Pressable
                                onPress={() => handleOrderAndCycleToNextOrder()}
                                className="shrink-0 flex-row items-center justify-center">
                                <IconSvg
                                    className="items-center justify-center size-6"
                                    iconClassName={cn('size-6 text-indigo-900')}
                                    Icon={getOrderingIcon(order)}
                                />
                            </Pressable>
                        </View>
                    )}
                </View>

                {favouriteIndexes.length === 0 ? (
                    <FavouritesEmptyState />
                ) : (
                    <FlatList
                        data={favouriteIndexes}
                        keyExtractor={(item) => item.ordinal.toString()}
                        renderItem={({ item, index }) => (
                            <SwipeableHymnRow
                                item={item}
                                index={index}
                                total={favouriteIndexes.length}
                                onDelete={removeHymn}
                            />
                        )}
                        ItemSeparatorComponent={() => <View className="h-1" />}
                        showsVerticalScrollIndicator={false}
                        contentContainerStyle={{ paddingBottom: bottom + 24 }}
                    />
                )}
            </View>

            <View className="shrink-0 h-9" />
        </View>
    );
};

const DeleteAction = ({
    dragX,
    onDelete,
}: {
    dragX: SharedValue<number>;
    onDelete: () => void;
}) => {
    const animatedStyle = useAnimatedStyle(() => ({
        transform: [
            {
                scale: interpolate(
                    dragX.value,
                    [-80, -40, 0],
                    [1, 0.9, 0.7],
                    'clamp',
                ),
            },
        ],
        opacity: interpolate(dragX.value, [-60, -20], [1, 0], 'clamp'),
    }));

    return (
        <Pressable
            onPress={onDelete}
            className="items-center justify-center w-20 bg-transparent">
            <Animated.View style={animatedStyle}>
                <IconSvg
                    className="items-center justify-center size-10"
                    iconClassName="size-8 text-rose-900"
                    Icon={DeleteSvg}
                />
            </Animated.View>
        </Pressable>
    );
};

const SwipeableHymnRow = ({
    item,
    index,
    total,
    onDelete,
}: {
    item: HymnIndexInterface;
    index: number;
    total: number;
    onDelete: (ordinal: number) => void;
}) => {
    const swipeableRef = useRef<SwipeableMethods>(null);

    const renderRightActions = (
        _progress: SharedValue<number>,
        dragX: SharedValue<number>,
    ) => (
        <DeleteAction
            dragX={dragX}
            onDelete={() => {
                swipeableRef.current?.close();
                onDelete(item.ordinal);
            }}
        />
    );

    return (
        <ReanimatedSwipeable
            ref={swipeableRef}
            renderRightActions={renderRightActions}
            rightThreshold={40}
            overshootRight={false}
            friction={2}>
            <HymnFavouriteCard
                hymn={item}
                first={index === 0}
                last={index === total - 1}
                scheme={
                    SCHEMES_META_DATA[item.ordinal % SCHEMES_META_DATA.length]
                        .scheme
                }
            />
        </ReanimatedSwipeable>
    );
};

export default HymnsFavouritesScreen;

export const FavouritesEmptyState = () => (
    <View className="flex-1 items-center justify-center gap-y-4">
        <View className="items-center justify-center size-16 rounded-full bg-rose-50">
            <IconSvg
                className="items-center justify-center size-12"
                iconClassName="size-10 text-rose-200"
                Icon={HeartSvg}
            />
        </View>
        <View className="items-center gap-y-1">
            <Text className="font-googlesans-medium text-base text-slate-950">
                No favourites yet
            </Text>
            <Text className="font-googlesans-regular text-sm text-slate-500 text-center px-8">
                Hymns you favourite will appear here
            </Text>
        </View>
    </View>
);
