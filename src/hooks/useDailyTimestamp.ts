import { useState, useEffect } from 'react';
import { AppState } from 'react-native';
import { DateTime } from 'luxon';

const getGreeting = (timestamp: DateTime): string => {
    if (timestamp.hour < 12) return 'Good morning,';
    if (timestamp.hour < 18) return 'Good afternoon,';
    return 'Good evening,';
};

export const useDailyTimestamp = () => {
    const [dateTime, setDateTime] = useState<DateTime>(DateTime.now);

    useEffect(() => {
        const update = () => setDateTime(DateTime.now());

        const subscription = AppState.addEventListener('change', (state) => {
            if (state === 'active') update();
        });

        const getMsUntilMidnight = () => {
            const now = DateTime.now();
            return now.plus({ days: 1 }).startOf('day').diff(now).milliseconds;
        };

        let timeout: ReturnType<typeof setTimeout>;
        const scheduleMidnightRefresh = () => {
            timeout = setTimeout(() => {
                update();
                scheduleMidnightRefresh();
            }, getMsUntilMidnight());
        };

        scheduleMidnightRefresh();

        return () => {
            subscription.remove();
            clearTimeout(timeout);
        };
    }, []);

    return {
        ordinal: dateTime.ordinal,
        dateTime,
        greeting: getGreeting(dateTime),
    };
};
