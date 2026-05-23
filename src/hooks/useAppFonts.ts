import { useFonts } from 'expo-font';

export default function useAppFonts() {
    return useFonts({
        'literata-semibolditalic': require('../../assets/fonts/Literata-SemiBoldItalic.ttf'),
        'literata-semibold': require('../../assets/fonts/Literata-SemiBold.ttf'),
        'literata-regular': require('../../assets/fonts/Literata-Regular.ttf'),
        'literata-mediumitalic': require('../../assets/fonts/Literata-MediumItalic.ttf'),
        'literata-medium': require('../../assets/fonts/Literata-Medium.ttf'),
        'literata-lightitalic': require('../../assets/fonts/Literata-LightItalic.ttf'),
        'literata-light': require('../../assets/fonts/Literata-Light.ttf'),
        'literata-italic': require('../../assets/fonts/Literata-Italic.ttf'),
        'literata-extralightitalic': require('../../assets/fonts/Literata-ExtraLightItalic.ttf'),
        'literata-extralight': require('../../assets/fonts/Literata-ExtraLight.ttf'),
        'literata-extrabolditalic': require('../../assets/fonts/Literata-ExtraBoldItalic.ttf'),
        'literata-extrabold': require('../../assets/fonts/Literata-ExtraBold.ttf'),
        'literata-bolditalic': require('../../assets/fonts/Literata-BoldItalic.ttf'),
        'literata-bold': require('../../assets/fonts/Literata-Bold.ttf'),
        'literata-blackitalic': require('../../assets/fonts/Literata-BlackItalic.ttf'),
        'literata-black': require('../../assets/fonts/Literata-Black.ttf'),
        'googlesans-semibolditalic': require('../../assets/fonts/GoogleSans-SemiBoldItalic.ttf'),
        'googlesans-semibold': require('../../assets/fonts/GoogleSans-SemiBold.ttf'),
        'googlesans-regular': require('../../assets/fonts/GoogleSans-Regular.ttf'),
        'googlesans-mediumitalic': require('../../assets/fonts/GoogleSans-MediumItalic.ttf'),
        'googlesans-medium': require('../../assets/fonts/GoogleSans-Medium.ttf'),
        'googlesans-italic': require('../../assets/fonts/GoogleSans-Italic.ttf'),
        'googlesans-bolditalic': require('../../assets/fonts/GoogleSans-BoldItalic.ttf'),
        'googlesans-bold': require('../../assets/fonts/GoogleSans-Bold.ttf'),
    });
}
