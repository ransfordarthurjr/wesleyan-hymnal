/* react, react-native, expo */
import { useCallback, useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { router } from 'expo-router';

/* react-native-... */
import { useSafeAreaInsets } from 'react-native-safe-area-context';

/* nativewind */

/* 3rd party libs */

/* constants & utilities */
import { APP_NAME } from '@/constants/app.constants';
import { START_UP_SCREENS } from '@/constants/startup.constants';

/* custom defined hooks */

/* services */
import { init } from '@/services/hymns.service';

/* components */
import IconSvg from '@/components/Icon';
import { ProcessingSvg } from '@/components/svg/SvgIcons';
import { StartUpIndicator } from '@/components/StartUpIndicator';

const StartUpSetupScreen = () => {
    const insets = useSafeAreaInsets();
    const { top, bottom } = insets;

    const startUpScreenIndex: number = 2;

    const [isSetupCompleted, setIsSetupCompleted] = useState<boolean>(false);
    const [setupText, setSetupText] = useState<string>('');

    const loadResources = useCallback(async () => {
        try {
            setSetupText('Setting things up...');

            // TODO: replace with actual resource loading
            const isInitialized = await init();

            setSetupText('Almost done...');
            setIsSetupCompleted(isInitialized);
            router.replace('/(tabs)');
        } catch (error) {
            setSetupText('Something went wrong. Please try again.');
            // start-over
            router.replace('/(startup)/startup');
        }
    }, []);

    useEffect(() => {
        loadResources();
    }, [loadResources]);

    return (
        <View
            className="flex-1 gap-y-4 p-0 bg-indigo-600"
            style={{ paddingTop: top + 8, paddingBottom: bottom + 24 }}>
            <View className="shrink-0 items-center justify-center gap-y-1 px-4">
                <View className="gap-y-0.5">
                    <Text className="font-googlesans-regular text-center text-2xl text-white">
                        {APP_NAME}
                    </Text>
                    <Text className="font-googlesans-regular text-center text-base text-white line-clamp-2 text-ellipsis">
                        Getting things ready...
                    </Text>
                </View>
            </View>
            <View className="flex-1 items-center justify-center gap-y-2">
                {!isSetupCompleted && (
                    <IconSvg
                        className="rounded-full items-center justify-center size-8 animate-spin"
                        iconClassName="size-8 text-indigo-300"
                        Icon={ProcessingSvg}
                    />
                )}
                <Text className="font-googlesans-regular text-center text-base text-white line-clamp-2 text-ellipsis">
                    {setupText}
                </Text>
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

export default StartUpSetupScreen;

const styles = StyleSheet.create({
    background: {
        flex: 1,
        width: '100%',
        height: '100%',
    },
    appleButton: {
        width: '100%',
        height: 45, // Apple recommends minimum 45pt height
    },
});
