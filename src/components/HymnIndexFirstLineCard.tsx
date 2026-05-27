import { View, Text } from 'react-native';
import { Link } from 'expo-router';

import { HymnIndexProps } from '@/types/app.types';

import { cn } from '@/utils/utility';

import IconSvg from '@/components/Icon';
import { ChevronRightSvg, HymnSvg } from '@/components/svg/SvgIcons';

export const HymnIndexFirstLineCard = ({
    ordinal,
    hymn,
    first = false,
    last = false,
    scheme = 'slate',
}: HymnIndexProps) => {
    return (
        <Link
            href={{
                pathname: '/(hymns)/hymn',
                params: { number: hymn.ordinal, scheme },
            }}
            asChild>
            <View
                className={cn(
                    'flex-row items-center gap-x-4 borderx rounded-md px-4 py-3',
                    first && 'rounded-t-2xl',
                    last && 'rounded-b-2xl',
                    ordinal % 5 === 1 && 'rounded-t-2xl',
                    ordinal % 5 === 0 && 'rounded-b-2xl mb-8',
                    scheme === 'slate' && 'border-slate-200 bg-slate-50',
                    scheme === 'red' && 'border-red-200 bg-red-50',
                    scheme === 'orange' && 'border-orange-200 bg-orange-50',
                    scheme === 'green' && 'border-green-200 bg-green-50',
                    scheme === 'teal' && 'border-teal-200 bg-teal-50',
                    scheme === 'cyan' && 'border-cyan-200 bg-cyan-50',
                    scheme === 'blue' && 'border-blue-200 bg-blue-50',
                    scheme === 'violet' && 'border-violet-200 bg-violet-50',
                    scheme === 'fuchsia' && 'border-fuchsia-200 bg-fuchsia-50',
                    scheme === 'rose' && 'border-rose-200 bg-rose-50',
                )}>
                <IconSvg
                    className={cn(
                        'border-2 border-white rounded-full items-center justify-center size-12',
                        scheme === 'slate' && 'bg-slate-500',
                        scheme === 'red' && 'bg-red-500',
                        scheme === 'orange' && 'bg-orange-500',
                        scheme === 'green' && 'bg-green-500',
                        scheme === 'teal' && 'bg-teal-500',
                        scheme === 'cyan' && 'bg-cyan-500',
                        scheme === 'blue' && 'bg-blue-500',
                        scheme === 'violet' && 'bg-violet-500',
                        scheme === 'fuchsia' && 'bg-fuchsia-500',
                        scheme === 'rose' && 'bg-rose-500',
                    )}
                    iconClassName={cn(
                        'size-6 text-slate-600',
                        scheme === 'slate' && 'text-slate-50',
                        scheme === 'red' && 'text-red-50',
                        scheme === 'orange' && 'text-orange-50',
                        scheme === 'green' && 'text-green-50',
                        scheme === 'teal' && 'text-teal-50',
                        scheme === 'cyan' && 'text-cyan-50',
                        scheme === 'blue' && 'text-blue-50',
                        scheme === 'violet' && 'text-violet-50',
                        scheme === 'fuchsia' && 'text-fuchsia-50',
                        scheme === 'rose' && 'text-rose-50',
                    )}
                    Icon={HymnSvg}
                />

                <Text
                    className={cn(
                        'font-googlesans-medium text-2xl',
                        scheme === 'slate' && 'text-slate-900',
                        scheme === 'red' && 'text-red-900',
                        scheme === 'orange' && 'text-orange-900',
                        scheme === 'green' && 'text-green-900',
                        scheme === 'teal' && 'text-teal-900',
                        scheme === 'cyan' && 'text-cyan-900',
                        scheme === 'blue' && 'text-blue-900',
                        scheme === 'violet' && 'text-violet-900',
                        scheme === 'fuchsia' && 'text-fuchsia-900',
                        scheme === 'rose' && 'text-rose-900',
                    )}>
                    {hymn.ordinal}
                </Text>

                <View className="flex-1">
                    <Text
                        className={cn(
                            'font-googlesans-medium text-lg line-clamp-1',
                            scheme === 'slate' && 'text-slate-900',
                            scheme === 'red' && 'text-red-900',
                            scheme === 'orange' && 'text-orange-900',
                            scheme === 'green' && 'text-green-900',
                            scheme === 'teal' && 'text-teal-900',
                            scheme === 'cyan' && 'text-cyan-900',
                            scheme === 'blue' && 'text-blue-900',
                            scheme === 'violet' && 'text-violet-900',
                            scheme === 'fuchsia' && 'text-fuchsia-900',
                            scheme === 'rose' && 'text-rose-900',
                        )}>
                        {hymn.preview}
                    </Text>
                    <Text className="flex-row items-end font-googlesans-regular text-base line-clamp-1 text-slate-400">
                        <Text className="">Stanzas: </Text>
                        <Text className="font-googlesans-medium">
                            {hymn.number_of_stanzas}
                        </Text>
                    </Text>
                </View>

                <IconSvg
                    className={cn(
                        'rounded-full items-center justify-center size-4',
                    )}
                    iconClassName={cn(
                        'size-3 text-slate-600',
                        scheme === 'slate' && 'text-slate-900',
                        scheme === 'red' && 'text-red-900',
                        scheme === 'orange' && 'text-orange-900',
                        scheme === 'green' && 'text-green-900',
                        scheme === 'teal' && 'text-teal-900',
                        scheme === 'cyan' && 'text-cyan-900',
                        scheme === 'blue' && 'text-blue-900',
                        scheme === 'violet' && 'text-violet-900',
                        scheme === 'fuchsia' && 'text-fuchsia-900',
                        scheme === 'rose' && 'text-rose-900',
                    )}
                    Icon={ChevronRightSvg}
                />
            </View>
        </Link>
    );
};

export const HymnIndexFirstLineCardDark = ({
    ordinal,
    hymn,
    first = false,
    last = false,
    scheme = 'slate',
}: HymnIndexProps) => {
    return (
        <Link
            href={{
                pathname: '/(hymns)/hymn',
                params: { number: hymn.ordinal, scheme },
            }}
            asChild>
            <View
                className={cn(
                    'flex-row items-center gap-x-4 border border-transparent rounded-md px-4 py-3 bg-slate-800',
                    first && 'rounded-t-2xl',
                    last && 'rounded-b-2xl',
                    ordinal % 5 === 1 && 'rounded-t-2xl',
                    ordinal % 5 === 0 && 'rounded-b-2xl mb-8',
                )}>
                <IconSvg
                    className={cn(
                        'border-2 border-transparent rounded-full items-center justify-center size-12',
                        scheme === 'slate' && 'bg-slate-300',
                        scheme === 'red' && 'bg-red-300',
                        scheme === 'orange' && 'bg-orange-300',
                        scheme === 'green' && 'bg-green-300',
                        scheme === 'teal' && 'bg-teal-300',
                        scheme === 'cyan' && 'bg-cyan-300',
                        scheme === 'blue' && 'bg-blue-300',
                        scheme === 'violet' && 'bg-violet-300',
                        scheme === 'fuchsia' && 'bg-fuchsia-300',
                        scheme === 'rose' && 'bg-rose-300',
                    )}
                    iconClassName={cn(
                        'size-6',
                        scheme === 'slate' && 'text-slate-950',
                        scheme === 'red' && 'text-red-950',
                        scheme === 'orange' && 'text-orange-950',
                        scheme === 'green' && 'text-green-950',
                        scheme === 'teal' && 'text-teal-950',
                        scheme === 'cyan' && 'text-cyan-950',
                        scheme === 'blue' && 'text-blue-950',
                        scheme === 'violet' && 'text-violet-950',
                        scheme === 'fuchsia' && 'text-fuchsia-950',
                        scheme === 'rose' && 'text-rose-950',
                    )}
                    Icon={HymnSvg}
                />

                <Text
                    className={cn(
                        'font-googlesans-medium text-2xl text-white',
                    )}>
                    {hymn.ordinal}
                </Text>

                <View className="flex-1">
                    <Text
                        className={cn(
                            'font-googlesans-medium text-lg text-white line-clamp-1',
                        )}>
                        {hymn.preview}
                    </Text>
                    <Text className="font-googlesans-regular text-base line-clamp-1 text-slate-300">
                        Stanzas:{' '}
                        <Text className="font-googlesans-medium">
                            {hymn.number_of_stanzas}
                        </Text>
                    </Text>
                </View>

                <IconSvg
                    className={cn(
                        'rounded-full items-center justify-center size-4',
                    )}
                    iconClassName={cn('size-3 text-slate-300')}
                    Icon={ChevronRightSvg}
                />
            </View>
        </Link>
    );
};
