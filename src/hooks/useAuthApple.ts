import { useState } from 'react';
import {
    getAuth,
    signInWithCredential,
    AppleAuthProvider,
} from '@react-native-firebase/auth';
import appleAuth from '@invertase/react-native-apple-authentication';

export function useAuthApple() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<Error | null>(null);

    async function signInWithApple() {
        setLoading(true);
        setError(null);
        try {
            const appleAuthRequest = await appleAuth.performRequest({
                requestedOperation: appleAuth.Operation.LOGIN,
                requestedScopes: [
                    appleAuth.Scope.FULL_NAME,
                    appleAuth.Scope.EMAIL,
                ],
            });

            if (!appleAuthRequest.identityToken) {
                throw new Error('Apple sign in failed - no identity token');
            }

            const credential = AppleAuthProvider.credential(
                appleAuthRequest.identityToken,
                appleAuthRequest.nonce,
            );

            const result = await signInWithCredential(getAuth(), credential);
            return result.user;
        } catch (err) {
            setError(err as Error);
            return null;
        } finally {
            setLoading(false);
        }
    }

    async function signOut() {
        await getAuth().signOut();
        // Apple doesn't have an explicit signOut like Google
    }

    return { signInWithApple, signOut, loading, error };
}
