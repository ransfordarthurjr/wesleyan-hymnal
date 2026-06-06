import { mmkv } from '@/services/hymns.mmkv.service';

import {
    DEFAULT_HYMNS_PREFERENCES_KEY_INCLUDE_ALL_LINES_IN_SEARCH,
    DEFAULT_HYMNS_PREFERENCES_KEY_STANZA_FONT_FACE,
    DEFAULT_HYMNS_PREFERENCES_KEY_STANZA_FONT_SIZE,
    HYMNS_PREFERENCES_KEY_INCLUDE_ALL_LINES_IN_SEARCH,
    HYMNS_PREFERENCES_KEY_STANZA_FONT_FACE,
    HYMNS_PREFERENCES_KEY_STANZA_FONT_SIZE,
} from '@/constants/app.constants';

import {
    ListCardProps,
    PreferencesActionInterface,
    PreferencesToggleInterface,
} from '@/types/app.types';

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

export const getPreferredIncludeAllLinesInSearch = (): boolean =>
    mmkv.getBoolean(HYMNS_PREFERENCES_KEY_INCLUDE_ALL_LINES_IN_SEARCH) ||
    DEFAULT_HYMNS_PREFERENCES_KEY_INCLUDE_ALL_LINES_IN_SEARCH;

export const setPreferredIncludeAllLinesInSearch = (preference: boolean) =>
    mmkv.set(HYMNS_PREFERENCES_KEY_INCLUDE_ALL_LINES_IN_SEARCH, preference);

export const resetAllPreferencesToDefault = () => {
    mmkv.set(
        HYMNS_PREFERENCES_KEY_STANZA_FONT_SIZE,
        DEFAULT_HYMNS_PREFERENCES_KEY_STANZA_FONT_SIZE,
    );
    mmkv.set(
        HYMNS_PREFERENCES_KEY_STANZA_FONT_FACE,
        DEFAULT_HYMNS_PREFERENCES_KEY_STANZA_FONT_FACE,
    );
    mmkv.set(
        HYMNS_PREFERENCES_KEY_INCLUDE_ALL_LINES_IN_SEARCH,
        DEFAULT_HYMNS_PREFERENCES_KEY_INCLUDE_ALL_LINES_IN_SEARCH,
    );
};

export const mapPreferences = (
    preferences: ListCardProps[],
    overrides: {
        toggles?: PreferencesToggleInterface[];
        actions?: PreferencesActionInterface[];
    },
): ListCardProps[] => {
    return preferences.map((pref) => {
        if (pref.mode.mode === 'link') return pref;

        if (pref.mode.mode === 'action' && overrides.actions) {
            const action = overrides.actions.find((a) => a.id === pref.id);

            if (action) {
                const actionMode = pref.mode;

                return {
                    ...pref,
                    mode: {
                        ...pref.mode,
                        action: {
                            ...pref.mode.action,
                            fxn: () =>
                                action.fxn(...(actionMode.action.params ?? [])),
                        },
                    },
                };
            }
        }

        if (pref.mode.mode === 'toggle' && overrides.toggles) {
            const toggle = overrides.toggles.find((t) => t.id === pref.id);

            if (toggle) {
                return {
                    ...pref,
                    mode: {
                        ...pref.mode,
                        toggle: {
                            ...pref.mode.toggle,
                            isToggled: toggle.isToggled,
                            onToggle: toggle.onToggle,
                        },
                    },
                };
            }
        }

        return pref;
    });
};
