import { useEffect } from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SplashScreen, Stack } from 'expo-router';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Toast from 'react-native-toast-message';

import '@/global.css';

import useAppFonts from '@/hooks/useAppFonts';
import { init } from '@/services/hymns.service';

import { CustomToastConfig } from '@/components/ToastConfig';

const queryClient = new QueryClient();

function RootLayoutNav() {
    return (
        <>
            <Stack screenOptions={{ headerShown: false }} />
            <Toast config={CustomToastConfig} />
        </>
    );
}

export default function RootLayout() {
    const [isFontsLoaded] = useAppFonts();

    useEffect(() => {
        if (isFontsLoaded) SplashScreen.hideAsync();

        (async () => {
            await init();
        })();
    }, [isFontsLoaded]);

    if (!isFontsLoaded) {
        return null;
    }

    return (
        <QueryClientProvider client={queryClient}>
            <GestureHandlerRootView>
                <RootLayoutNav />
            </GestureHandlerRootView>
        </QueryClientProvider>
    );
}
