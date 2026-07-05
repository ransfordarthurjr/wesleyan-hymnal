import { Stack } from 'expo-router';

export const unstable_settings = {
    initialRouteName: 'authenticate',
};

export default function RootLayout() {
    return (
        <Stack
            initialRouteName="authenticate"
            screenOptions={{ headerShown: false }}
        />
    );
}
