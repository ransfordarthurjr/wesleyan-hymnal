import { useState } from 'react';
import { getAuth, signOut } from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-google-signin/google-signin';

type AuthProvider = 'google.com' | 'apple.com' | 'password';

export function useAuthSignOut() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<Error | null>(null);

    async function handleSignOut() {
        setLoading(true);
        setError(null);

        try {
            const auth = getAuth();
            const user = auth.currentUser;

            if (!user) return;

            const providerId = user.providerData[0]?.providerId as AuthProvider;

            switch (providerId) {
                case 'google.com':
                    await GoogleSignin.signOut();
                    break;
                case 'apple.com':
                case 'password':
                    break;
                default:
                    console.warn(`Unknown provider: ${providerId}`);
            }

            await signOut(auth);
        } catch (err) {
            setError(err as Error);
        } finally {
            setLoading(false);
        }
    }

    return { signOut: handleSignOut, loading, error };
}
