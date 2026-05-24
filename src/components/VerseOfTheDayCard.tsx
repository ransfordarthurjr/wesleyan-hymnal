import { View, Text } from 'react-native';
import { useQuery } from '@tanstack/react-query';

import {
    fetchBibleData,
    fetchPassage,
    fetchVerseOfTheDay,
} from '@/services/you-version.service';

import IconSvg from './Icon';
import { HeartSvg, ShareAlt1Svg, RetweetSvg } from './svg/SvgIcons';
import {
    DEFAULT_BIBLE_DATA,
    DEFAULT_PASSAGE,
    DEFAULT_VOTD,
} from '@/constants/you-version.constants';

const VerseOfTheDayCard = () => {
    // 1. Parallel: Fetch Bible Data
    const id: number = DEFAULT_BIBLE_DATA.id;
    const { data: bible, isLoading: bibleLoading } = useQuery({
        queryKey: ['bible', id],
        queryFn: () => fetchBibleData(id),
        placeholderData: DEFAULT_BIBLE_DATA,
        initialData: DEFAULT_BIBLE_DATA,
    });

    // 2. Parallel: Verse of the Day
    const { data: votd, isLoading: votdLoading } = useQuery({
        queryKey: ['votd'],
        queryFn: () => fetchVerseOfTheDay(),
        placeholderData: DEFAULT_VOTD,
    });

    // 3. Dependent: Passage only after VOTD arrives
    const bibleId: number = bible?.id!;
    const passageId: string = votd?.passage_id!;
    // console.log('bibleId', bibleId, 'passageId', passageId);

    const { data: passage, isLoading: passageLoading } = useQuery({
        queryKey: ['passage', bibleId, passageId],
        queryFn: () => fetchPassage(bibleId, passageId),
        enabled: !!bibleId && !!passageId,
        placeholderData: DEFAULT_PASSAGE,
    });

    return (
        <View className="gap-y-1 rounded-2xl p-4 bg-linear-to-b from-slate-800 to-slate-900">
            <Text className="font-googlesans-regular text-slate-50">
                Verse of the day
            </Text>

            <Text className="font-googlesans-medium text-lg text-slate-50">
                {passage?.reference} {bible?.abbreviation}
            </Text>

            <Text className="px-2 py-6 font-literata-regular text-xl text-slate-50 line-clamp-4">
                {passage?.content}
            </Text>

            <View className="flex-row items-center justify-between px-4">
                <IconSvg
                    className="rounded-full items-center justify-center size-10"
                    iconClassName="size-6 text-slate-400"
                    Icon={HeartSvg}
                />
                <IconSvg
                    className="rounded-full items-center justify-center size-10"
                    iconClassName="size-7 text-slate-400"
                    Icon={RetweetSvg}
                />
                <IconSvg
                    className="rounded-full items-center justify-center size-10"
                    iconClassName="size-6 text-slate-400"
                    Icon={ShareAlt1Svg}
                />
            </View>
        </View>
    );
};

export default VerseOfTheDayCard;
