import { useEffect } from 'react';
import { SplashScreen, Stack } from 'expo-router';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import '@/global.css';

import useAppFonts from '@/hooks/useAppFonts';
import { useAuth } from '@/hooks/useAuth';

const queryClient = new QueryClient();

function RootLayoutNav() {
    return <Stack screenOptions={{ headerShown: false }} />;
}

export default function RootLayout() {
    const [isFontsLoaded] = useAppFonts();
    // const { isAuthInitializing } = useAuth();

    useEffect(() => {
        if (isFontsLoaded) SplashScreen.hideAsync();
    }, [isFontsLoaded]);

    if (!isFontsLoaded) {
        return null;
    }

    return (
        <QueryClientProvider client={queryClient}>
            <RootLayoutNav />
        </QueryClientProvider>
    );
}
