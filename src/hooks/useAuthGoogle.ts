import { useState } from 'react';
import {
    getAuth,
    signInWithCredential,
    GoogleAuthProvider,
} from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-google-signin/google-signin';

GoogleSignin.configure({
    webClientId:
        '1017884881424-uvgp63360l47t9te2ekebedn7lcqm5au.apps.googleusercontent.com',
});

export function useAuthGoogle() {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<Error | null>(null);

    async function signInWithGoogle() {
        setIsLoading(true);
        setError(null);
        try {
            await GoogleSignin.hasPlayServices();
            const { data } = await GoogleSignin.signIn();
            const credential = GoogleAuthProvider.credential(data?.idToken);
            const result = await signInWithCredential(getAuth(), credential);
            return result.user;
        } catch (err) {
            setError(err as Error);
            return null;
        } finally {
            setIsLoading(false);
        }
    }

    async function signOut() {
        await GoogleSignin.signOut();
        await getAuth().signOut();
    }

    return { signInWithGoogle, signOut, isLoading, error };
}
