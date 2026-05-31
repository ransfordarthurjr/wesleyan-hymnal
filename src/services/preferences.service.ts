import { mmkv } from '@/services/hymns.mmkv.service';
import {
    DEFAULT_HYMNS_PREFERENCES_KEY_STANZA_FONT_FACE,
    DEFAULT_HYMNS_PREFERENCES_KEY_STANZA_FONT_SIZE,
    HYMNS_PREFERENCES_KEY_STANZA_FONT_FACE,
    HYMNS_PREFERENCES_KEY_STANZA_FONT_SIZE,
} from '@/constants/app.constants';

export const getPreferredStanzaFontSize = (): string =>
    mmkv.getString(HYMNS_PREFERENCES_KEY_STANZA_FONT_SIZE) ||
    DEFAULT_HYMNS_PREFERENCES_KEY_STANZA_FONT_SIZE;

export const setPreferredStanzaFontSize = (fontSize: string) =>
    mmkv.set(HYMNS_PREFERENCES_KEY_STANZA_FONT_SIZE, fontSize);

export const getPreferredStanzaFontFace = (): string =>
    mmkv.getString(HYMNS_PREFERENCES_KEY_STANZA_FONT_FACE) ||
    DEFAULT_HYMNS_PREFERENCES_KEY_STANZA_FONT_FACE;

export const setPreferredStanzaFontFace = (fontFace: string) =>
    mmkv.set(HYMNS_PREFERENCES_KEY_STANZA_FONT_FACE, fontFace);
