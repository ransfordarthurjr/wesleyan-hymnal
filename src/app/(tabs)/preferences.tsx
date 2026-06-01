import { View } from 'react-native';
import { SafeAreaView as ReactNativeSafeAreaView } from 'react-native-safe-area-context';

import { styled } from 'nativewind';

import { APP_HEADING_TAB } from '@/constants/app.constants';
import { ScreenHeadingProps } from '@/types/app.types';

import { getSchemeById } from '@/utils/utility';

import { ScreenHeading } from '@/components/Headings';
import { FontSizeSvg, HeartSvg } from '@/components/svg/SvgIcons';
import { LinkCard } from '@/components/ListCards';

const SafeAreaView = styled(ReactNativeSafeAreaView);

const PreferencesScreen = () => {
    const heading: ScreenHeadingProps = {
        ...APP_HEADING_TAB,
        title: 'Preferences',
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

                <View className="shrink-0 flex-row items-center justify-center size-8" />
            </View>

            <View className="flex-1 gap-y-6">
                <View className="gap-y-0.5">
                    <LinkCard
                        scheme={getSchemeById('sky').scheme}
                        pathname="/(preference)/font"
                        params={{ pref: 'font' }}
                        Icon={FontSizeSvg}
                        title="Font"
                        first={true}
                    />

                    <LinkCard
                        scheme={getSchemeById('fuchsia').scheme}
                        pathname="/(preference)/favourites"
                        params={{ pref: 'font' }}
                        Icon={HeartSvg}
                        title="Favourites"
                        last={true}
                    />
                </View>

                <View id="font-size" className="shrink-0 gap-y-4 px-3"></View>
            </View>

            <View className="shrink-0 h-9" />
        </SafeAreaView>
    );
};

export default PreferencesScreen;
