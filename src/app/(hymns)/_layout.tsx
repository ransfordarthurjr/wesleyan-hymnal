import { Stack } from 'expo-router';

export const unstable_settings = {
    initialRouteName: 'hymns-index',
};

export default function RootLayout() {
    return (
        <Stack
            initialRouteName="hymns-index"
            screenOptions={{ headerShown: false }}
        />
    );
}
