import { SplashScreen, Stack } from 'expo-router';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import '@/global.css';

import useAppFonts from '@/hooks/useAppFonts';
import { use, useEffect } from 'react';

const queryClient = new QueryClient();
// 1. Separate navigation context so Providers mount first
function RootLayoutNav() {
    return <Stack screenOptions={{ headerShown: false }} />;
}

export default function RootLayout() {
    const [fontsLoaded] = useAppFonts();

    useEffect(() => {
        if (fontsLoaded) SplashScreen.hideAsync();
    });

    if (!fontsLoaded) {
        // @Todo create a loading screen
        return null;
    }

    return (
        <QueryClientProvider client={queryClient}>
            <RootLayoutNav />
        </QueryClientProvider>
    );
}
