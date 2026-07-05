/* react, react-native, expo */
import { useState } from 'react';
import {
    Pressable,
    Text,
    TextInput as ReactNativeTextInput,
    View,
} from 'react-native';
import { router } from 'expo-router';

/* react-native-... */
import {
    SafeAreaView as ReactNativeSafeAreaView,
    useSafeAreaInsets,
} from 'react-native-safe-area-context';

/* nativewind */
import { styled } from 'nativewind';

/* 3rd party libs */

/* constants & utilities */
import { APP_HEADING_SUB, APP_HEADING_TAB } from '@/constants/app.constants';
import { ScreenHeadingProps } from '@/types/app.types';
import { cn } from '@/utils/utility';

/* custom defined hooks */

/* services */

/* components */
import IconSvg from '@/components/Icon';
import { ArrowBackSvg } from '@/components/svg/SvgIcons';
import { ScreenHeading } from '@/components/Headings';

/* Styled RNs */
const SafeAreaView = styled(ReactNativeSafeAreaView);
const TextInput = styled(ReactNativeTextInput);

export const _TplWithoutSafeAreaViewScreen = () => {
    const heading: ScreenHeadingProps = {
        ...APP_HEADING_TAB,
        title: 'TPL.1',
    } as ScreenHeadingProps;

    const insets = useSafeAreaInsets();
    const { top, bottom } = insets;

    const [myState, setMyState] = useState<string>('');

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
                <Text className="">w/o SafeAreaView</Text>
            </View>

            <View className="shrink-0 h-9" />
        </View>
    );
};

export const _TplWithSafeAreaViewScreen = () => {
    const heading: ScreenHeadingProps = {
        ...APP_HEADING_TAB,
        title: 'TPL.2',
    } as ScreenHeadingProps;

    const insets = useSafeAreaInsets();
    const { top, bottom } = insets;

    const [myState, setMyState] = useState<string>('');

    return (
        <SafeAreaView className="flex-1 gap-y-6 p-2 bg-white">
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
                <Text className="">w/ SafeAreaView</Text>
            </View>

            <View className="shrink-0 h-9" />
        </SafeAreaView>
    );
};

export default _TplWithSafeAreaViewScreen;
