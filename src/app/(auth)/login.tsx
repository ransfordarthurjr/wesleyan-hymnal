import { useEffect } from 'react';
import {
    Button,
    Platform,
    Text,
    StyleSheet,
    View,
    Pressable,
} from 'react-native';
import { SafeAreaView as ReactNativeSafeAreaView } from 'react-native-safe-area-context';
import appleAuth, {
    AppleButton,
} from '@invertase/react-native-apple-authentication';
import { ImageBackground } from 'expo-image';
import { router } from 'expo-router';

import { styled } from 'nativewind';

import { generateRandomMathNumber } from '@/utils/utility';

import { useAuth } from '@/hooks/useAuth';
import { useAuthGoogle } from '@/hooks/useAuthGoogle';
import { useAuthApple } from '@/hooks/useAuthApple';

import IconSvg from '@/components/Icon';

import { AppleSvg, GoogleSvg } from '@/components/svg/SvgSocialIcons';
import { BACKGROUND_IMAGES } from '@/constants/auth.constants';

const SafeAreaView = styled(ReactNativeSafeAreaView);
const LoginScreen = () => {
    const { user, isAuthInitializing } = useAuth();
    const {
        signInWithGoogle,
        loading: googleLoading,
        error: googleError,
    } = useAuthGoogle();
    const {
        signInWithApple,
        loading: appleLoading,
        error: appleError,
    } = useAuthApple();

    useEffect(() => {
        if (user) {
            router.push('/(tabs)');
        }
    }, [user]);

    const imageIndex: number = generateRandomMathNumber(
        0,
        BACKGROUND_IMAGES.length - 1,
    );
    const blur: number = 10;

    return (
        <ImageBackground
            contentFit="cover"
            source={BACKGROUND_IMAGES[2]}
            style={styles.background}
            blurRadius={blur}>
            <View className="flex-1 bg-transparent">
                <SafeAreaView className="flex-1 gap-y-16 p-4 bg-white/90">
                    <View className="flex-row items-center justify-center">
                        <Text className="font-literata-mediumitalic text-3xl text-indigo-900">
                            Wesleyan Hymnal
                        </Text>
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
                            disabled={googleLoading}
                            className="flex-row items-center justify-center gap-3 border border-indigo-400 rounded-xl py-3 bg-white">
                            <IconSvg
                                className="items-center justify-center size-8"
                                iconClassName="size-8"
                                Icon={GoogleSvg}
                            />
                            <Text className="font-googlesans-medium text-base text-slate-900">
                                {googleLoading
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
                                    disabled={appleLoading}
                                    className="flex-row items-center justify-center gap-3 border border-indigo-400 rounded-xl py-3 bg-white">
                                    <IconSvg
                                        className="items-center justify-center size-8"
                                        iconClassName="size-8 text-slate-800"
                                        Icon={AppleSvg}
                                    />
                                    <Text className="font-googlesans-medium text-base text-slate-900">
                                        {appleLoading
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
