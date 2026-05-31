import { useEffect } from 'react';
import { View, Text, Pressable } from 'react-native';
import { SafeAreaView as ReactNativeSafeAreaView } from 'react-native-safe-area-context';
import { router } from 'expo-router';
import { Image } from 'expo-image';

import { APP_HEADING_SUB, APP_HEADING_TAB } from '@/constants/app.constants';
import { ScreenHeadingProps } from '@/types/app.types';
import { styled } from 'nativewind';

import { useAuth } from '@/hooks/useAuth';

import IconSvg from '@/components/Icon';
import {
    ArrowBackSvg,
    DeleteSvg,
    EditSvg,
    HeartSvg,
    HelpSvg,
    ProcessingSvg,
    SignOutSvg,
    StarSvg,
    UserSvg,
} from '@/components/svg/SvgIcons';
import { useAuthSignOut } from '@/hooks/useAuthSignOut';
import { PreferencesSvg } from '@/components/svg/SvgTabIcons';
import { ScreenHeading } from '@/components/Headings';

const SafeAreaView = styled(ReactNativeSafeAreaView);

const ProfileScreen = () => {
    const heading: ScreenHeadingProps = {
        ...APP_HEADING_SUB,
        title: 'Profile',
    } as ScreenHeadingProps;

    const { user, isLoading: isUserLoading } = useAuth();
    const { signOut, loading: isSignOutLoading } = useAuthSignOut();

    useEffect(() => {
        if (!isUserLoading && !user) {
            router.replace('/(auth)/login');
        }
    }, [user]);

    const handleSignOut = async () => {
        await signOut();
        router.replace('/(auth)/login');
    };

    if (isUserLoading || !user) return null;

    const profileUrl: string | null = user?.photoURL ?? null;

    return (
        <SafeAreaView className="flex-1 gap-y-6 p-2 bg-white">
            <View className="flex-row items-center gap-x-2 px-1">
                <View className="shrink-0 flex-row items-center justify-center size-8">
                    <Pressable
                        onPress={() => {
                            if (router.canGoBack()) router.back();
                            else router.push('/(tabs)');
                        }}
                        className="shrink-0 flex-row items-center justify-center">
                        <IconSvg
                            className="rounded-full items-center justify-center size-8"
                            iconClassName="size-8 text-indigo-800"
                            Icon={ArrowBackSvg}
                        />
                    </Pressable>
                </View>

                <ScreenHeading
                    title={heading.title}
                    mode={heading.mode}
                    size={heading.size}
                    justify={heading.justify}
                />

                <View className="shrink-0 flex-row items-center justify-center size-8">
                    <Pressable
                        onPress={() => handleSignOut()}
                        disabled={isSignOutLoading}
                        className="shrink-0 flex-row items-center justify-center">
                        {isSignOutLoading ? (
                            <IconSvg
                                className="rounded-full items-center justify-center size-6 animate-spin"
                                iconClassName="size-7 text-fuchsia-800"
                                Icon={ProcessingSvg}
                            />
                        ) : (
                            <IconSvg
                                className="rounded-full items-center justify-center size-6"
                                iconClassName="size-6 text-fuchsia-800"
                                Icon={SignOutSvg}
                            />
                        )}
                    </Pressable>
                </View>
            </View>

            <View className="gap-y-6 px-1">
                <View className="flex-row items-center rounded-2xl gap-x-4 px-4 py-3.5 bg-indigo-50">
                    <View className="flex-row items-center justify-center rounded-full p-0.5 size-18 bg-linear-to-br from-indigo-600 via-sky-400 to-fuchsia-600">
                        <View className="flex-row items-center justify-center rounded-full p-0.5 size-full bg-white">
                            {!!profileUrl ? (
                                <Image
                                    source={{ uri: profileUrl }}
                                    contentFit="cover"
                                    className="rounded-full size-full object-cover"
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        borderRadius: 999,
                                    }}
                                />
                            ) : (
                                <IconSvg
                                    className="flex items-center justify-center rounded-full size-full"
                                    iconClassName="size-7 text-indigo-900"
                                    Icon={UserSvg}
                                />
                            )}
                        </View>
                    </View>

                    <View>
                        <Text className="font-googlesans-regular text-xl text-slate-800">
                            {user?.displayName}
                        </Text>
                        <Text className="font-googlesans-regular text-slate-800">
                            {user?.email}
                        </Text>
                    </View>
                </View>
            </View>

            <View className="flex-1 gap-y-6 px-2">
                <View className="gap-y-0.5">
                    <View className="flex-row items-center rounded-md rounded-t-2xl gap-x-4 px-5 py-3.5 bg-indigo-950">
                        <IconSvg
                            className="flex items-center justify-center rounded-full size-11 bg-sky-300"
                            iconClassName="size-7 text-sky-800"
                            Icon={UserSvg}
                        />
                        <Text className="font-googlesans-medium text-lg text-white">
                            Account Details
                        </Text>
                    </View>
                    <View className="flex-row items-center rounded-md rounded-b-2xl gap-x-4 px-5 py-3.5 bg-indigo-950">
                        <IconSvg
                            className="flex items-center justify-center rounded-full size-11 bg-fuchsia-300"
                            iconClassName="size-7 text-fuchsia-800"
                            Icon={HeartSvg}
                        />
                        <Text className="font-googlesans-medium text-lg text-white">
                            Favourites
                        </Text>
                    </View>
                </View>

                <View className="gap-y-0.5">
                    <View className="flex-row items-center rounded-md rounded-t-2xl gap-x-4 px-5 py-3.5 bg-indigo-950">
                        <IconSvg
                            className="flex items-center justify-center rounded-full size-11 bg-sky-300"
                            iconClassName="size-7 text-sky-800"
                            Icon={StarSvg}
                        />
                        <Text className="font-googlesans-medium text-lg text-white">
                            App Rating
                        </Text>
                    </View>
                    <View className="flex-row items-center rounded-md gap-x-4 px-5 py-3.5 bg-indigo-950">
                        <IconSvg
                            className="flex items-center justify-center rounded-full size-11 bg-sky-300"
                            iconClassName="size-8 text-sky-800"
                            Icon={PreferencesSvg}
                        />
                        <Text className="font-googlesans-medium text-lg text-white">
                            Preferences
                        </Text>
                    </View>
                    <View className="flex-row items-center rounded-md gap-x-4 px-5 py-3.5 bg-indigo-950">
                        <IconSvg
                            className="flex items-center justify-center rounded-full size-11 bg-teal-300"
                            iconClassName="size-6 text-teal-800"
                            Icon={EditSvg}
                        />
                        <Text className="font-googlesans-medium text-lg text-white">
                            Suggest An Edit
                        </Text>
                    </View>
                    <View className="flex-row items-center rounded-md rounded-b-2xl gap-x-4 px-5 py-3.5 bg-indigo-950">
                        <IconSvg
                            className="flex items-center justify-center rounded-full size-11 bg-orange-300"
                            iconClassName="flex size-8 text-orange-800"
                            Icon={HelpSvg}
                        />
                        <Text className="font-googlesans-medium text-lg text-white">
                            Help & Support
                        </Text>
                    </View>
                </View>
            </View>

            <View className="gap-y-6 px-2">
                <View className="gap-y-0.5">
                    <View className="flex-row items-center justify-center border border-rose-200 rounded-2xl gap-x-4 px-5 py-2.5 bg-rose-100">
                        <Text className="font-googlesans-medium text-lg text-rose-800">
                            Delete Account
                        </Text>
                        <IconSvg
                            className="flex items-center justify-center rounded-full size-11"
                            iconClassName="size-9 text-rose-800"
                            Icon={DeleteSvg}
                        />
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
};

export default ProfileScreen;
