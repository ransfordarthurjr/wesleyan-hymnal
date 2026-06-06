import { useCallback, useMemo, useState } from 'react';
import { View } from 'react-native';
import { SafeAreaView as ReactNativeSafeAreaView } from 'react-native-safe-area-context';

import { styled } from 'nativewind';

import { APP_HEADING_TAB } from '@/constants/app.constants';
import { DEFAULT_HYMNS_PREFERENCES_KEY_INCLUDE_ALL_LINES_IN_SEARCH } from '@/constants/app.constants';
import { ListCardProps, ScreenHeadingProps } from '@/types/app.types';

import { getSchemeById } from '@/utils/utility';
import {
    getPreferredIncludeAllLinesInSearch,
    mapPreferences,
    resetAllPreferencesToDefault,
    setPreferredIncludeAllLinesInSearch,
} from '@/services/preferences.service';

import { ScreenHeading, SectionHeading } from '@/components/Headings';
import {
    BrokenLinesSvg,
    FontSizeSvg,
    HeartSvg,
    LanguageSvg,
    ResetPreferencesSvg,
    UserSvg,
} from '@/components/svg/SvgIcons';
import { ListCard } from '@/components/ListCards';
import { NotificationsSvg } from '@/components/svg/SvgTabIcons';

const SafeAreaView = styled(ReactNativeSafeAreaView);

const PreferencesScreen = () => {
    const heading: ScreenHeadingProps = {
        ...APP_HEADING_TAB,
        title: 'Preferences',
    } as ScreenHeadingProps;

    const [includeAllLinesInSearch, setIncludeAllLinesInSearch] =
        useState<boolean>(getPreferredIncludeAllLinesInSearch());

    const handleSwitchIncludeAllLinesInSearch = useCallback(
        (value: boolean) => {
            setIncludeAllLinesInSearch(value);
            setPreferredIncludeAllLinesInSearch(value);
        },
        [],
    );

    const handleResetAllPreferences = useCallback(() => {
        resetAllPreferencesToDefault();
        setIncludeAllLinesInSearch(
            DEFAULT_HYMNS_PREFERENCES_KEY_INCLUDE_ALL_LINES_IN_SEARCH,
        );
    }, []);

    const PREFERENCES_SECTION_LITERATURE_MAPPED = useMemo(
        () =>
            mapPreferences(PREFERENCES_SECTION_LITERATURE, {
                toggles: [
                    {
                        id: 'include-all-lines',
                        isToggled: includeAllLinesInSearch,
                        onToggle: handleSwitchIncludeAllLinesInSearch,
                    },
                ],
            }),
        [includeAllLinesInSearch, handleSwitchIncludeAllLinesInSearch],
    );

    const PREFERENCES_SECTION_RESET_MAPPED = useMemo(
        () =>
            mapPreferences(PREFERENCES_SECTION_RESET, {
                actions: [
                    {
                        id: 'reset-preferences',
                        fxn: handleResetAllPreferences,
                    },
                ],
            }),
        [handleResetAllPreferences],
    );

    return (
        <SafeAreaView className="flex-1 gap-y-6 p-2 bg-white">
            <View className="flex-row items-center gap-x-2 px-1">
                {heading.mode === 'sub' && (
                    <View className="shrink-0 flex-row items-center justify-center size-8" />
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
                    <SectionHeading title="General" />

                    {PREFERENCES_SECTION_GENERAL.map((pref, index) => (
                        <ListCard
                            key={pref.id}
                            id={pref.id}
                            scheme={pref.scheme}
                            variant={pref.variant}
                            label={pref.label}
                            mode={pref.mode}
                            Icon={pref.Icon}
                            first={index === 0}
                            last={
                                index === PREFERENCES_SECTION_GENERAL.length - 1
                            }
                        />
                    ))}
                </View>

                <View className="gap-y-0.5">
                    <SectionHeading title="Reading" />

                    {PREFERENCES_SECTION_LITERATURE_MAPPED.map(
                        (pref, index) => (
                            <ListCard
                                key={pref.id}
                                id={pref.id}
                                scheme={pref.scheme}
                                variant={pref.variant}
                                label={pref.label}
                                mode={pref.mode}
                                Icon={pref.Icon}
                                first={index === 0}
                                last={
                                    index ===
                                    PREFERENCES_SECTION_LITERATURE_MAPPED.length -
                                        1
                                }
                            />
                        ),
                    )}
                </View>

                <View className="flex-1 justify-end gap-y-0.5">
                    {PREFERENCES_SECTION_RESET_MAPPED.map((pref, index) => (
                        <ListCard
                            key={pref.id}
                            id={pref.id}
                            scheme={pref.scheme}
                            variant={pref.variant}
                            label={pref.label}
                            mode={pref.mode}
                            Icon={pref.Icon}
                            first={index === 0}
                            last={
                                index ===
                                PREFERENCES_SECTION_RESET_MAPPED.length - 1
                            }
                        />
                    ))}
                </View>
            </View>

            <View className="shrink-0 h-18" />
        </SafeAreaView>
    );
};

export default PreferencesScreen;

const PREFERENCES_SECTION_GENERAL: ListCardProps[] = [
    {
        scheme: getSchemeById('violet').scheme,
        variant: 'outline',
        id: 'profile',
        label: 'Profile',
        mode: {
            mode: 'link',
            link: { pathname: '/(auth)/profile', params: { pref: 'profile' } },
        },
        Icon: UserSvg,
    },
    {
        scheme: getSchemeById('blue').scheme,
        variant: 'solid',
        id: 'language',
        label: 'Language',
        mode: {
            mode: 'link',
            link: {
                pathname: '/(preferences)/language',
                params: { pref: 'language' },
            },
        },
        Icon: LanguageSvg,
    },
    {
        scheme: getSchemeById('orange').scheme,
        variant: 'solid',
        id: 'notifications',
        label: 'Notifications',
        mode: {
            mode: 'link',
            link: {
                pathname: '/(preferences)/notifications',
                params: { pref: 'notifications' },
            },
        },
        Icon: NotificationsSvg,
    },
];

const PREFERENCES_SECTION_LITERATURE: ListCardProps[] = [
    {
        scheme: getSchemeById('fuchsia').scheme,
        variant: 'solid',
        id: 'favourites',
        label: 'Favourites',
        mode: {
            mode: 'link',
            link: {
                pathname: '/(hymns)/hymns-favourites',
                params: { pref: 'favourites' },
            },
        },
        Icon: HeartSvg,
    },
    {
        scheme: getSchemeById('blue').scheme,
        variant: 'solid',
        id: 'font',
        label: 'Font',
        mode: {
            mode: 'link',
            link: { pathname: '/(preferences)/font', params: { pref: 'font' } },
        },
        Icon: FontSizeSvg,
    },
    {
        scheme: getSchemeById('blue').scheme,
        variant: 'outline',
        id: 'include-all-lines',
        label: 'Include all lines in search',
        mode: {
            mode: 'toggle',
            toggle: {
                isToggled: false,
            },
        },
        Icon: BrokenLinesSvg,
    },
];

const PREFERENCES_SECTION_RESET: ListCardProps[] = [
    {
        scheme: getSchemeById('rose').scheme,
        variant: 'outline',
        id: 'reset-preferences',
        label: 'Reset Preferences',
        mode: {
            mode: 'action',
            action: { fxn: () => {} },
        },
        Icon: ResetPreferencesSvg,
    },
];
