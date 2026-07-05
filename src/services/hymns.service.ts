import { FirebaseAuthTypes } from '@react-native-firebase/auth';

import { HymnIndexInterface, HymnInterface } from '@/types/app.types';

import { getHymns, getHymnVersion } from './hymns.firestore.service';
import { mmkv } from './hymns.mmkv.service';

import {
    DATETIME_FORMAT,
    DEFAULT_HYMN_VERSION,
    DEFAULT_IS_USER_FIRST_TIME,
    HYMN_PREFIX_KEY,
    HYMNS_COUNT_KEY,
    HYMNS_FAVOURITES_KEY,
    HYMNS_FAVOURITES_ORDER_KEY,
    HYMNS_FAVOURITES_ORDER_OPTIONS,
    HYMNS_IS_USER_FIRST_TIME_KEY,
    HYMNS_LAST_CHECKIN_TIMESTAMP_KEY,
    HYMNS_VERSION_KEY,
    MAX_DAYS_BETWEEN_CHECKINS,
} from '@/constants/app.constants';

import {
    SortAscendingSvg,
    SortDescendingSvg,
    SortUnOrderedSvg,
} from '@/components/svg/SvgIcons';
import { DateTime } from 'luxon';

export const hasCheckInTimeElapsed = (): boolean => {
    const lastCheckinTimestampValue: string =
        mmkv.getString(HYMNS_LAST_CHECKIN_TIMESTAMP_KEY) ||
        DateTime.now().toFormat(DATETIME_FORMAT);

    const lastCheckinTimestamp: DateTime = DateTime.fromFormat(
        lastCheckinTimestampValue,
        DATETIME_FORMAT,
    );

    const isCheckInRequired: boolean =
        DateTime.now().diff(lastCheckinTimestamp, 'days').hours >=
        MAX_DAYS_BETWEEN_CHECKINS;

    if (isCheckInRequired) {
        mmkv.set(
            HYMNS_LAST_CHECKIN_TIMESTAMP_KEY,
            DateTime.now().toFormat(DATETIME_FORMAT),
        );
    }

    return isCheckInRequired;
};

export const initHymns = async (): Promise<boolean> => {
    const version: number = await getHymnVersion();

    const hymns: HymnInterface[] = await getHymns(version);
    if (!hymns || hymns.length === 0) return false;

    mmkv.set(HYMNS_VERSION_KEY, version);
    mmkv.set(HYMNS_COUNT_KEY, hymns.length);
    hymns.forEach((hymn) => {
        mmkv.set(`${HYMN_PREFIX_KEY}${hymn.ordinal}`, JSON.stringify(hymn));
    });

    return true;
};

export const initCanticles = async (): Promise<boolean> => {
    return true;
};

export const init = async (): Promise<boolean> => {
    const hymnsInit: boolean = await initHymns();
    const canticlesInit: boolean = await initCanticles();

    mmkv.set(HYMNS_IS_USER_FIRST_TIME_KEY, false);
    return hymnsInit && canticlesInit;
};

export const unInit = async () => {
    mmkv.set(HYMNS_VERSION_KEY, DEFAULT_HYMN_VERSION);
    const numberOfHymns: number = mmkv.getNumber(HYMNS_COUNT_KEY) ?? 0;

    for (let i = 1; i <= numberOfHymns; ++i) {
        mmkv.set(`${HYMN_PREFIX_KEY}${i}`, '');
    }
    mmkv.set(HYMNS_COUNT_KEY, 0);
    mmkv.set(HYMNS_IS_USER_FIRST_TIME_KEY, true);
};

export const getIndexes = (): HymnIndexInterface[] => {
    const numberOfHymns: number = mmkv.getNumber(HYMNS_COUNT_KEY) || 0;
    if (numberOfHymns <= 0) return [];

    const indexes: HymnIndexInterface[] = [];
    for (let i = 1; i <= numberOfHymns; ++i) {
        try {
            const hymn = JSON.parse(
                mmkv.getString(`${HYMN_PREFIX_KEY}${i}`) || '{}',
            );
            if (hymn) {
                indexes.push({
                    ordinal: hymn.ordinal,
                    preview: hymn.preview,
                    category: hymn.category,
                    number_of_stanzas: hymn.stanzas?.length || 0,
                });
            }
        } catch (e) {
            console.error(`Failed to parse hymn ${i}`, e);
        }
    }

    return indexes;
};

export const getHymn = (ordinal: number): HymnInterface | null => {
    const hymnStr = mmkv.getString(`${HYMN_PREFIX_KEY}${ordinal}`);
    if (!hymnStr) return null;

    const hymn: HymnInterface = JSON.parse(hymnStr);
    return !!hymn && !!hymn.ordinal ? hymn : null;
};

export const getHymnIndex = (ordinal: number): HymnIndexInterface | null => {
    const hymn: HymnInterface | null = getHymn(ordinal);
    if (!hymn) return null;

    return {
        ordinal: hymn.ordinal,
        preview: hymn.preview,
        category: hymn.category,
        number_of_stanzas: hymn.stanzas?.length || 0,
    };
};

export const getFavouriteHymnsOrder = (): string => {
    const favouritesOrder =
        mmkv.getString(HYMNS_FAVOURITES_ORDER_KEY) ||
        HYMNS_FAVOURITES_ORDER_OPTIONS[0].value;

    mmkv.set(HYMNS_FAVOURITES_ORDER_KEY, favouritesOrder);
    return favouritesOrder;
};

export const setFavouriteHymnsOrder = (order: string): string => {
    const validOrder = (
        HYMNS_FAVOURITES_ORDER_OPTIONS.find((opt) => opt.value === order) ||
        HYMNS_FAVOURITES_ORDER_OPTIONS[0]
    ).value;

    mmkv.set(HYMNS_FAVOURITES_ORDER_KEY, validOrder);
    return getFavouriteHymnsOrder();
};

export const getFavouriteHymns = (): Set<number> => {
    const favouritesStr = mmkv.getString(HYMNS_FAVOURITES_KEY) || '[]';
    let favouritesArray: number[] = JSON.parse(favouritesStr);

    const favouritesOrder = getFavouriteHymnsOrder();
    switch (favouritesOrder) {
        case HYMNS_FAVOURITES_ORDER_OPTIONS[0].value:
            return new Set<number>(favouritesArray);

        case 'ascending':
            return new Set<number>(favouritesArray.sort((a, b) => a - b));

        case 'descending':
            return new Set<number>(favouritesArray.sort((a, b) => b - a));

        default:
            return new Set<number>(favouritesArray);
    }
};

export const toggleHymnToFavourites = (ordinal: number): Set<number> => {
    let favourites: Set<number> = getFavouriteHymns();

    if (favourites.has(ordinal)) {
        favourites.delete(ordinal);
    } else {
        const updatedFavourites = new Set([ordinal, ...favourites]);
        favourites = updatedFavourites;
    }

    const favouritesArray = Array.from(favourites);
    mmkv.set(HYMNS_FAVOURITES_KEY, JSON.stringify(favouritesArray));
    return favourites;
};

export const getFavouriteHymnsIndexes = (): HymnIndexInterface[] => {
    const favourites: Set<number> = getFavouriteHymns();

    return Array.from(favourites)
        .map((fav) => getHymnIndex(fav))
        .filter((index): index is HymnIndexInterface => index !== null);
};

export const removeHymnFromFavourites = (ordinal: number): Set<number> => {
    const favourites: Set<number> = getFavouriteHymns();
    favourites.delete(ordinal);

    const favouritesArray = Array.from(favourites);
    mmkv.set(HYMNS_FAVOURITES_KEY, JSON.stringify(favouritesArray));
    return favourites;
};

export const removeHymnsFromFavourites = (ordinals: number[]): Set<number> => {
    const favourites: Set<number> = getFavouriteHymns();
    ordinals.forEach((ordinal) => {
        favourites.delete(ordinal);
    });

    const favouritesArray = Array.from(favourites);
    mmkv.set(HYMNS_FAVOURITES_KEY, JSON.stringify(favouritesArray));
    return favourites;
};

export const removeAllHymnsFromFavourites = (): Set<number> => {
    const favourites: Set<number> = new Set<number>();
    mmkv.set(HYMNS_FAVOURITES_KEY, JSON.stringify(Array.from(favourites)));
    return favourites;
};

export const getOrderingIcon = (currentOrder: string) => {
    switch (currentOrder) {
        case 'ascending':
            return SortAscendingSvg;
        case 'descending':
            return SortDescendingSvg;
        default:
            return SortUnOrderedSvg;
    }
};
