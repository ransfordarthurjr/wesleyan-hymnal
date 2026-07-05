import { useEffect } from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SplashScreen, Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Toast from 'react-native-toast-message';
import { FirebaseAuthTypes } from '@react-native-firebase/auth';

import '@/global.css';

import {
    DEFAULT_IS_USER_FIRST_TIME,
    HYMNS_IS_USER_FIRST_TIME_KEY,
} from '@/constants/app.constants';

import useAppFonts from '@/hooks/useAppFonts';
import { useAuth } from '@/hooks/useAuth';

// import { init } from '@/services/hymns.service';
import { mmkv } from '@/services/hymns.mmkv.service';
import { useMMKVBoolean } from 'react-native-mmkv';

import { CustomToastConfig } from '@/components/ToastConfig';
import { Platform } from 'react-native';

const queryClient = new QueryClient();

type RootLayoutNavProps = {
    isFirstTime: boolean;
    user: FirebaseAuthTypes.User | null;
};

function RootLayoutNav({ isFirstTime, user }: RootLayoutNavProps) {
    const isNotAuthenticated = !isFirstTime && !user;
    const isAuthenticated = !isFirstTime && !!user;

    return (
        <>
            <StatusBar style="dark" />

            <Stack screenOptions={{ headerShown: false }}>
                <Stack.Protected guard={isFirstTime}>
                    <Stack.Screen name="(startup)" />
                </Stack.Protected>

                <Stack.Protected guard={isNotAuthenticated}>
                    <Stack.Screen name="(authenticate)" />
                </Stack.Protected>

                <Stack.Protected guard={isAuthenticated}>
                    <Stack.Screen name="(tabs)" />
                    <Stack.Screen name="(hymns)" />
                    <Stack.Screen name="(canticles)" />
                    <Stack.Screen name="(profile)" />
                    <Stack.Screen name="(preferences)" />
                    <Stack.Screen name="(authors)" />
                </Stack.Protected>
            </Stack>

            <Toast config={CustomToastConfig} />
        </>
    );
}

export default function RootLayout() {
    const [isFontsLoaded] = useAppFonts();
    const { user, isLoading } = useAuth();
    const [isFirstTime = DEFAULT_IS_USER_FIRST_TIME] = useMMKVBoolean(
        HYMNS_IS_USER_FIRST_TIME_KEY,
        mmkv,
    );

    console.log('is-first-time', Platform.OS, isFirstTime);

    useEffect(() => {
        if (isFontsLoaded) SplashScreen.hideAsync();

        /*
        (async () => {
            if (!!user) await init(user);
        })();
        */
    }, [isFontsLoaded]);

    if (!isFontsLoaded || isLoading) {
        return null;
    }

    return (
        <QueryClientProvider client={queryClient}>
            <GestureHandlerRootView>
                <RootLayoutNav isFirstTime={isFirstTime} user={user} />
            </GestureHandlerRootView>
        </QueryClientProvider>
    );
}
