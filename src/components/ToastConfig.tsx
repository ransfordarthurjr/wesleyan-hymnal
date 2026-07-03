import { Text, View } from 'react-native';
import { BaseToastProps, ToastConfig } from 'react-native-toast-message';

import { cn } from '@/utils/utility';

import { IconComponent, SchemeType } from '@/types/app.types';

import IconSvg from '@/components/Icon';
import { ToastInfoSvg } from '@/components/svg/SvgIcons';

interface ToasterProps extends BaseToastProps {
    props: {
        scheme: SchemeType;
        icon?: IconComponent;
    };
}

export const CustomToastConfig: ToastConfig = {
    toaster: ({ text1, props }: ToasterProps) => (
        <View
            className={cn(
                'border-4 rounded-2xl p-4 max-w-10/12 shadow-2xl',
                props.scheme === 'slate' &&
                    'border-slate-100 bg-slate-300 shadow-slate-50',
                props.scheme === 'red' &&
                    'border-red-100 bg-red-300 shadow-red-50',
                props.scheme === 'orange' &&
                    'border-orange-100 bg-orange-300 shadow-orange-50',
                props.scheme === 'green' &&
                    'border-green-100 bg-green-300 shadow-green-50',
                props.scheme === 'teal' &&
                    'border-teal-100 bg-teal-300 shadow-teal-50',
                props.scheme === 'cyan' &&
                    'border-cyan-100 bg-cyan-300 shadow-cyan-50',
                props.scheme === 'blue' &&
                    'border-blue-100 bg-blue-300 shadow-blue-50',
                props.scheme === 'violet' &&
                    'border-violet-100 bg-violet-300 shadow-violet-50',
                props.scheme === 'fuchsia' &&
                    'border-fuchsia-100 bg-fuchsia-300 shadow-fuchsia-50',
                props.scheme === 'rose' &&
                    'border-rose-100 bg-rose-300 shadow-rose-50',
                props.scheme === 'sky' &&
                    'border-sky-100 bg-sky-300 shadow-sky-50',
            )}>
            <View className="flex-row items-center gap-x-2 w-full">
                <IconSvg
                    className="shrink-0 flex items-center justify-center rounded-full size-10"
                    iconClassName={cn(
                        'size-8',
                        props.scheme === 'slate' && 'text-slate-900',
                        props.scheme === 'red' && 'text-red-900',
                        props.scheme === 'orange' && 'text-orange-900',
                        props.scheme === 'green' && 'text-green-900',
                        props.scheme === 'teal' && 'text-teal-900',
                        props.scheme === 'cyan' && 'text-cyan-900',
                        props.scheme === 'blue' && 'text-blue-900',
                        props.scheme === 'violet' && 'text-violet-900',
                        props.scheme === 'fuchsia' && 'text-fuchsia-900',
                        props.scheme === 'rose' && 'text-rose-900',
                        props.scheme === 'sky' && 'text-sky-900',
                    )}
                    Icon={props.icon ?? ToastInfoSvg}
                />

                <Text
                    className={cn(
                        'flex-1 font-googlesans-medium text-base text-amber-900 line-clamp-2',
                        props.scheme === 'slate' && 'text-slate-900',
                        props.scheme === 'red' && 'text-red-900',
                        props.scheme === 'orange' && 'text-orange-900',
                        props.scheme === 'green' && 'text-green-900',
                        props.scheme === 'teal' && 'text-teal-900',
                        props.scheme === 'cyan' && 'text-cyan-900',
                        props.scheme === 'blue' && 'text-blue-900',
                        props.scheme === 'violet' && 'text-violet-900',
                        props.scheme === 'fuchsia' && 'text-fuchsia-900',
                        props.scheme === 'rose' && 'text-rose-900',
                        props.scheme === 'sky' && 'text-sky-900',
                    )}>
                    {text1}
                </Text>
            </View>
        </View>
    ),
};
