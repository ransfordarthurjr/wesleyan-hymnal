import { Text, View } from 'react-native';
import { SafeAreaView as ReactNativeSafeAreaView } from 'react-native-safe-area-context';
import { Link } from 'expo-router';

import { styled } from 'nativewind';

import { cn } from '@/utils/utility';

import IconSvg from '@/components/Icon';
import { FirstLineSvg, NumberIndexSvg } from '@/components/svg/SvgIcons';

import ScreenHeading from '@/components/ScreenHeading';
import HymnOfTheWeekCard from '@/components/HymnOfTheWeekCard';

const SafeAreaView = styled(ReactNativeSafeAreaView);
const HymnsScreen = () => {
    return (
        <SafeAreaView className="flex-1 gap-y-6 p-2 bg-white">
            <View className="flex-row items-center gap-x-2 px-1">
                <View className="shrink-0 flex-row items-center justify-center size-8"></View>

                <ScreenHeading title="Hymns" mode="sub" />

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
                                Icon={FirstLineSvg}
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
                    ordinal={1}
                    firstLine="O for a thousand tongues to sing O"
                    stanzas={8}
                    author="Charles Wesley"
                />

                <View className="flex-1 bg-slate-100">
                    {/* Favourites */}
                    <Text className="font-googlesans-semibold text-lgA text-slate-800">
                        Favourites
                    </Text>
                </View>
            </View>

            <View className="shrink-0 h-9"></View>
        </SafeAreaView>
    );
};

export default HymnsScreen;
