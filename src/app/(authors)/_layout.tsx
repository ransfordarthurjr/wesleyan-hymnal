import { Stack } from 'expo-router';

export const unstable_settings = {
    initialRouteName: 'authors',
};

export default function RootLayout() {
    return (
        <Stack
            initialRouteName="authors"
            screenOptions={{ headerShown: false }}
        />
    );
}
