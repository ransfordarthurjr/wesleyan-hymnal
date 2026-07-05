/* react, react-native, expo */
import { Pressable, Text, View } from 'react-native';
import { router } from 'expo-router';

/* react-native-... */
import { useSafeAreaInsets } from 'react-native-safe-area-context';

/* nativewind */

/* 3rd party libs */

/* constants & utilities */
import { APP_NAME, APP_START_UP_TEXT } from '@/constants/app.constants';
import { START_UP_SCREENS } from '@/constants/startup.constants';

/* custom defined hooks */

/* services */

/* components */
import IconSvg from '@/components/Icon';
import { HymnSvg } from '@/components/svg/SvgIcons';
import { StartUpIndicator } from '@/components/StartUpIndicator';

const StartUpWelcomeScreen = () => {
    const insets = useSafeAreaInsets();
    const { top, bottom } = insets;

    const startUpScreenIndex: number = 0;

    const proceedToSignIn = () => {
        router.push('/(startup)/startup.2.sign-in');
    };

    return (
        <View
            className="flex-1 gap-y-4 p-0 bg-indigo-600"
            style={{ paddingTop: top + 8, paddingBottom: bottom + 24 }}>
            <View className="flex-1 items-center justify-center gap-y-1 px-4">
                <IconSvg
                    className="rounded-full items-center justify-center size-16 animate-bounce"
                    iconClassName="size-16 text-white"
                    Icon={HymnSvg}
                />

                <View className="gap-y-1">
                    <Text className="font-literata-italic text-center leading-6 text-4xl text-white">
                        {APP_NAME}
                    </Text>

                    <Text className="px-2 font-googlesans-regular text-base text-white line-clamp-1 text-ellipsis">
                        {APP_START_UP_TEXT}
                    </Text>
                </View>
            </View>

            <View className="shrink-0 items-center justify-center gap-y-2">
                <Pressable
                    onPress={proceedToSignIn}
                    className="flex-row items-center justify-center gap-3 border border-indigo-400 rounded-xl py-3 w-sm bg-indigo-800 shadow-2xl">
                    <IconSvg
                        className="items-center justify-center size-8"
                        iconClassName="size-8 text-indigo-50"
                        Icon={HymnSvg}
                    />
                    <Text className="font-googlesans-medium text-base text-indigo-50">
                        Proceed with Sign In
                    </Text>
                </Pressable>
            </View>

            <View className="shrink-0 h-12 items-center justify-center">
                <View className="flex-row items-center gap-x-2 px-4">
                    {START_UP_SCREENS.map((s, index) => (
                        <StartUpIndicator
                            key={s.id}
                            active={index === startUpScreenIndex}
                            startup={s}
                        />
                    ))}
                </View>
            </View>
        </View>
    );
};

export default StartUpWelcomeScreen;
