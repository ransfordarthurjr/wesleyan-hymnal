import { View, Text } from 'react-native';
import { Link } from 'expo-router';

import { LinkCardProps } from '@/types/app.types';
import { cn } from '@/utils/utility';

import IconSvg from '@/components/Icon';

export const LinkCard = ({
    scheme = 'slate',
    pathname,
    params,
    Icon,
    title,
    first = false,
    last = false,
}: LinkCardProps) => {
    console.log('scheme-type', scheme);
    return (
        <Link
            href={{
                pathname: pathname,
                params: params,
            }}
            asChild>
            <View
                className={cn(
                    'flex-row items-center rounded-md gap-x-4 px-5 py-3.5 bg-indigo-950',
                    first && 'rounded-t-2xl',
                    last && 'rounded-b-2xl',
                )}>
                <IconSvg
                    className={cn(
                        'flex items-center justify-center rounded-full size-11 ',
                        scheme === 'slate' && ' bg-slate-300',
                        scheme === 'red' && ' bg-red-300',
                        scheme === 'orange' && ' bg-orange-300',
                        scheme === 'green' && ' bg-green-300',
                        scheme === 'teal' && ' bg-teal-300',
                        scheme === 'cyan' && ' bg-cyan-300',
                        scheme === 'blue' && ' bg-blue-300',
                        scheme === 'violet' && ' bg-violet-300',
                        scheme === 'fuchsia' && ' bg-fuchsia-300',
                        scheme === 'rose' && ' bg-rose-300',
                        scheme === 'sky' && ' bg-sky-300',
                    )}
                    iconClassName={cn(
                        'size-7',
                        scheme === 'slate' && ' text-slate-800',
                        scheme === 'red' && ' text-red-800',
                        scheme === 'orange' && ' text-orange-800',
                        scheme === 'green' && ' text-green-800',
                        scheme === 'teal' && ' text-teal-800',
                        scheme === 'cyan' && ' text-cyan-800',
                        scheme === 'blue' && ' text-blue-800',
                        scheme === 'violet' && ' text-violet-800',
                        scheme === 'fuchsia' && ' text-fuchsia-800',
                        scheme === 'rose' && ' text-rose-800',
                        scheme === 'sky' && ' text-sky-800',
                    )}
                    Icon={Icon}
                />
                <Text className="font-googlesans-medium text-lg text-white">
                    {title}
                </Text>
            </View>
        </Link>
    );
};
