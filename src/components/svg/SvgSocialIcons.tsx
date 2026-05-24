import Svg, {
    ClipPath,
    Defs,
    FeGaussianBlur,
    Filter,
    G,
    LinearGradient,
    Path,
    RadialGradient,
    Rect,
    Stop,
    SvgProps,
} from 'react-native-svg';
import { styled } from 'nativewind';

const StyledSvg = styled(Svg);

export function AppleSvg({
    className,
    ...props
}: SvgProps & { focused?: boolean; className?: string }) {
    return (
        <StyledSvg
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeLinecap="round" // ✅ camelCase
            className={className}
            {...props}>
            <Path
                fill="currentColor"
                d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701"
            />
        </StyledSvg>
    );
}

export function GoogleSvg({
    className,
    ...props
}: SvgProps & { focused?: boolean; className?: string }) {
    return (
        <StyledSvg
            viewBox="0 0 268.152 273.883"
            className={className}
            {...props}>
            <Defs>
                <LinearGradient id="google__a">
                    <Stop offset="0" stopColor="#0fbc5c" />
                    <Stop offset="1" stopColor="#0cba65" />
                </LinearGradient>
                <LinearGradient id="google__g">
                    <Stop offset="0.231" stopColor="#0fbc5f" />
                    <Stop offset="0.312" stopColor="#0fbc5f" />
                    <Stop offset="0.366" stopColor="#0fbc5e" />
                    <Stop offset="0.458" stopColor="#0fbc5d" />
                    <Stop offset="0.54" stopColor="#12bc58" />
                    <Stop offset="0.699" stopColor="#28bf3c" />
                    <Stop offset="0.771" stopColor="#38c02b" />
                    <Stop offset="0.861" stopColor="#52c218" />
                    <Stop offset="0.915" stopColor="#67c30f" />
                    <Stop offset="1" stopColor="#86c504" />
                </LinearGradient>
                <LinearGradient id="google__h">
                    <Stop offset="0.142" stopColor="#1abd4d" />
                    <Stop offset="0.248" stopColor="#6ec30d" />
                    <Stop offset="0.312" stopColor="#8ac502" />
                    <Stop offset="0.366" stopColor="#a2c600" />
                    <Stop offset="0.446" stopColor="#c8c903" />
                    <Stop offset="0.54" stopColor="#ebcb03" />
                    <Stop offset="0.616" stopColor="#f7cd07" />
                    <Stop offset="0.699" stopColor="#fdcd04" />
                    <Stop offset="0.771" stopColor="#fdce05" />
                    <Stop offset="0.861" stopColor="#ffce0a" />
                </LinearGradient>
                <LinearGradient id="google__f">
                    <Stop offset="0.316" stopColor="#ff4c3c" />
                    <Stop offset="0.604" stopColor="#ff692c" />
                    <Stop offset="0.727" stopColor="#ff7825" />
                    <Stop offset="0.885" stopColor="#ff8d1b" />
                    <Stop offset="1" stopColor="#ff9f13" />
                </LinearGradient>
                <LinearGradient id="google__b">
                    <Stop offset="0.231" stopColor="#ff4541" />
                    <Stop offset="0.312" stopColor="#ff4540" />
                    <Stop offset="0.458" stopColor="#ff4640" />
                    <Stop offset="0.54" stopColor="#ff473f" />
                    <Stop offset="0.699" stopColor="#ff5138" />
                    <Stop offset="0.771" stopColor="#ff5b33" />
                    <Stop offset="0.861" stopColor="#ff6c29" />
                    <Stop offset="1" stopColor="#ff8c18" />
                </LinearGradient>
                <LinearGradient id="google__d">
                    <Stop offset="0.408" stopColor="#fb4e5a" />
                    <Stop offset="1" stopColor="#ff4540" />
                </LinearGradient>
                <LinearGradient id="google__c">
                    <Stop offset="0.132" stopColor="#0cba65" />
                    <Stop offset="0.21" stopColor="#0bb86d" />
                    <Stop offset="0.297" stopColor="#09b479" />
                    <Stop offset="0.396" stopColor="#08ad93" />
                    <Stop offset="0.477" stopColor="#0aa6a9" />
                    <Stop offset="0.568" stopColor="#0d9cc6" />
                    <Stop offset="0.667" stopColor="#1893dd" />
                    <Stop offset="0.769" stopColor="#258bf1" />
                    <Stop offset="0.859" stopColor="#3086ff" />
                </LinearGradient>
                <LinearGradient id="google__e">
                    <Stop offset="0.366" stopColor="#ff4e3a" />
                    <Stop offset="0.458" stopColor="#ff8a1b" />
                    <Stop offset="0.54" stopColor="#ffa312" />
                    <Stop offset="0.616" stopColor="#ffb60c" />
                    <Stop offset="0.771" stopColor="#ffcd0a" />
                    <Stop offset="0.861" stopColor="#fecf0a" />
                    <Stop offset="0.915" stopColor="#fecf08" />
                    <Stop offset="1" stopColor="#fdcd01" />
                </LinearGradient>
                <LinearGradient
                    id="google__s"
                    x1="219.7"
                    x2="254.467"
                    y1="329.535"
                    y2="329.535"
                    gradientUnits="userSpaceOnUse">
                    <Stop offset="0" stopColor="#0fbc5c" />
                    <Stop offset="1" stopColor="#0cba65" />
                </LinearGradient>
                <RadialGradient
                    id="google__m"
                    cx="109.627"
                    cy="135.862"
                    r="71.46"
                    fx="109.627"
                    fy="135.862"
                    gradientTransform="matrix(-1.93688 1.043 1.45573 2.55542 290.525 -400.634)"
                    gradientUnits="userSpaceOnUse">
                    <Stop offset="0.231" stopColor="#ff4541" />
                    <Stop offset="0.312" stopColor="#ff4540" />
                    <Stop offset="0.458" stopColor="#ff4640" />
                    <Stop offset="0.54" stopColor="#ff473f" />
                    <Stop offset="0.699" stopColor="#ff5138" />
                    <Stop offset="0.771" stopColor="#ff5b33" />
                    <Stop offset="0.861" stopColor="#ff6c29" />
                    <Stop offset="1" stopColor="#ff8c18" />
                </RadialGradient>
                <RadialGradient
                    id="google__n"
                    cx="45.259"
                    cy="279.274"
                    r="71.46"
                    fx="45.259"
                    fy="279.274"
                    gradientTransform="matrix(-3.5126 -4.45809 -1.69255 1.26062 870.8 191.554)"
                    gradientUnits="userSpaceOnUse">
                    <Stop offset="0.132" stopColor="#0cba65" />
                    <Stop offset="0.21" stopColor="#0bb86d" />
                    <Stop offset="0.297" stopColor="#09b479" />
                    <Stop offset="0.396" stopColor="#08ad93" />
                    <Stop offset="0.477" stopColor="#0aa6a9" />
                    <Stop offset="0.568" stopColor="#0d9cc6" />
                    <Stop offset="0.667" stopColor="#1893dd" />
                    <Stop offset="0.769" stopColor="#258bf1" />
                    <Stop offset="0.859" stopColor="#3086ff" />
                </RadialGradient>
                <RadialGradient
                    id="google__l"
                    cx="304.017"
                    cy="118.009"
                    r="47.854"
                    fx="304.017"
                    fy="118.009"
                    gradientTransform="matrix(2.06435 0 0 2.59204 -297.679 -151.747)"
                    gradientUnits="userSpaceOnUse">
                    <Stop offset="0.408" stopColor="#fb4e5a" />
                    <Stop offset="1" stopColor="#ff4540" />
                </RadialGradient>
                <RadialGradient
                    id="google__o"
                    cx="181.001"
                    cy="177.201"
                    r="71.46"
                    fx="181.001"
                    fy="177.201"
                    gradientTransform="matrix(-0.24858 2.08314 2.96249 0.33417 -255.146 -331.164)"
                    gradientUnits="userSpaceOnUse">
                    <Stop offset="0.366" stopColor="#ff4e3a" />
                    <Stop offset="0.458" stopColor="#ff8a1b" />
                    <Stop offset="0.54" stopColor="#ffa312" />
                    <Stop offset="0.616" stopColor="#ffb60c" />
                    <Stop offset="0.771" stopColor="#ffcd0a" />
                    <Stop offset="0.861" stopColor="#fecf0a" />
                    <Stop offset="0.915" stopColor="#fecf08" />
                    <Stop offset="1" stopColor="#fdcd01" />
                </RadialGradient>
                <RadialGradient
                    id="google__p"
                    cx="207.673"
                    cy="108.097"
                    r="41.102"
                    fx="207.673"
                    fy="108.097"
                    gradientTransform="matrix(-1.2492 1.34326 -3.89684 -3.4257 880.501 194.905)"
                    gradientUnits="userSpaceOnUse">
                    <Stop offset="0.316" stopColor="#ff4c3c" />
                    <Stop offset="0.604" stopColor="#ff692c" />
                    <Stop offset="0.727" stopColor="#ff7825" />
                    <Stop offset="0.885" stopColor="#ff8d1b" />
                    <Stop offset="1" stopColor="#ff9f13" />
                </RadialGradient>
                <RadialGradient
                    id="google__r"
                    cx="109.627"
                    cy="135.862"
                    r="71.46"
                    fx="109.627"
                    fy="135.862"
                    gradientTransform="matrix(-1.93688 -1.043 1.45573 -2.55542 290.525 838.683)"
                    gradientUnits="userSpaceOnUse">
                    <Stop offset="0.231" stopColor="#0fbc5f" />
                    <Stop offset="0.312" stopColor="#0fbc5f" />
                    <Stop offset="0.366" stopColor="#0fbc5e" />
                    <Stop offset="0.458" stopColor="#0fbc5d" />
                    <Stop offset="0.54" stopColor="#12bc58" />
                    <Stop offset="0.699" stopColor="#28bf3c" />
                    <Stop offset="0.771" stopColor="#38c02b" />
                    <Stop offset="0.861" stopColor="#52c218" />
                    <Stop offset="0.915" stopColor="#67c30f" />
                    <Stop offset="1" stopColor="#86c504" />
                </RadialGradient>
                <RadialGradient
                    id="google__j"
                    cx="154.87"
                    cy="145.969"
                    r="71.46"
                    fx="154.87"
                    fy="145.969"
                    gradientTransform="matrix(-0.0814 -1.93722 2.92674 -0.11625 -215.135 632.86)"
                    gradientUnits="userSpaceOnUse">
                    <Stop offset="0.142" stopColor="#1abd4d" />
                    <Stop offset="0.248" stopColor="#6ec30d" />
                    <Stop offset="0.312" stopColor="#8ac502" />
                    <Stop offset="0.366" stopColor="#a2c600" />
                    <Stop offset="0.446" stopColor="#c8c903" />
                    <Stop offset="0.54" stopColor="#ebcb03" />
                    <Stop offset="0.616" stopColor="#f7cd07" />
                    <Stop offset="0.699" stopColor="#fdcd04" />
                    <Stop offset="0.771" stopColor="#fdce05" />
                    <Stop offset="0.861" stopColor="#ffce0a" />
                </RadialGradient>
                <Filter
                    id="google__q"
                    x="-0.048"
                    y="-0.058"
                    width="1.097"
                    height="1.116">
                    <FeGaussianBlur stdDeviation="1.701" />
                </Filter>
                <Filter
                    id="google__k"
                    x="-0.017"
                    y="-0.01"
                    width="1.033"
                    height="1.02">
                    <FeGaussianBlur stdDeviation="0.242" />
                </Filter>
                <ClipPath id="google__i">
                    <Path d="M371.378 193.24H237.083v53.438h77.167c-1.241 7.563-4.026 15.003-8.105 21.786-4.674 7.773-10.451 13.69-16.373 18.196-17.74 13.498-38.42 16.258-52.783 16.258-36.283 0-67.283-23.286-79.285-54.928-.484-1.149-.805-2.335-1.197-3.507a81.115 81.115 0 0 1-4.101-25.448c0-9.226 1.569-18.057 4.43-26.398 11.285-32.897 42.985-57.467 80.179-57.467 7.481 0 14.685.884 21.517 2.648a77.668 77.668 0 0 1 33.425 18.25l40.834-39.712c-24.839-22.616-57.219-36.32-95.844-36.32-30.878 0-59.386 9.553-82.748 25.7-18.945 13.093-34.483 30.625-44.97 50.985-9.753 18.879-15.094 39.8-15.094 62.294 0 22.495 5.35 43.633 15.103 62.337v.126c10.302 19.857 25.368 36.954 43.678 49.988 15.997 11.386 44.68 26.551 84.031 26.551 22.63 0 42.687-4.051 60.375-11.644 12.76-5.478 24.065-12.622 34.301-21.804 13.525-12.132 24.117-27.139 31.347-44.404 7.23-17.265 11.097-36.79 11.097-57.957 0-9.858-.998-19.87-2.689-28.968Z" />
                </ClipPath>
            </Defs>
            <G
                clipPath="url(#google__i)"
                transform="matrix(0.95792 0 0 0.98525 -90.174 -78.856)">
                <Path
                    fill="url(#google__j)"
                    filter="url(#google__k)"
                    d="M92.076 219.958c.148 22.14 6.501 44.983 16.117 63.424v.127c6.949 13.392 16.445 23.97 27.26 34.452l65.327-23.67c-12.36-6.235-14.246-10.055-23.105-17.026-9.054-9.066-15.802-19.473-20.004-31.677h-.17l.17-.127c-2.765-8.058-3.037-16.613-3.14-25.503Z"
                />
                <Path
                    fill="url(#google__l)"
                    filter="url(#google__k)"
                    d="M237.083 79.025c-6.456 22.526-3.988 44.421 0 57.161 7.457.006 14.64.888 21.45 2.647a77.662 77.662 0 0 1 33.424 18.25l41.88-40.726c-24.81-22.59-54.667-37.297-96.754-37.332Z"
                />
                <Path
                    fill="url(#google__m)"
                    filter="url(#google__k)"
                    d="M236.943 78.847c-31.67 0-60.91 9.798-84.871 26.359a145.533 145.533 0 0 0-24.332 21.15c-1.904 17.744 14.257 39.551 46.262 39.37 15.528-17.936 38.495-29.542 64.056-29.542l.07.002-1.044-57.335c-.048 0-.093-.004-.14-.004Z"
                />
                <Path
                    fill="url(#google__n)"
                    filter="url(#google__k)"
                    d="m341.475 226.379-28.268 19.285c-1.24 7.562-4.028 15.002-8.107 21.786-4.674 7.772-10.45 13.69-16.373 18.196-17.702 13.47-38.328 16.244-52.687 16.255-14.842 25.102-17.444 37.675 1.043 57.934 22.877-.016 43.157-4.117 61.046-11.796 12.931-5.551 24.388-12.792 34.761-22.097 13.706-12.295 24.442-27.503 31.769-45 7.327-17.497 11.245-37.282 11.245-58.734Z"
                />
                <Path
                    fill="#3086ff"
                    filter="url(#google__k)"
                    d="M234.996 191.21v57.498h136.006c1.196-7.874 5.152-18.064 5.152-26.5 0-9.858-.996-21.899-2.687-30.998Z"
                />
                <Path
                    fill="url(#google__o)"
                    filter="url(#google__k)"
                    d="M128.39 124.327c-8.394 9.119-15.564 19.326-21.249 30.364-9.753 18.879-15.094 41.83-15.094 64.324 0 .317.026.627.029.944 4.32 8.224 59.666 6.649 62.456 0-.004-.31-.039-.613-.039-.924 0-9.226 1.57-16.026 4.43-24.367 3.53-10.289 9.056-19.763 16.123-27.926 1.602-2.031 5.875-6.397 7.121-9.016.475-.997-.862-1.557-.937-1.908-.083-.393-1.876-.077-2.277-.37-1.275-.929-3.8-1.414-5.334-1.845-3.277-.921-8.708-2.953-11.725-5.06-9.536-6.658-24.417-14.612-33.505-24.216Z"
                />
                <Path
                    fill="url(#google__p)"
                    filter="url(#google__q)"
                    d="M162.099 155.857c22.112 13.301 28.471-6.714 43.173-12.977l-25.574-52.664a144.74 144.74 0 0 0-26.543 14.504c-12.316 8.512-23.192 18.9-32.176 30.72Z"
                />
                <Path
                    fill="url(#google__r)"
                    filter="url(#google__k)"
                    d="M171.099 290.222c-29.683 10.641-34.33 11.023-37.062 29.29a144.806 144.806 0 0 0 16.792 13.984c15.996 11.386 46.766 26.551 86.118 26.551.046 0 .09-.004.137-.004v-59.157l-.094.002c-14.736 0-26.512-3.843-38.585-10.527-2.977-1.648-8.378 2.777-11.123.799-3.786-2.729-12.9 2.35-16.183-.938Z"
                />
                <Path
                    fill="url(#google__s)"
                    filter="url(#google__k)"
                    opacity="0.5"
                    d="M219.7 299.023v59.996c5.506.64 11.236 1.028 17.247 1.028 6.026 0 11.855-.307 17.52-.872v-59.748a105.119 105.119 0 0 1-17.477 1.461c-5.932 0-11.7-.686-17.29-1.865Z"
                />
            </G>
        </StyledSvg>
    );
}
