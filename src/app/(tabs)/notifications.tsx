/* react, react-native, expo */
import { View } from 'react-native';

/* react-native-... */
import { SafeAreaView as ReactNativeSafeAreaView } from 'react-native-safe-area-context';

/* nativewind */
import { styled } from 'nativewind';

/* 3rd party libs */

/* constants & utilities */
import { APP_HEADING_TAB } from '@/constants/app.constants';
import { ScreenHeadingProps } from '@/types/app.types';

/* custom defined hooks */

/* services */

/* components */
import { ScreenHeading } from '@/components/Headings';

/* Styled RNs */
const SafeAreaView = styled(ReactNativeSafeAreaView);

const NotificationsScreen = () => {
    const heading: ScreenHeadingProps = {
        ...APP_HEADING_TAB,
        title: 'Notifications',
    } as ScreenHeadingProps;

    return (
        <SafeAreaView className="flex-1 gap-y-6 p-2 bg-white">
            <View className="flex-row items-center gap-x-2 px-1">
                {heading.mode === 'sub' && (
                    <View className="shrink-0 flex-row items-center justify-center size-8"></View>
                )}

                <ScreenHeading
                    title={heading.title}
                    mode={heading.mode}
                    size={heading.size}
                    justify={heading.justify}
                />

                <View className="shrink-0 flex-row items-center justify-center size-8"></View>
            </View>

            <View className="flex-1 gap-y-4"></View>

            <View className="shrink-0 h-9"></View>
        </SafeAreaView>
    );
};

export default NotificationsScreen;
