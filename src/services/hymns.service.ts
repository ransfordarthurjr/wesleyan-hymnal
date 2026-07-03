import { HymnIndexInterface, HymnInterface } from '@/types/app.types';

import { getHymns, getHymnVersion } from './hymns.firestore.service';
import { mmkv } from './hymns.mmkv.service';

import {
    DEFAULT_HYMN_VERSION,
    HYMN_PREFIX_KEY,
    HYMNS_VERSION_KEY,
    HYMNS_COUNT_KEY,
    HYMNS_FAVOURITES_KEY,
    HYMNS_FAVOURITES_ORDER_KEY,
    HYMNS_FAVOURITES_ORDER_OPTIONS,
} from '@/constants/app.constants';

import {
    SortAscendingSvg,
    SortDescendingSvg,
    SortUnOrderedSvg,
} from '@/components/svg/SvgIcons';

export const init = async (): Promise<void> => {
    const versionRemote: number = await getHymnVersion();
    const versionLocal: number =
        mmkv.getNumber(HYMNS_VERSION_KEY) || DEFAULT_HYMN_VERSION;

    if (versionLocal >= versionRemote) return;

    const hymns: HymnInterface[] = await getHymns(versionRemote);
    if (!hymns || hymns.length === 0) return;

    mmkv.set(HYMNS_VERSION_KEY, versionRemote);
    mmkv.set(HYMNS_COUNT_KEY, hymns.length);
    hymns.forEach((hymn) => {
        // ✅ was every()
        mmkv.set(`${HYMN_PREFIX_KEY}${hymn.ordinal}`, JSON.stringify(hymn));
    });
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
    ordinals.forEach(ordinal => { favourites.delete(ordinal) })

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
