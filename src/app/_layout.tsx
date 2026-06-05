import { useEffect } from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SplashScreen, Stack } from 'expo-router';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import '@/global.css';

import useAppFonts from '@/hooks/useAppFonts';
import { useAuth } from '@/hooks/useAuth';
import { init } from '@/services/hymns.service';

const queryClient = new QueryClient();

function RootLayoutNav() {
    return <Stack screenOptions={{ headerShown: false }} />;
}

export default function RootLayout() {
    const [isFontsLoaded] = useAppFonts();
    // const { isAuthInitializing } = useAuth();

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
