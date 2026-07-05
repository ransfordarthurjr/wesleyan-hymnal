/* react, react-native, expo */
import { Pressable, Text, View } from 'react-native';
import { router } from 'expo-router';
import { Image } from 'expo-image';

/* react-native-... */
import { SafeAreaView as ReactNativeSafeAreaView } from 'react-native-safe-area-context';

/* nativewind */
import { styled } from 'nativewind';

/* 3rd party libs */

/* constants & utilities */
import { APP_HEADING_MAIN } from '@/constants/app.constants';
import { ScreenHeadingProps } from '@/types/app.types';
import { cn } from '@/utils/utility';

/* custom defined hooks */
import { useAuth } from '@/hooks/useAuth';
import { useDailyTimestamp } from '@/hooks/useDailyTimestamp';

/* services */

/* components */
import IconSvg from '@/components/Icon';
import { UserSvg } from '@/components/svg/SvgIcons';
import { ScreenHeading } from '@/components/Headings';
import VerseOfTheDayCard from '@/components/VerseOfTheDayCard';
import AboutAuthorPreviewCard from '@/components/AboutAuthorPreviewCard';

/* Styled RNs */
const SafeAreaView = styled(ReactNativeSafeAreaView);

const IndexScreen = () => {
    const heading: ScreenHeadingProps = {
        ...APP_HEADING_MAIN,
    } as ScreenHeadingProps;

    const { user } = useAuth();
    const { ordinal, greeting } = useDailyTimestamp();

    const firstname: string = user?.displayName?.split(' ')[0] ?? '';
    const profileUrl: string | null = user?.photoURL ?? null;
    const profileRedirectPath = !!user
        ? '/(profile)/profile'
        : '/(authenticate)/authenticate';

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

            <View className="flex-1 gap-y-4">
                <View className="flex-row items-end gap-x-2">
                    <Text className="flex-1 font-googlesans-medium text-xl text-slate-800 line-clamp-1 text-ellipsis">
                        {greeting} {firstname}
                    </Text>

                    <View className="shrink-0 flex-row items-center justify-center size-15">
                        <Pressable
                            onPress={() => router.push(profileRedirectPath)}
                            className={cn(
                                'flex-row items-center justify-center rounded-full p-0.5 size-15 bg-linear-to-br from-fuchsia-600 via-sky-400 to-indigo-600',
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

                <VerseOfTheDayCard ordinal={ordinal} />

                <AboutAuthorPreviewCard />

                {/* replace with probably hymn of the week */}
                <View className="flex-1">
                    <View className="p-2">
                        <Text className="font-googlesans-semibold text-slate-800">
                            Events & Annoucements
                        </Text>
                    </View>
                </View>
            </View>

            <View className="shrink-0 h-9"></View>
        </SafeAreaView>
    );
};

export default IndexScreen;
