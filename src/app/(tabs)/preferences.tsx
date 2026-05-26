import { View } from 'react-native';
import { SafeAreaView as ReactNativeSafeAreaView } from 'react-native-safe-area-context';

import { styled } from 'nativewind';

import ScreenHeading from '@/components/ScreenHeading';

const SafeAreaView = styled(ReactNativeSafeAreaView);

const PreferencesScreen = () => {
    return (
        <SafeAreaView className="flex-1 gap-y-6 p-2 bg-white">
            <View className="flex-row items-center gap-x-2 px-1">
                <View className="shrink-0 flex-row items-center justify-center size-8"></View>

                <ScreenHeading title="Preferences" mode="sub" />

                <View className="shrink-0 flex-row items-center justify-center size-8"></View>
            </View>

            <View className="flex-1 gap-y-4"></View>

            <View className="shrink-0 h-9"></View>
        </SafeAreaView>
    );
};

export default PreferencesScreen;
