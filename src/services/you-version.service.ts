import {
    YOU_VERSION_BASE_URL,
    YOU_VERSION_API_KEY,
    DEFAULT_VOTD,
    DEFAULT_PASSAGE,
} from '@/constants/you-version.constants';
import {
    YouVersionBibleDataInterface,
    YouVersionPassageInterface,
    YouVersionVerseOfTheDayInterface,
} from '@/types/app.types';
import { DateTime } from 'luxon';

export async function fetchBibleData(
    bibleId: number,
): Promise<YouVersionBibleDataInterface> {
    const response = await fetch(`${YOU_VERSION_BASE_URL}/bibles/${bibleId}`, {
        headers: {
            'x-yvp-app-key': YOU_VERSION_API_KEY + 'x',
        },
    });
    // if (!response.ok) return DEFAULT_BIBLE_DATA;
    if (!response.ok) throw new Error('Failed to fetch bible data');
    return (await response.json()) as YouVersionBibleDataInterface;
}

export async function fetchVerseOfTheDay(): Promise<YouVersionVerseOfTheDayInterface> {
    const day: number = DateTime.now().ordinal;

    const response = await fetch(
        `${YOU_VERSION_BASE_URL}/verse_of_the_days/${day}`,
        {
            headers: {
                'x-yvp-app-key': YOU_VERSION_API_KEY,
            },
        },
    );
    if (!response.ok) return DEFAULT_VOTD;
    return (await response.json()) as YouVersionVerseOfTheDayInterface;
}

export async function fetchPassage(
    bibleId: number,
    passageId: string,
): Promise<YouVersionPassageInterface> {
    const response = await fetch(
        `${YOU_VERSION_BASE_URL}/bibles/${bibleId}/passages/${passageId}`,
        {
            headers: {
                'x-yvp-app-key': YOU_VERSION_API_KEY,
            },
        },
    );
    if (!response.ok) return DEFAULT_PASSAGE;
    return (await response.json()) as YouVersionPassageInterface;
}
