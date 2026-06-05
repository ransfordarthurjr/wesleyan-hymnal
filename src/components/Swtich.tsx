import React, { useEffect } from 'react';
import { View } from 'react-native';

import { cn } from '@/utils/utility';

import IconSvg from '@/components/Icon';
import { CheckSvg, XSvg } from '@/components/svg/SvgIcons';

const SwitchControl = ({ toogle = false }: { toogle: boolean }) => {
    const [isOn, setIsOn] = React.useState(false);

    useEffect(() => {
        setIsOn(toogle);
    }, [toogle]);

    return (
        <View
            className={cn(
                'border-2 border-slate-400 p-0.5 rounded-full w-14 bg-slate-100',
                isOn && 'border-indigo-300 bg-indigo-300',
            )}>
            <View
                className={cn(
                    'items-center justify-center rounded-full size-7 bg-slate-400',
                    isOn && 'bg-indigo-900',
                )}>
                <IconSvg
                    className={cn(
                        'rounded-full items-center justify-center size-4',
                    )}
                    iconClassName={cn(
                        'size-4 text-slate-900',
                        isOn && 'text-indigo-100',
                    )}
                    Icon={isOn ? CheckSvg : XSvg}
                />
            </View>
        </View>
    );
};

export default SwitchControl;
