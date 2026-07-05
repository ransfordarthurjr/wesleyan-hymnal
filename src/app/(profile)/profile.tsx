/* react, react-native, expo */
import { useState } from 'react';
import { Alert, Pressable, Text, View } from 'react-native';
import { router } from 'expo-router';
import { Image } from 'expo-image';

/* react-native-... */
import { SafeAreaView as ReactNativeSafeAreaView } from 'react-native-safe-area-context';

/* nativewind */
import { styled } from 'nativewind';

/* 3rd party libs */

/* constants & utilities */
import { ScreenHeadingProps } from '@/types/app.types';
import { APP_HEADING_SUB, APP_NAME } from '@/constants/app.constants';
import { cn } from '@/utils/utility';

/* custom defined hooks */
import { useAuth } from '@/hooks/useAuth';
import { useAuthSignOut } from '@/hooks/useAuthSignOut';

/* services */
import { unInit } from '@/services/hymns.service';

/* components */
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
import { PreferencesSvg } from '@/components/svg/SvgTabIcons';
import { ListCard } from '@/components/ListCards';
import { ScreenHeading } from '@/components/Headings';

/* Styled RNs */
const SafeAreaView = styled(ReactNativeSafeAreaView);

const ProfileScreen = () => {
    const heading: ScreenHeadingProps = {
        ...APP_HEADING_SUB,
        title: 'Profile',
    } as ScreenHeadingProps;

    const { user, isLoading: isUserLoading } = useAuth();
    const { signOut, loading: isSignOutLoading } = useAuthSignOut();
    const [isDeleting, setIsDeleting] = useState<boolean>(false);

    const handleSignOut = async () => {
        await signOut();
        router.replace('/(authenticate)/authenticate');
    };

    const handleDeleteAccount = () => {
        Alert.alert(
            'Delete Account & Preferences',
            `Are you sure you want to remove all your data and settings from ${APP_NAME}`,
            [
                {
                    text: 'Delete',
                    style: 'destructive',
                    onPress: async () => {
                        setIsDeleting(true);
                        await deleteAccount();
                        setIsDeleting(false);
                    },
                },
                { text: 'Cancel', style: 'cancel' },
            ],
        );
    };

    const deleteAccount = async () => {
        try {
            await signOut();
            await unInit();
            router.replace('/(startup)/startup');
        } catch (error) {
            console.error(error);
        }
    };

    // if (isUserLoading || !user) return null;

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
                                className="rounded-full items-center justify-center size-7 animate-spin"
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

            <View className="gap-y-6 px-2">
                <View className="gap-y-0.5">
                    <ListCard
                        id="account"
                        scheme="blue"
                        variant="solid"
                        label="Account Details"
                        mode={{
                            mode: 'link',
                            link: { pathname: '/(profile)/account-details' },
                        }}
                        Icon={UserSvg}
                        first={true}
                        last={false}
                    />

                    <ListCard
                        id="favourites"
                        scheme="fuchsia"
                        variant="solid"
                        label="Favourites"
                        mode={{
                            mode: 'link',
                            link: { pathname: '/(hymns)/hymns-favourites' },
                        }}
                        Icon={HeartSvg}
                        first={false}
                        last={true}
                    />
                </View>

                <View className="gap-y-0.5">
                    <ListCard
                        id="preferences"
                        scheme="blue"
                        variant="solid"
                        label="App Rating"
                        mode={{
                            mode: 'action',
                            action: {
                                fxn: () => {
                                    console.log('app-rating');
                                },
                            },
                        }}
                        Icon={StarSvg}
                        first={true}
                        last={false}
                    />

                    <ListCard
                        id="preferences"
                        scheme="blue"
                        variant="solid"
                        label="Preferences"
                        mode={{
                            mode: 'link',
                            link: { pathname: '/(tabs)/preferences' },
                        }}
                        Icon={PreferencesSvg}
                        first={false}
                        last={false}
                    />

                    <View className="flex-row items-center rounded-md gap-x-4 px-5 py-3.5 bg-indigo-950">
                        <IconSvg
                            className="flex items-center justify-center rounded-full size-11 bg-teal-300"
                            iconClassName="size-5 text-teal-800"
                            Icon={EditSvg}
                        />
                        <Text className="font-googlesans-medium text-lg text-white">
                            Suggest an edit...
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

            <View className="flex-1 justify-end gap-y-6 px-2">
                <View className="gap-y-0.5">
                    <Pressable
                        onPress={handleDeleteAccount}
                        className="flex-row items-center justify-center border border-rose-400 rounded-2xl gap-x-4 px-5 py-2 bg-rose-300">
                        <Text className="font-googlesans-medium text-lg text-rose-800">
                            Delete Account
                        </Text>
                        <IconSvg
                            className={cn(
                                'flex items-center justify-center rounded-full size-11',
                                isDeleting && 'animate-spin',
                            )}
                            iconClassName="size-9 text-rose-800"
                            Icon={isDeleting ? ProcessingSvg : DeleteSvg}
                        />
                    </Pressable>
                </View>
            </View>
        </SafeAreaView>
    );
};

export default ProfileScreen;
