import { useEffect } from 'react';
import { View, Text, Pressable } from 'react-native';
import { SafeAreaView as ReactNativeSafeAreaView } from 'react-native-safe-area-context';
import { router } from 'expo-router';
import { Image } from 'expo-image';

import { styled } from 'nativewind';

import { useAuth } from '@/hooks/useAuth';

import IconSvg from '@/components/Icon';
import {
    ArrowBackSvg,
    HeartSvg,
    HelpSvg,
    ProcessingSvg,
    SignOutSvg,
    UserSvg,
} from '@/components/svg/SvgIcons';
import { useAuthSignOut } from '@/hooks/useAuthSignOut';
import { PreferencesSvg } from '@/components/svg/SvgTabIcons';

const SafeAreaView = styled(ReactNativeSafeAreaView);

const ProfileScreen = () => {
    const { user } = useAuth();
    const {
        signOut,
        loading: isSignOutLoading,
        error: isSignOutError,
    } = useAuthSignOut();

    useEffect(() => {
        if (!user) {
            // router.push('/(auth)/login');
        }
    }, [user]);
    if (!user) return null;

    const profileUrl: string | null = user?.photoURL ?? null;

    return (
        <SafeAreaView className="flex-1 gap-y-6 p-2 bg-white">
            <View className="flex-row items-center gap-x-2 px-1">
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

                <View className="flex-1 flex-row items-center justify-center">
                    <Text className="font-googlesans-medium text-2xl text-slate-800 leading-1.3 line-clamp-1">
                        Profile
                    </Text>
                </View>

                <Pressable
                    onPress={() => signOut()}
                    disabled={isSignOutLoading}
                    className="shrink-0 flex-row items-center justify-center">
                    {isSignOutLoading ? (
                        <IconSvg
                            className="rounded-full items-center justify-center size-6 animate-spin"
                            iconClassName="size-6 text-fuchsia-800"
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

            <View className="flex-1 gap-y-6 px-2">
                <View className="flex-row items-center border border-indigo-400 rounded-2xl gap-x-4 p-4 bg-indigo-200">
                    <View className="flex-row items-center justify-center rounded-full p-0.5 size-16 bg-linear-to-br from-indigo-500 via-sky-400 to-fuchsia-500">
                        <View className="flex-row items-center justify-center rounded-full p-0.5 size-full bg-white/70">
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
                        <Text className="font-googlesans-regular text-xl text-indigo-900">
                            {user?.displayName}
                        </Text>
                        <Text className="font-googlesans-regular text-indigo-900">
                            {user?.email}
                        </Text>
                    </View>
                </View>

                <View className="gap-y-0.5">
                    <View className="flex-row items-center rounded-2xl gap-x-3 p-4 bg-slate-600">
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
                    <View className="flex-row items-center rounded-t-2xl rounded-md gap-x-3 px-4 py-4 bg-slate-600">
                        <IconSvg
                            className="flex items-center justify-center rounded-full size-11 bg-fuchsia-300"
                            iconClassName="size-7 text-fuchsia-800"
                            Icon={HeartSvg}
                        />
                        <Text className="font-googlesans-medium text-lg text-white">
                            Favourites
                        </Text>
                    </View>
                    <View className="flex-row items-center rounded-md gap-x-3 px-4 py-4 bg-slate-600">
                        <IconSvg
                            className="flex items-center justify-center rounded-full size-11 bg-sky-300"
                            iconClassName="size-8 text-slate-900"
                            Icon={PreferencesSvg}
                        />
                        <Text className="font-googlesans-medium text-lg text-white">
                            Preferences
                        </Text>
                    </View>
                    <View className="flex-row items-center rounded-b-2xl rounded-t-md gap-x-3 p-4 bg-slate-600">
                        <IconSvg
                            className="flex items-center justify-center rounded-full size-11 bg-orange-300"
                            iconClassName="size-8 text-orange-900"
                            Icon={HelpSvg}
                        />
                        <Text className="font-googlesans-medium text-lg text-white">
                            Help & Support
                        </Text>
                    </View>
                </View>

                <Text className="font-googlesans-semibold text-xl text-indigo-900">
                    {user?.displayName}
                </Text>
            </View>

            <View className="shrink-0 h-9"></View>
        </SafeAreaView>
    );
};

export default ProfileScreen;
