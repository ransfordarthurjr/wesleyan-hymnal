import { useState, useEffect } from 'react';
import {
    getAuth,
    onAuthStateChanged,
    FirebaseAuthTypes,
} from '@react-native-firebase/auth';

export function useAuth() {
    const [user, setUser] = useState<FirebaseAuthTypes.User | null>(null);
    const [isAuthInitializing, setAuthInitializing] = useState(true);

    useEffect(() => {
        const auth = getAuth();

        const unsubscribe = onAuthStateChanged(auth, (u) => {
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

            setUser(u);
            if (isAuthInitializing) setAuthInitializing(false);
        });
        return unsubscribe;
    }, []);

    return { user, isAuthInitializing };
}
