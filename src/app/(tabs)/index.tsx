import { View, Text, Pressable } from 'react-native';
import { SafeAreaView as ReactNativeSafeAreaView } from 'react-native-safe-area-context';
import { Image } from 'expo-image';
import { router } from 'expo-router';

import { styled } from 'nativewind';
import { DateTime } from 'luxon';

import { useAuth } from '@/hooks/useAuth';

import VerseOfTheDayCard from '@/components/VerseOfTheDayCard';
import AboutAuthorPreviewCard from '@/components/AboutAuthorPreviewCard';
import IconSvg from '@/components/Icon';
import { UserSvg } from '@/components/svg/SvgIcons';
import { cn } from '@/utils/utility';

const SafeAreaView = styled(ReactNativeSafeAreaView);

const IndexScreen = () => {
    const greeting: string = getGreeting();
    const { user } = useAuth();

    const firstname: string = user?.displayName?.split(' ')[0] ?? '';
    const profileUrl: string | null = user?.photoURL ?? null;
    const profileRedirectPath = !!user ? '/(auth)/profile' : '/(auth)/login';

    return (
        <SafeAreaView className="flex-1 gap-y-6 p-2 bg-white">
            <View className="flex-row justify-center">
                <Text className="font-googlesans-regular text-3xl text-indigo-900">
                    Wesleyan Hymnal
                </Text>
            </View>

            <View className="flex-row items-end justify-between">
                <Text className="font-googlesans-medium text-xl text-slate-800">
                    {greeting} {firstname}
                </Text>

                <View className="flex-row items-center justify-center size-15">
                    <Pressable
                        onPress={() => router.push(profileRedirectPath)}
                        className={cn(
                            'flex-row items-center justify-center rounded-full p-0.5 size-15 bg-linear-to-br from-indigo-600 via-teal-600 to-sky-600',
                            !profileUrl && 'size-14',
                        )}>
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
                    </Pressable>
                </View>
            </View>

            <VerseOfTheDayCard />

            <View className="mt-4">
                <AboutAuthorPreviewCard />
            </View>

            <View className="flex-1">
                <View className="p-2">
                    <Text className="font-googlesans-semibold text-slate-800">
                        Events & Annoucements
                    </Text>
                </View>
            </View>

            <View className="shrink-0 h-9"></View>
        </SafeAreaView>
    );
};

export default IndexScreen;

const getGreeting = (): string => {
    const timestamp: DateTime = DateTime.now();

    let greeting: string;
    if (timestamp.hour < 12) {
        greeting = 'Good morning,';
    } else if (timestamp.hour < 18) {
        greeting = 'Good afternoon,';
    } else {
        greeting = 'Good evening,';
    }

    return greeting;
};
