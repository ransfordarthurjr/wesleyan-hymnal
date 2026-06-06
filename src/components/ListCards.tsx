import { Text, Pressable, View } from 'react-native';
import { router } from 'expo-router';

import { ListCardProps } from '@/types/app.types';
import { cn } from '@/utils/utility';

import IconSvg from '@/components/Icon';
import SwitchControl from '@/components/Swtich';

export const ListCard = ({
    scheme = 'slate',
    variant = 'solid',
    id,
    label,
    mode,
    Icon,
    first = false,
    last = false,
}: ListCardProps) => {
    const handlePress = () => {
        switch (mode.mode) {
            case 'link':
                router.push({
                    pathname: mode.link.pathname,
                    params: mode.link.params,
                });
                break;

            case 'action':
                mode.action.fxn();
                break;

            case 'toggle':
                // ✅ derive next value from prop, not local state
                const next = !mode.toggle.isToggled;
                mode.toggle.onToggle?.(next);
                break;
        }
    };

    return (
        <Pressable
            onPress={handlePress}
            className={cn(
                'flex-row items-center border border-indigo-950 rounded-md gap-x-4 px-5 py-2.5',
                first && 'rounded-t-2xl',
                last && 'rounded-b-2xl',
                variant === 'solid' && 'bg-indigo-950',
                variant === 'outline' &&
                    scheme === 'slate' &&
                    'border-slate-300 bg-slate-50',
                variant === 'outline' &&
                    scheme === 'red' &&
                    'border-red-300 bg-red-50',
                variant === 'outline' &&
                    scheme === 'orange' &&
                    'border-orange-300 bg-orange-50',
                variant === 'outline' &&
                    scheme === 'green' &&
                    'border-green-300 bg-green-50',
                variant === 'outline' &&
                    scheme === 'teal' &&
                    'border-teal-300 bg-teal-50',
                variant === 'outline' &&
                    scheme === 'cyan' &&
                    'border-cyan-300 bg-cyan-50',
                variant === 'outline' &&
                    scheme === 'blue' &&
                    'border-blue-300 bg-blue-50',
                variant === 'outline' &&
                    scheme === 'violet' &&
                    'border-violet-300 bg-violet-50',
                variant === 'outline' &&
                    scheme === 'fuchsia' &&
                    'border-fuchsia-300 bg-fuchsia-50',
                variant === 'outline' &&
                    scheme === 'rose' &&
                    'border-rose-300 bg-rose-50',
                variant === 'outline' &&
                    scheme === 'sky' &&
                    'border-sky-300 bg-sky-50',
            )}>
            <IconSvg
                className={cn(
                    'flex items-center justify-center rounded-full size-11',
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
                    scheme === 'sky' && 'bg-sky-300',
                )}
                iconClassName={cn(
                    'size-7',
                    scheme === 'slate' && 'text-slate-800',
                    scheme === 'red' && 'text-red-800',
                    scheme === 'orange' && 'text-orange-800',
                    scheme === 'green' && 'text-green-800',
                    scheme === 'teal' && 'text-teal-800',
                    scheme === 'cyan' && 'text-cyan-800',
                    scheme === 'blue' && 'text-blue-800',
                    scheme === 'violet' && 'text-violet-800',
                    scheme === 'fuchsia' && 'text-fuchsia-800',
                    scheme === 'rose' && 'text-rose-800',
                    scheme === 'sky' && 'text-sky-800',
                )}
                Icon={Icon}
            />
            <View className="flex-1">
                <Text
                    className={cn(
                        'font-googlesans-medium text-lg line-clamp-1',
                        variant === 'solid' && 'text-white',
                        variant === 'outline' && 'text-slate-900',
                    )}>
                    {label}
                </Text>
            </View>

            {/* ✅ driven entirely by prop, no local state needed */}
            {mode.mode === 'toggle' && (
                <SwitchControl toogle={mode.toggle.isToggled} />
            )}
        </Pressable>
    );
};
