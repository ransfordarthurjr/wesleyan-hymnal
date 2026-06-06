import React, { useEffect, useRef } from 'react';
import { View, Animated } from 'react-native';

import { cn } from '@/utils/utility';

import IconSvg from '@/components/Icon';
import { CheckSvg, XSvg } from '@/components/svg/SvgIcons';

const SwitchControl = ({ toogle = false }: { toogle: boolean }) => {
    const [isOn, setIsOn] = React.useState(false);
    const translateX = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        setIsOn(toogle);
        Animated.spring(translateX, {
            toValue: toogle ? 16 : 0,
            useNativeDriver: true,
            bounciness: 6,
        }).start();
    }, [toogle]);

    return (
        <View
            className={cn(
                'border-2 border-slate-400 p-0.5 rounded-full w-14 bg-slate-100',
                isOn && 'border-indigo-300 bg-indigo-300',
            )}>
            <Animated.View
                id="switch-control-knob"
                style={{ transform: [{ translateX }] }}
                className={cn(
                    'items-center justify-center rounded-full size-7 bg-slate-400',
                    isOn && 'bg-indigo-900',
                )}>
                <IconSvg
                    className={cn('items-center justify-center size-4')}
                    iconClassName={cn(
                        'size-3.5 text-slate-900',
                        isOn && 'text-indigo-100',
                    )}
                    Icon={isOn ? CheckSvg : XSvg}
                />
            </Animated.View>
        </View>
    );
};

export default SwitchControl;
