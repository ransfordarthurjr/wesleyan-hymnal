import { View } from 'react-native';
import { SafeAreaView as ReactNativeSafeAreaView } from 'react-native-safe-area-context';

import { styled } from 'nativewind';

import { APP_HEADING_TAB } from '@/constants/app.constants';
import { ListCardProps, ScreenHeadingProps } from '@/types/app.types';

import { getSchemeById } from '@/utils/utility';

import { ScreenHeading } from '@/components/Headings';
import { FontSizeSvg, HeartSvg, SignOutSvg } from '@/components/svg/SvgIcons';
import { ListCard } from '@/components/ListCards';

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
                    {PREFENCES_SECTION_01.map((pref, index) => {
                        return (
                            <ListCard
                                key={pref.title + '' + index}
                                scheme={pref.scheme}
                                variant={pref.variant}
                                title={pref.title}
                                mode={pref.mode}
                                Icon={pref.Icon}
                                first={index === 0}
                                last={index === PREFENCES_SECTION_01.length - 1}
                            />
                        );
                    })}
                </View>

                <View className="gap-y-0.5">
                    {PREFENCES_SECTION_0X.map((pref, index) => {
                        return (
                            <ListCard
                                key={pref.title + '' + index}
                                scheme={pref.scheme}
                                variant={pref.variant}
                                title={pref.title}
                                mode={pref.mode}
                                Icon={pref.Icon}
                                first={index === 0}
                                last={index === PREFENCES_SECTION_0X.length - 1}
                            />
                        );
                    })}
                </View>

                <View id="font-size" className="shrink-0 gap-y-4 px-3"></View>
            </View>

            <View className="shrink-0 h-9" />
        </SafeAreaView>
    );
};

export default PreferencesScreen;

const PREFENCES_SECTION_01: ListCardProps[] = [
    {
        scheme: getSchemeById('sky').scheme,
        variant: 'solid',
        title: 'Font',
        mode: {
            mode: 'link',
            link: {
                pathname: '/(preference)/font',
                params: { pref: 'font' },
            },
        },
        Icon: FontSizeSvg,
    },
    {
        scheme: getSchemeById('fuchsia').scheme,
        variant: 'solid',
        title: 'Favourites',
        mode: {
            mode: 'link',
            link: {
                pathname: '/(hymns)/hymns-favourites',
                params: { pref: 'favourites' },
            },
        },
        Icon: HeartSvg,
    },
];

const PREFENCES_SECTION_0X: ListCardProps[] = [
    {
        scheme: getSchemeById('rose').scheme,
        variant: 'outline',
        title: 'Sign Out',
        mode: {
            mode: 'action',
            action: {
                action: () => {
                    console.log('Action');
                },
            },
        },
        Icon: SignOutSvg,
    },
    {
        scheme: getSchemeById('rose').scheme,
        variant: 'outline',
        title: 'Sign Out',
        mode: {
            mode: 'action',
            action: {
                action: () => {
                    console.log('Action');
                },
            },
        },
        Icon: SignOutSvg,
    },
];
