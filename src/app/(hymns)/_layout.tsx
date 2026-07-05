import { Stack } from 'expo-router';

export const unstable_settings = {
    initialRouteName: 'hymns',
};

export default function RootLayout() {
    return (
        <Stack
            initialRouteName="hymns"
            screenOptions={{ headerShown: false }}
        />
    );
}
