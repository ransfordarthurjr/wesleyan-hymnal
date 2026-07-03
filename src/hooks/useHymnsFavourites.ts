// hooks/useFavouriteHymns.ts
//
/*
refresh re-fetches the full list from MMKV and is what useFocusEffect calls — so any screen using the hook automatically syncs when navigated back to.
remove does an optimistic local filter instead of a full re-fetch, so the swipe-delete animation isn't interrupted by a state round-trip through MMKV.
toggle does a full refresh after because it can add or remove, and the new item needs to be fetched and shaped into a HymnIndexInterface.
isFavourite is derived from favouriteIndexes already in state rather than hitting MMKV on every call, so it's safe to use inside renderItem without performance concerns.
*/

import { useCallback, useState } from 'react';
import { useFocusEffect } from 'expo-router';

import {
    HymnIndexInterface,
    UseHymnsFavouritesReturn,
} from '@/types/app.types';
import {
    getFavouriteHymnsIndexes,
    getFavouriteHymnsOrder,
    removeAllHymnsFromFavourites,
    removeHymnFromFavourites,
    removeHymnsFromFavourites,
    setFavouriteHymnsOrder,
    toggleHymnToFavourites,
} from '@/services/hymns.service';

export const useHymnsFavourites = (): UseHymnsFavouritesReturn => {
    const [favouriteIndexes, setFavouriteIndexes] = useState<
        HymnIndexInterface[]
    >([]);
    const [order, setOrderState] = useState<string>(() =>
        getFavouriteHymnsOrder(),
    );

    const refresh = useCallback(() => {
        setFavouriteIndexes(getFavouriteHymnsIndexes());
    }, []);

    useFocusEffect(refresh);

    const toggle = useCallback(
        (ordinal: number) => {
            toggleHymnToFavourites(ordinal);
            refresh();
        },
        [refresh],
    );

    const removeHymn = useCallback((ordinal: number) => {
        removeHymnFromFavourites(ordinal);
        setFavouriteIndexes((prev) =>
            prev.filter((h) => h.ordinal !== ordinal),
        );
    }, []);

    const removeHymns = useCallback((ordinals: number[]) => {
        removeHymnsFromFavourites(ordinals);
        setFavouriteIndexes(getFavouriteHymnsIndexes());
    }, []);

    const removeAllHymns = useCallback(() => {
        removeAllHymnsFromFavourites();
        setFavouriteIndexes(getFavouriteHymnsIndexes());
    }, []);

    const setOrder = useCallback(
        (newOrder: string) => {
            const applied = setFavouriteHymnsOrder(newOrder);

            setOrderState(applied);
            refresh();
        },
        [refresh],
    );

    const isFavourite = useCallback(
        (ordinal: number) =>
            favouriteIndexes.some((h) => h.ordinal === ordinal),
        [favouriteIndexes],
    );

    return {
        favouriteIndexes,
        order,
        toggle,
        removeHymn,
        removeHymns,
        removeAllHymns,
        setOrder,
        isFavourite,
        refresh,
    };
};
