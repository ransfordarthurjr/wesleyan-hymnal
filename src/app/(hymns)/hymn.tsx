import { Pressable, Text, View } from 'react-native';
import { SafeAreaView as ReactNativeSafeAreaView } from 'react-native-safe-area-context';
import { router, useLocalSearchParams } from 'expo-router';

import { styled } from 'nativewind';

import IconSvg from '@/components/Icon';
import { ArrowBackSvg } from '@/components/svg/SvgIcons';
import ScreenHeading from '@/components/ScreenHeading';

const SafeAreaView = styled(ReactNativeSafeAreaView);

const HymnScreen = () => {
    const { ordinal } = useLocalSearchParams<{ ordinal: string }>();
    const number: number = Number(ordinal) || 1;

    return (
        <SafeAreaView className="flex-1 gap-y-6 p-2 bg-white">
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

                <ScreenHeading title="Hymn" />

                <View className="shrink-0 flex-row items-center justify-center size-8"></View>
            </View>

            <View className="flex-1 gap-y-4">
                <Text className="text-2xl font-googlesans-medium text-slate-800">
                    {number}
                </Text>
            </View>
        </SafeAreaView>
    );
};

export default HymnScreen;
