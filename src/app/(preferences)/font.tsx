/* react, react-native, expo */
import { useState } from 'react';
import { Pressable, Text, View } from 'react-native';
import { router } from 'expo-router';

/* react-native-... */
import {
    SafeAreaView as ReactNativeSafeAreaView,
    useSafeAreaInsets,
} from 'react-native-safe-area-context';

/* nativewind */
import { styled } from 'nativewind';

/* 3rd party libs */

/* constants & utilities */
import {
    FontFaceOptionInterface,
    FontSizeOptionInterface,
    IconComponent,
    ScreenHeadingProps,
} from '@/types/app.types';
import {
    APP_HEADING_SUB,
    PREFERENCES_FONT_FACE_OPTIONS,
    PREFERENCES_FONT_SIZE_OPTIONS,
} from '@/constants/app.constants';
import { cn } from '@/utils/utility';

/* services */
import {
    getPreferredStanzaFontFace,
    getPreferredStanzaFontSize,
    setPreferredStanzaFontFace,
    setPreferredStanzaFontSize,
} from '@/services/preferences.service';

/* components */
import IconSvg from '@/components/Icon';
import {
    ArrowBackSvg,
    CheckSvg,
    SizeLSvg,
    SizeMSvg,
    SizeSSvg,
    SizeXLSvg,
    SizeXXLSvg,
} from '@/components/svg/SvgIcons';
import { ScreenHeading, SectionHeading } from '@/components/Headings';

/* Styled RNs */
const SafeAreaView = styled(ReactNativeSafeAreaView);

const FONT_SIZE_OPTIONS: FontSizeOptionInterface[] =
    PREFERENCES_FONT_SIZE_OPTIONS as FontSizeOptionInterface[];
const FONT_FACE_OPTIONS: FontFaceOptionInterface[] =
    PREFERENCES_FONT_FACE_OPTIONS as FontFaceOptionInterface[];

const ICONS_SIZE_MAPPINGS: Record<string, IconComponent> = {
    XL: SizeXXLSvg,
    L: SizeXLSvg,
    R: SizeLSvg,
    S: SizeMSvg,
    XS: SizeSSvg,
};

const FontPreferenceScreen = () => {
    const heading: ScreenHeadingProps = {
        ...APP_HEADING_SUB,
        title: 'Font',
    } as ScreenHeadingProps;

    const insets = useSafeAreaInsets();
    const { top, bottom } = insets;

    const [fontSize, setFontSize] = useState<string>(
        getPreferredStanzaFontSize(),
    );
    const [fontFace, setFontFace] = useState<string>(
        getPreferredStanzaFontFace(),
    );

    const handleSelectFontSize = (value: string) => {
        setFontSize(value);
        setPreferredStanzaFontSize(value);
    };

    const handleSelectFontFace = (value: string) => {
        setFontFace(value);
        setPreferredStanzaFontFace(value);
    };

    return (
        <SafeAreaView className="flex-1 gap-y-4 p-2 bg-white">
            <View className="flex-row items-center gap-x-2 px-1">
                {heading.mode === 'sub' && (
                    <Pressable
                        onPress={() => {
                            if (router.canGoBack()) router.back();
                            else router.push('/(tabs)');
                        }}
                        className="shrink-0 flex-row items-center justify-center size-8">
                        <IconSvg
                            className="rounded-full items-center justify-center size-8"
                            iconClassName="size-8 text-indigo-800"
                            Icon={ArrowBackSvg}
                        />
                    </Pressable>
                )}

                <ScreenHeading
                    title={heading.title}
                    mode={heading.mode}
                    size={heading.size}
                    justify={heading.justify}
                />

                <View className="shrink-0 flex-row items-center justify-center size-8"></View>
            </View>

            <View className="flex-1 gap-y-4 px-2">
                {/* font size */}
                <View className="">
                    <SectionHeading title="Font Size" />

                    <View className="flex-row items-center gap-x-0.5 border border-slate-200 rounded-2xl py-0.5 px-1 w-full bg-slate-50">
                        {FONT_SIZE_OPTIONS.map((option, index) => (
                            <Pressable
                                key={index}
                                onPress={() =>
                                    handleSelectFontSize(option.fontSize)
                                }
                                className={cn(
                                    'flex-1 flex-row items-center justify-center  rounded-sm py-1 bg-slate-50',
                                    index === 0 && 'rounded-l-xl',
                                    index === FONT_SIZE_OPTIONS.length - 1 &&
                                        'rounded-r-xl',
                                    fontSize === option.fontSize &&
                                        'border border-slate-300 bg-slate-200',
                                )}>
                                <IconSvg
                                    className="flex-row flex items-center justify-center size-12"
                                    iconClassName={cn(
                                        'text-slate-950',
                                        option.iconSize,
                                    )}
                                    Icon={ICONS_SIZE_MAPPINGS[option.label]}
                                />
                            </Pressable>
                        ))}
                    </View>
                </View>

                {/* font face */}
                <View className="">
                    <SectionHeading title="Font Face" />

                    <View className="gap-x-0.5 px-2 py-1 w-full">
                        {FONT_FACE_OPTIONS.map((option, index) => (
                            <Pressable
                                key={index}
                                onPress={() =>
                                    handleSelectFontFace(option.fontFace)
                                }
                                className="flex-row items-center gap-x-2 w-full">
                                <View className="flex items-center justify-center w-6">
                                    {fontFace === option.fontFace && (
                                        <IconSvg
                                            className="flex items-center justify-center size-6"
                                            iconClassName="text-indigo-950 size-6"
                                            Icon={CheckSvg}
                                        />
                                    )}
                                </View>
                                <Text
                                    className={cn(
                                        'flex-1 text-xl text-slate-600',
                                        option.fontFace,
                                        {
                                            'text-slate-950':
                                                fontFace === option.fontFace,
                                        },
                                    )}>
                                    {option.label}
                                </Text>
                            </Pressable>
                        ))}
                    </View>
                </View>

                {/* preview */}
                <View className="gap-y-0.5">
                    <View className="border border-indigo-200 rounded-md rounded-t-2xl p-4 bg-slate-200 text-indigo-950">
                        <SectionHeading title="Preview" />
                    </View>
                    <View className="gap-y-2 border border-indigo-200 rounded-md rounded-b-2xl p-4 bg-slate-200">
                        <Text
                            className={cn(
                                'text-indigo-950 line-clamp-4 mt-2',
                                fontFace,
                                fontSize,
                            )}>
                            Go therefore and make disciples of all the nations,
                            baptizing them in the name of the Father and of the
                            Son and of the Holy Spirit, 20 teaching them to
                            observe all things that I have commanded you; and
                            lo, I am with you always, even to the end of the
                            age.” Amen.
                        </Text>

                        <View className="flex-row justify-end">
                            <Text className="text-base text-indigo-950">
                                Mat. 28: 19 - 20
                            </Text>
                        </View>
                    </View>
                </View>
            </View>

            <View className="shrink-0 h-9" />
        </SafeAreaView>
    );
};

export default FontPreferenceScreen;
