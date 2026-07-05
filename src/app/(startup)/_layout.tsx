import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

export const unstable_settings = {
    initialRouteName: 'startup',
};

export default function RootLayout() {
    return (
        <>
            <StatusBar style="light" />
            <Stack
                initialRouteName="startup"
                screenOptions={{ headerShown: false }}
            />
        </>
    );
}
