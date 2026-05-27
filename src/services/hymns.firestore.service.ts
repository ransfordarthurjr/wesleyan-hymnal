import {
    getFirestore,
    collection,
    query,
    orderBy,
    limit,
    getDocs,
    where,
} from '@react-native-firebase/firestore';

import { APP_VERSION, DEFAULT_HYMN_VERSION } from '@/constants/hymns.constants';
import { HymnInterface } from '@/types/app.types';

export const getHymnVersion = async (): Promise<number> => {
    const db = getFirestore();
    const q = query(
        collection(db, 'hymns-versions'),
        where('app_version', '==', APP_VERSION),
        orderBy('version', 'desc'),
        limit(1),
    );
    const snap = await getDocs(q);
    return snap.docs[0]?.data()?.version || DEFAULT_HYMN_VERSION;
};

export const getHymns = async (version: number): Promise<HymnInterface[]> => {
    const db = getFirestore();
    const q = query(
        collection(db, `hymns-${version}`),
        orderBy('ordinal', 'asc'),
    );
    const snap = await getDocs(q);

    return snap.docs.map((d) => ({ ...d.data() })) as HymnInterface[];
};
