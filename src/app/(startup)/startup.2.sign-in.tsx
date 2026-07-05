/* react, react-native, expo */
import { useEffect } from 'react';
import { Platform, Pressable, StyleSheet, Text, View } from 'react-native';
import { router } from 'expo-router';

/* react-native-... */
import { useSafeAreaInsets } from 'react-native-safe-area-context';

/* nativewind */

/* 3rd party libs */
import appleAuth from '@invertase/react-native-apple-authentication';

/* constants & utilities */
import { APP_NAME } from '@/constants/app.constants';
import { START_UP_SCREENS } from '@/constants/startup.constants';

/* custom defined hooks */
import { useAuth } from '@/hooks/useAuth';
import { useAuthSignOut } from '@/hooks/useAuthSignOut';
import { useAuthApple } from '@/hooks/useAuthApple';

/* services */

/* components */
import IconSvg from '@/components/Icon';
import {
    AppleSvg,
    GoogleAndroidFallbackSvg,
    GoogleSvg,
} from '@/components/svg/SvgSocialIcons';
import { StartUpIndicator } from '@/components/StartUpIndicator';
import { useAuthGoogle } from '@/hooks/useAuthGoogle';

const GoogleIconSvg =
    Platform.OS === 'android' ? GoogleAndroidFallbackSvg : GoogleSvg;

const StartUpSignInScreen = () => {
    const insets = useSafeAreaInsets();
    const { top, bottom } = insets;

    const startUpScreenIndex: number = 1;

    const { user, isLoading: isAuthLoading } = useAuth();
    const { signOut, loading: isSignOutLoading } = useAuthSignOut();

    const {
        signInWithGoogle,
        isLoading: isGoogleAuthLoading,
        error: googleError,
    } = useAuthGoogle();
    const {
        signInWithApple,
        isLoading: isAppleAuthLoading,
        error: appleError,
    } = useAuthApple();

    useEffect(() => {
        if (user) {
            router.replace('/(startup)/startup.3.setup');
        }
    }, [user]);

    return (
        <View
            className="flex-1 gap-y-4 p-0 bg-indigo-600"
            style={{ paddingTop: top + 8, paddingBottom: bottom + 24 }}>
            <View className="shrink-0 items-center justify-center gap-y-1 px-4">
                <View className="gap-y-0.5">
                    <Text className="font-googlesans-regular text-center text-2xl text-white">
                        {APP_NAME}
                    </Text>

                    <Text className="font-googlesans-regular text-center text-base text-white line-clamp-1 text-ellipsis">
                        Sign in to continue
                    </Text>
                </View>
            </View>

            <View className="flex-1 items-center justify-center gap-y-6">
                <Pressable
                    onPress={signInWithGoogle}
                    disabled={isGoogleAuthLoading}
                    className="flex-row items-center justify-center gap-3 border border-indigo-400 rounded-xl py-3 w-sm bg-indigo-800 shadow-2xl">
                    <IconSvg
                        className="items-center justify-center size-8"
                        iconClassName="size-8 text-indigo-50"
                        Icon={GoogleIconSvg}
                    />

                    <Text className="font-googlesans-medium text-base text-indigo-50">
                        {isGoogleAuthLoading
                            ? 'Signing in...'
                            : 'Continue with Google'}
                    </Text>
                </Pressable>

                {/* Apple requires a specific button style to comply with App Store guidelines */}
                {appleAuth.isSupported && (
                    <>
                        {/*
                        <View className="rounded-md w-full">
                            <AppleButton
                                buttonStyle={AppleButton.Style.WHITE_OUTLINE}
                                buttonType={AppleButton.Type.CONTINUE}
                                style={styles.appleButton}
                                onPress={signInWithApple}
                            />
                        </View>
                        */}

                        <Pressable
                            onPress={signInWithApple}
                            disabled={isAppleAuthLoading}
                            className="flex-row items-center justify-center gap-3 border border-white rounded-xl py-3 w-sm bg-white shadow-2xl">
                            <IconSvg
                                className="items-center justify-center size-8"
                                iconClassName="size-8 text-slate-950"
                                Icon={AppleSvg}
                            />
                            <Text className="font-googlesans-medium text-base text-slate-950">
                                {isAppleAuthLoading
                                    ? 'Signing in...'
                                    : 'Continue with Apple'}
                            </Text>
                        </Pressable>
                    </>
                )}
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

export default StartUpSignInScreen;

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
