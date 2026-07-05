/* react, react-native, expo */
import { useEffect } from 'react';
import { Platform, Pressable, StyleSheet, Text, View } from 'react-native';
import { router } from 'expo-router';
import { ImageBackground } from 'expo-image';

/* react-native-... */
import { SafeAreaView as ReactNativeSafeAreaView } from 'react-native-safe-area-context';

/* nativewind */
import { styled } from 'nativewind';

/* 3rd party libs */

/* constants & utilities */
import { APP_HEADING_MAIN } from '@/constants/app.constants';
import { ScreenHeadingProps } from '@/types/app.types';
import { generateRandomMathNumber } from '@/utils/utility';
import { BACKGROUND_IMAGES } from '@/constants/auth.constants';

/* custom defined hooks */
import { useAuthApple } from '@/hooks/useAuthApple';
import { useAuthGoogle } from '@/hooks/useAuthGoogle';
import { useAuth } from '@/hooks/useAuth';
import appleAuth from '@invertase/react-native-apple-authentication';

/* services */

/* components */
import IconSvg from '@/components/Icon';
import {
    AppleSvg,
    GoogleAndroidFallbackSvg,
    GoogleSvg,
} from '@/components/svg/SvgSocialIcons';
import { ScreenHeading } from '@/components/Headings';

/* Styled RNs */
const SafeAreaView = styled(ReactNativeSafeAreaView);

const GoogleIconSvg =
    Platform.OS === 'android' ? GoogleAndroidFallbackSvg : GoogleSvg;

const LoginScreen = () => {
    const heading: ScreenHeadingProps = {
        ...APP_HEADING_MAIN,
    } as ScreenHeadingProps;

    const blur: number = 10;
    const { user, isLoading: isAuthLoading } = useAuth();

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
            router.replace('/(tabs)');
        }
    }, [user]);

    return (
        <ImageBackground
            contentFit="cover"
            source={BACKGROUND_IMAGES[2]}
            style={styles.background}
            blurRadius={blur}>
            <View className="flex-1 bg-transparent">
                <SafeAreaView className="flex-1 gap-y-16 p-4 bg-white/90">
                    <View className="flex-row items-center gap-x-2 px-1">
                        <View className="shrink-0 flex-row items-center justify-center size-8"></View>

                        <ScreenHeading
                            title={heading.title}
                            mode={heading.mode}
                            size={heading.size}
                            justify={heading.justify}
                        />

                        <View className="shrink-0 flex-row items-center justify-center size-8"></View>
                    </View>

                    <View className="gap-y-1">
                        <Text className="flex-row gap-x-2 font-googlesans-regular text-2xl text-slate-900">
                            <Text>Hello, </Text>

                            <Text className="font-googlesans-medium">
                                Welcome back!
                            </Text>
                        </Text>

                        <Text className="font-googlesans-regular text-lg text-slate-600">
                            We're happy to have you.
                        </Text>
                    </View>

                    <View className="flex-1 justify-center gap-y-6 px-2">
                        <Pressable
                            onPress={signInWithGoogle}
                            disabled={isGoogleAuthLoading}
                            className="flex-row items-center justify-center gap-3 border border-indigo-400 rounded-xl py-3 bg-white">
                            <IconSvg
                                className="items-center justify-center size-8"
                                iconClassName="size-8 text-rose-600"
                                Icon={GoogleIconSvg}
                            />
                            <Text className="font-googlesans-medium text-base text-slate-900">
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
                                    className="flex-row items-center justify-center gap-3 border border-indigo-400 rounded-xl py-3 bg-white">
                                    <IconSvg
                                        className="items-center justify-center size-8"
                                        iconClassName="size-8 text-slate-800"
                                        Icon={AppleSvg}
                                    />
                                    <Text className="font-googlesans-medium text-base text-slate-900">
                                        {isAppleAuthLoading
                                            ? 'Signing in...'
                                            : 'Continue with Apple'}
                                    </Text>
                                </Pressable>
                            </>
                        )}
                    </View>

                    <View className="flex-1">
                        {googleError && <Text>{googleError.message}</Text>}
                        {appleError && <Text>{appleError.message}</Text>}
                    </View>
                </SafeAreaView>
            </View>
        </ImageBackground>
    );
};

export default LoginScreen;

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
