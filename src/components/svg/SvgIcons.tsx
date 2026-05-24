import Svg, { Circle, G, Path, SvgProps } from 'react-native-svg';
import { styled } from 'nativewind';

const StyledSvg = styled(Svg);

export function HomeSvg({
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
            <G fill="none" stroke="currentColor" strokeWidth="1.8">
                <Path d="M2.364 12.958c-.38-2.637-.57-3.956-.029-5.083s1.691-1.813 3.992-3.183l1.385-.825C9.8 2.622 10.846 2 12 2s2.199.622 4.288 1.867l1.385.825c2.3 1.37 3.451 2.056 3.992 3.183s.35 2.446-.03 5.083l-.278 1.937c-.487 3.388-.731 5.081-1.906 6.093S16.553 22 13.106 22h-2.212c-3.447 0-5.17 0-6.345-1.012s-1.419-2.705-1.906-6.093z" />
                <Path
                    strokeLinecap="round"
                    d="M9 16c.85.63 1.885 1 3 1s2.15-.37 3-1"
                />
            </G>
        </StyledSvg>
    );
}

export function BellSvg({
    className,
    ...props
}: SvgProps & { focused?: boolean; className?: string }) {
    return (
        <StyledSvg
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round" // ✅ camelCase
            className={className}
            {...props}>
            <Path
                fill="none"
                d="M9.107 2.674A6.5 6.5 0 0 1 12 2c3.727 0 6.75 3.136 6.75 7.005v.705a4.4 4.4 0 0 0 .692 2.375l1.108 1.724c1.011 1.575.239 3.716-1.52 4.214a25.8 25.8 0 0 1-14.06 0c-1.759-.498-2.531-2.639-1.52-4.213l1.108-1.725A4.4 4.4 0 0 0 5.25 9.71v-.705c0-1.074.233-2.092.65-3.002M7.5 19c.655 1.748 2.422 3 4.5 3q.367 0 .72-.05M16.5 19a4.5 4.5 0 0 1-1.302 1.84"
            />
        </StyledSvg>
    );
}

export function HeartSvg({
    className,
    ...props
}: SvgProps & { focused?: boolean; className?: string }) {
    return (
        <StyledSvg
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="0.5"
            strokeLinecap="round" // ✅ camelCase
            className={className}
            {...props}>
            <Path
                fill="currentColor"
                d="m12 5.5l-.54.52l.01.011zM8.962 18.91l-.465.59zm6.076 0l-.464-.588zm-8.037-2.49a.75.75 0 0 0-.954 1.16zm-4.659-3.009a.75.75 0 1 0 1.316-.72zm11.128-5.38a.75.75 0 1 0 1.06-1.062zM2.75 9.136c0-2.15 1.215-3.954 2.874-4.713c1.612-.737 3.778-.541 5.836 1.597l1.08-1.04C10.1 2.444 7.264 2.025 5 3.06C2.786 4.073 1.25 6.425 1.25 9.137zM8.497 19.5c.513.404 1.063.834 1.62 1.16s1.193.59 1.883.59v-1.5c-.31 0-.674-.12-1.126-.385c-.453-.264-.922-.628-1.448-1.043zm7.006 0c1.426-1.125 3.25-2.413 4.68-4.024c1.457-1.64 2.567-3.673 2.567-6.339h-1.5c0 2.198-.9 3.891-2.188 5.343c-1.315 1.48-2.972 2.647-4.488 3.842zM22.75 9.137c0-2.712-1.535-5.064-3.75-6.077c-2.264-1.035-5.098-.616-7.54 1.92l1.08 1.04c2.058-2.137 4.224-2.333 5.836-1.596c1.659.759 2.874 2.562 2.874 4.713zm-8.176 9.185c-.526.415-.995.779-1.448 1.043s-.816.385-1.126.385v1.5c.69 0 1.326-.265 1.883-.59c.558-.326 1.107-.756 1.62-1.16zm-5.148 0c-.796-.627-1.605-1.226-2.425-1.901l-.954 1.158c.83.683 1.708 1.335 2.45 1.92zm-5.768-5.63a7.25 7.25 0 0 1-.908-3.555h-1.5c0 1.638.42 3.046 1.092 4.275zm7.812-6.66l2 1.998l1.06-1.06l-2-2z"
            />
        </StyledSvg>
    );
}

export function HymnSvg({
    focused = false,
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
            <G fill="none" stroke="currentColor" strokeWidth="1.6">
                <Path strokeLinecap="round" d="M13 18V2" opacity="0.5" />
                <Circle cx="9" cy="18" r="4" />
                <Path strokeLinecap="round" d="M19 8a6 6 0 0 1-6-6" />
            </G>
        </StyledSvg>
    );
}

export function ShareSvg({
    focused = false,
    className,
    ...props
}: SvgProps & { focused?: boolean; className?: string }) {
    return (
        <StyledSvg
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round" // ✅ camelCase
            className={className}
            {...props}>
            <G fill="none">
                <Path d="M9 11.5a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0Z" />
                <Path
                    strokeLinecap="round"
                    d="M14.32 16.802L9 13.29m5.42-6.45L9.1 10.352"
                    opacity="0.5"
                />
                <Path d="M19 18.5a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0Zm0-13a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0Z" />
            </G>
        </StyledSvg>
    );
}

export function ShareAlt1Svg({
    focused = false,
    className,
    ...props
}: SvgProps & { focused?: boolean; className?: string }) {
    return (
        <StyledSvg
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round" // ✅ camelCase
            className={className}
            {...props}>
            <G fill="none">
                <Path
                    stroke-linejoin="round"
                    d="M22 7h-8c-1.818 0-2.913.892-3.32 1.3q-.187.19-.19.19q0 .003-.19.19C9.892 9.087 9 10.182 9 12v3m13-8l-5-5m5 5l-5 5"
                />
                <Path d="M3.465 20.535C4.93 22 7.287 22 12.003 22c4.715 0 7.073 0 8.537-1.465c1.242-1.241 1.431-3.123 1.46-6.537M3.465 20.535C2 19.07 2 16.713 2 11.997m1.465 8.538C4.929 22 7.286 22 12 22s7.071 0 8.535-1.465c1.241-1.24 1.43-3.122 1.46-6.536m-18.53 6.536C2 19.071 2 16.714 2 12m1.465-8.54C4.706 2.218 6.588 2.029 10.002 2M2.055 8c.11-2.193.436-3.562 1.41-4.536c1.24-1.24 3.122-1.43 6.535-1.459" />
            </G>
        </StyledSvg>
    );
}

export function RetweetSvg({
    focused = false,
    className,
    ...props
}: SvgProps & { focused?: boolean; className?: string }) {
    return (
        <StyledSvg
            viewBox="0 0 21 21"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round" // ✅ camelCase
            className={className}
            {...props}>
            <G fill="none" fill-rule="evenodd">
                <Path d="m13.5 13.5l3 3l3-3" />
                <Path d="M9.5 4.5h3a4 4 0 0 1 4 4v8m-9-9l-3-3l-3 3" />
                <Path d="M11.5 16.5h-3a4 4 0 0 1-4-4v-8" />
            </G>
        </StyledSvg>
    );
}

export function ChevronRightSvg({
    focused = false,
    className,
    ...props
}: SvgProps & { focused?: boolean; className?: string }) {
    return (
        <StyledSvg
            viewBox="0 0 28 28"
            stroke="currentColor"
            strokeWidth="0.8"
            strokeLinecap="round" // ✅ camelCase
            className={className}
            {...props}>
            <Path
                fill="currentColor"
                d="M9.543 4.293a1 1 0 0 1 1.414 0l8.75 8.75a1 1 0 0 1 0 1.414l-8.75 8.75a1 1 0 0 1-1.414-1.414l8.043-8.043l-8.043-8.043a1 1 0 0 1 0-1.414"
                stroke-width="0.5"
                stroke="currentColor"
            />
        </StyledSvg>
    );
}

export function EventSvg({
    focused = false,
    className,
    ...props
}: SvgProps & { focused?: boolean; className?: string }) {
    return (
        <StyledSvg
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round" // ✅ camelCase
            className={className}
            {...props}>
            <G fill="none">
                <Path strokeLinecap="round" d="M7 4V2.5M17 4V2.5" />
                <Circle cx="16.5" cy="16.5" r="1.5" />
                <Path
                    strokeLinecap="round"
                    d="M21.5 9H10.75M2 9h3.875M14 22h-4c-3.771 0-5.657 0-6.828-1.172S2 17.771 2 14v-2c0-3.771 0-5.657 1.172-6.828S6.229 4 10 4h4c3.771 0 5.657 0 6.828 1.172S22 8.229 22 12v2c0 3.771 0 5.657-1.172 6.828c-.653.654-1.528.943-2.828 1.07"
                />
            </G>
        </StyledSvg>
    );
}

export function BadgeSvg({
    focused = false,
    className,
    ...props
}: SvgProps & { focused?: boolean; className?: string }) {
    return (
        <StyledSvg
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round" // ✅ camelCase
            className={className}
            {...props}>
            <Path
                fill="none"
                d="m14.394 3l-.246-.209a3.31 3.31 0 0 0-4.296 0l-.246.21a4 4 0 0 1-2.276.943l-.323.025A3.31 3.31 0 0 0 3.97 7.007l-.025.323A4 4 0 0 1 3 9.606l-.21.246a3.31 3.31 0 0 0 0 4.296l.21.246a4 4 0 0 1 .943 2.276l.025.323a3.31 3.31 0 0 0 3.038 3.038l.323.025A4 4 0 0 1 9.606 21l.246.21a3.31 3.31 0 0 0 4.296 0l.246-.21a4 4 0 0 1 2.276-.943l.323-.025a3.31 3.31 0 0 0 3.038-3.038l.025-.323A4 4 0 0 1 21 14.394l.21-.246a3.31 3.31 0 0 0 0-4.296L21 9.606a4 4 0 0 1-.943-2.276l-.025-.323a3.31 3.31 0 0 0-3.038-3.038l-.323-.025A4 4 0 0 1 14.394 3Z"
            />
        </StyledSvg>
    );
}

export function ArrowBackSvg({
    focused = false,
    className,
    ...props
}: SvgProps & { focused?: boolean; className?: string }) {
    return (
        <StyledSvg
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round" // ✅ camelCase
            className={className}
            {...props}>
            <Path
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
                d="m4 12l6-6m-6 6l6 6m-6-6h10.5m5.5 0h-2.5"
            />
        </StyledSvg>
    );
}

export function FirstLineSvg({
    focused = false,
    className,
    ...props
}: SvgProps & { focused?: boolean; className?: string }) {
    return (
        <StyledSvg
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round" // ✅ camelCase
            className={className}
            {...props}>
            <G fill="none">
                <Path stroke-linecap="round" d="M9 14H3m5 4H3m14-1.5V8" />
                <Circle cx="14.5" cy="16.5" r="2.5" />
                <Path
                    stroke-linecap="round"
                    d="M21 12a4 4 0 0 1-4-4M3 6h7.412M15 6h-1.588M13 10H6.824M3 10h1.324"
                />
            </G>
        </StyledSvg>
    );
}

export function NumberIndexSvg({
    focused = false,
    className,
    ...props
}: SvgProps & { focused?: boolean; className?: string }) {
    return (
        <StyledSvg
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round" // ✅ camelCase
            className={className}
            {...props}>
            <Path
                fill="none"
                stroke-width="1.5"
                d="M5.25 18a.75.75 0 1 1 1.5 0a.75.75 0 0 1-1.5 0m6 0a.75.75 0 1 1 1.5 0a.75.75 0 0 1-1.5 0m6 0a.75.75 0 1 1 1.5 0a.75.75 0 0 1-1.5 0m-12-6a.75.75 0 1 1 1.5 0a.75.75 0 0 1-1.5 0m6 0a.75.75 0 1 1 1.5 0a.75.75 0 0 1-1.5 0m6 0a.75.75 0 1 1 1.5 0a.75.75 0 0 1-1.5 0m-12-6a.75.75 0 1 1 1.5 0a.75.75 0 0 1-1.5 0m6 0a.75.75 0 1 1 1.5 0a.75.75 0 0 1-1.5 0m6 0a.75.75 0 1 1 1.5 0a.75.75 0 0 1-1.5 0"
            />
        </StyledSvg>
    );
}

export function UserSvg({
    focused = false,
    className,
    ...props
}: SvgProps & { focused?: boolean; className?: string }) {
    return (
        <StyledSvg
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round" // ✅ camelCase
            className={className}
            {...props}>
            <G fill="none" stroke="currentColor" strokeWidth="1.5">
                <Circle cx="12" cy="6" r="4" />
                <Path
                    d="M20 17.5c0 2.485 0 4.5-8 4.5s-8-2.015-8-4.5S7.582 13 12 13s8 2.015 8 4.5Z"
                    opacity=".5"
                />
            </G>
        </StyledSvg>
    );
}

export function SignOutSvg({
    focused = false,
    className,
    ...props
}: SvgProps & { focused?: boolean; className?: string }) {
    return (
        <StyledSvg
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round" // ✅ camelCase
            className={className}
            {...props}>
            <G
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinejoin="round">
                <Path stroke-linejoin="round" d="M10 12h10m0 0l-3-3m3 3l-3 3" />
                <Path d="M4 12a8 8 0 0 1 8-8m0 16a7.99 7.99 0 0 1-6.245-3" />
            </G>
        </StyledSvg>
    );
}

export function ProcessingSvg({
    focused = false,
    className,
    ...props
}: SvgProps & { focused?: boolean; className?: string }) {
    return (
        <StyledSvg
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
            {...props}>
            <G fill="none">
                <Path strokeDasharray="18" d="M12 3c4.97 0 9 4.03 9 9"></Path>
                <Path
                    strokeDasharray="60"
                    d="M12 3c4.97 0 9 4.03 9 9c0 4.97 -4.03 9 -9 9c-4.97 0 -9 -4.03 -9 -9c0 -4.97 4.03 -9 9 -9Z"
                    opacity="0.3"></Path>
            </G>
        </StyledSvg>
    );
}

export function HelpSvg({
    focused = false,
    className,
    ...props
}: SvgProps & { focused?: boolean; className?: string }) {
    return (
        <StyledSvg
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
            {...props}>
            <Path
                fill="none"
                d="M12.588 17.002q.228-.23.228-.56q0-.332-.23-.56q-.228-.228-.56-.228t-.56.229t-.227.56q0 .332.228.56q.23.228.561.228t.56-.23M12.002 21q-1.866 0-3.51-.708q-1.643-.709-2.859-1.924t-1.925-2.856T3 12.003t.709-3.51Q4.417 6.85 5.63 5.634t2.857-1.925T11.997 3t3.51.709q1.643.708 2.859 1.922t1.925 2.857t.709 3.509t-.708 3.51t-1.924 2.859t-2.856 1.925t-3.509.709M12 20q3.35 0 5.675-2.325T20 12t-2.325-5.675T12 4T6.325 6.325T4 12t2.325 5.675T12 20m.062-12.261q.76 0 1.308.471q.55.471.55 1.179q0 .55-.31.994q-.308.444-.714.819q-.514.466-.905 1.025q-.391.56-.449 1.233q-.019.196.123.328q.14.131.33.131q.201 0 .339-.134q.137-.135.174-.318q.1-.505.402-.899q.301-.393.662-.744q.519-.516.921-1.125q.403-.608.403-1.357q0-1.101-.836-1.818q-.835-.716-1.96-.716q-.834 0-1.553.39q-.718.39-1.149 1.08q-.098.166-.063.343t.19.269q.198.104.4.048t.356-.232q.333-.414.784-.69q.45-.278.997-.278"
            />
        </StyledSvg>
    );
}
