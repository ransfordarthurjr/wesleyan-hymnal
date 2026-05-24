import { Image, View, Text } from 'react-native';

import IconSvg from './Icon';
import { ChevronRightSvg } from './svg/SvgIcons';

const AboutAuthorPreviewCard = () => {
    return (
        <View className="gap-y-0.5 rounded-2xl p-4 bg-indigo-100">
            <View className="flex-row items-center justify-between">
                <Text className="font-googlesans-medium text-lg text-slate-800">
                    Charles Wesley
                </Text>

                <Text className="font-googlesans-regular text-slate-800">
                    About an author
                </Text>
            </View>

            <View className="flex-row items-center gap-x-2">
                <View className="rounded-full size-20 bg-indigo-500">
                    <Image
                        source={{
                            uri: 'https://upload.wikimedia.org/wikipedia/commons/e/e2/Charles_Wesley.jpg?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original',
                        }}
                        className="rounded-full size-20 bg-indigo-500 object-cover"
                    />
                </View>

                <Text className="flex-1 px-2 py-4 font-googlesans-regular text-base text-slate-800 line-clamp-2">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptate at modi dolor blanditiis commodi perferendis
                    aspernatur totam, quod obcaecati id voluptatibus consequatur
                    similique delectus, aliquid, omnis tempore incidunt? Ipsam,
                    cumque?
                </Text>

                <IconSvg
                    className="rounded-full items-center justify-center size-10"
                    iconClassName="size-6 text-indigo-800"
                    Icon={ChevronRightSvg}
                />
            </View>

            <View></View>
        </View>
    );
};

export default AboutAuthorPreviewCard;
