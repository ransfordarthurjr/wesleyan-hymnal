import { useState, useEffect } from 'react';
import {
    getAuth,
    onAuthStateChanged,
    FirebaseAuthTypes,
} from '@react-native-firebase/auth';

export function useAuth() {
    const [user, setUser] = useState<FirebaseAuthTypes.User | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const auth = getAuth();

        const unsubscribe = onAuthStateChanged(auth, (u) => {
            /*
            console.log(
                'onAuthStateChanged',
                JSON.stringify({
                    uid: u?.uid,
                    displayName: u?.displayName,
                    email: u?.email,
                    providerId: u?.providerId,
                    url: u?.photoURL,
                }),
            );
            */

            setUser(u);
            if (isLoading) setIsLoading(false);
        });
        return unsubscribe;
    }, []);

    return { user, isLoading };
}
