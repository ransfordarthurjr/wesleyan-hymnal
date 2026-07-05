import { Stack } from 'expo-router';

export const unstable_settings = {
    initialRouteName: 'profile',
};

export default function RootLayout() {
    return (
        <Stack
            initialRouteName="profile"
            screenOptions={{ headerShown: false }}
        />
    );
}
