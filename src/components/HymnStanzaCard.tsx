import { View, Text } from 'react-native';

import { cn } from '@/utils/utility';

import { HymnStanzaProps } from '@/types/app.types';

import IconSvg from './Icon';
import { HymnSvg } from './svg/SvgIcons';

export const HymnStanzaCard = ({
    stanza,
    scheme = 'slate',
}: HymnStanzaProps) => {
    return (
        <View className="gap-y-2 px-4">
            <Text className="font-googlesans-regular text-xl">
                Stanza {stanza.stanza}
            </Text>
            <View>
                {stanza.lines.map((line, index) => (
                    <Text
                        key={index}
                        className="font-literata-mediumitalic text-2xl text-indigo-900">
                        {line}
                    </Text>
                ))}
            </View>
            <View className="flex-row items-center w-full h-8 ">
                <View
                    className={cn(
                        'flex-1 flex-row items-center rounded-full h-px w-full',
                        scheme === 'slate' && 'bg-slate-100',
                        scheme === 'red' && 'bg-red-100',
                        scheme === 'orange' && 'bg-orange-100',
                        scheme === 'green' && 'bg-green-100',
                        scheme === 'teal' && 'bg-teal-100',
                        scheme === 'cyan' && 'bg-cyan-100',
                        scheme === 'blue' && 'bg-blue-100',
                        scheme === 'violet' && 'bg-violet-100',
                        scheme === 'fuchsia' && 'bg-fuchsia-100',
                        scheme === 'rose' && 'bg-rose-100',
                    )}></View>
                <IconSvg
                    className="shrink-0 rounded-full items-center justify-center size-8"
                    iconClassName={cn(
                        'size-4',
                        scheme === 'slate' && 'text-slate-100',
                        scheme === 'red' && 'text-red-100',
                        scheme === 'orange' && 'text-orange-100',
                        scheme === 'green' && 'text-green-100',
                        scheme === 'teal' && 'text-teal-100',
                        scheme === 'cyan' && 'text-cyan-100',
                        scheme === 'blue' && 'text-blue-100',
                        scheme === 'violet' && 'text-violet-100',
                        scheme === 'fuchsia' && 'text-fuchsia-100',
                        scheme === 'rose' && 'text-rose-100',
                    )}
                    Icon={HymnSvg}
                />
                <View
                    className={cn(
                        'flex-1 flex-row items-center rounded-full h-px w-full',
                        scheme === 'slate' && 'bg-slate-100',
                        scheme === 'red' && 'bg-red-100',
                        scheme === 'orange' && 'bg-orange-100',
                        scheme === 'green' && 'bg-green-100',
                        scheme === 'teal' && 'bg-teal-100',
                        scheme === 'cyan' && 'bg-cyan-100',
                        scheme === 'blue' && 'bg-blue-100',
                        scheme === 'violet' && 'bg-violet-100',
                        scheme === 'fuchsia' && 'bg-fuchsia-100',
                        scheme === 'rose' && 'bg-rose-100',
                    )}></View>
            </View>
        </View>
    );
};

export const HymnStanzaCardV2 = ({
    stanza,
    scheme = 'slate',
    stanzaFontSize = 'text-2xl',
    stanzaFontFace = 'font-literata-mediumitalic',
}: HymnStanzaProps) => {
    return (
        <View className="gap-y-2 px-4">
            <Text className="font-googlesans-regular text-xl">
                Stanza {stanza.stanza}
            </Text>
            <View>
                {stanza.lines.map((line, index) => (
                    <Text
                        key={index}
                        className={cn(
                            'text-indigo-900',
                            stanzaFontFace,
                            stanzaFontSize,
                        )}>
                        {line}
                    </Text>
                ))}
            </View>
            <View className="flex-row items-center w-full h-8 ">
                <View
                    className={cn(
                        'flex-1 flex-row items-center rounded-full h-px w-full',
                        scheme === 'slate' && 'bg-slate-100',
                        scheme === 'red' && 'bg-red-100',
                        scheme === 'orange' && 'bg-orange-100',
                        scheme === 'green' && 'bg-green-100',
                        scheme === 'teal' && 'bg-teal-100',
                        scheme === 'cyan' && 'bg-cyan-100',
                        scheme === 'blue' && 'bg-blue-100',
                        scheme === 'violet' && 'bg-violet-100',
                        scheme === 'fuchsia' && 'bg-fuchsia-100',
                        scheme === 'rose' && 'bg-rose-100',
                    )}></View>
                <IconSvg
                    className="shrink-0 rounded-full items-center justify-center size-8"
                    iconClassName={cn(
                        'size-4',
                        scheme === 'slate' && 'text-slate-100',
                        scheme === 'red' && 'text-red-100',
                        scheme === 'orange' && 'text-orange-100',
                        scheme === 'green' && 'text-green-100',
                        scheme === 'teal' && 'text-teal-100',
                        scheme === 'cyan' && 'text-cyan-100',
                        scheme === 'blue' && 'text-blue-100',
                        scheme === 'violet' && 'text-violet-100',
                        scheme === 'fuchsia' && 'text-fuchsia-100',
                        scheme === 'rose' && 'text-rose-100',
                    )}
                    Icon={HymnSvg}
                />
                <View
                    className={cn(
                        'flex-1 flex-row items-center rounded-full h-px w-full',
                        scheme === 'slate' && 'bg-slate-100',
                        scheme === 'red' && 'bg-red-100',
                        scheme === 'orange' && 'bg-orange-100',
                        scheme === 'green' && 'bg-green-100',
                        scheme === 'teal' && 'bg-teal-100',
                        scheme === 'cyan' && 'bg-cyan-100',
                        scheme === 'blue' && 'bg-blue-100',
                        scheme === 'violet' && 'bg-violet-100',
                        scheme === 'fuchsia' && 'bg-fuchsia-100',
                        scheme === 'rose' && 'bg-rose-100',
                    )}></View>
            </View>
        </View>
    );
};

export default HymnStanzaCard;
