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
import {
    APP_HEADING_SUB,
    APP_NAME,
    APP_START_UP_TEXT,
} from '@/constants/app.constants';
import { START_UP_SCREENS } from '@/constants/startup.constants';
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
    HymnSvg,
    ProcessingSvg,
    SignOutSvg,
    StarSvg,
    UserSvg,
} from '@/components/svg/SvgIcons';
import { PreferencesSvg } from '@/components/svg/SvgTabIcons';
import { StartUpIndicator } from '@/components/StartUpIndicator';
import { ListCard } from '@/components/ListCards';
import { ScreenHeading } from '@/components/Headings';

/* Styled RNs */
const SafeAreaView = styled(ReactNativeSafeAreaView);

const AccountDetailsScreen = () => {
    return (
        <View>
            <Text>AccountDetailsScreen</Text>
        </View>
    );
};

export default AccountDetailsScreen;
