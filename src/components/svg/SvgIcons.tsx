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
            strokeWidth="0.1"
            strokeLinecap="round" // ✅ camelCase
            className={className}
            {...props}>
            <Path
                fill="currentColor"
                d="m8.962 18.91l.464-.588zM12 5.5l-.54.52a.75.75 0 0 0 1.08 0zm3.038 13.41l.465.59zm-8.037-2.49a.75.75 0 0 0-.954 1.16zm-4.659-3.009a.75.75 0 1 0 1.316-.72zm.408-4.274c0-2.15 1.215-3.954 2.874-4.713c1.612-.737 3.778-.541 5.836 1.597l1.08-1.04C10.1 2.444 7.264 2.025 5 3.06C2.786 4.073 1.25 6.425 1.25 9.137zM8.497 19.5c.513.404 1.063.834 1.62 1.16s1.193.59 1.883.59v-1.5c-.31 0-.674-.12-1.126-.385c-.453-.264-.922-.628-1.448-1.043zm7.006 0c1.426-1.125 3.25-2.413 4.68-4.024c1.457-1.64 2.567-3.673 2.567-6.339h-1.5c0 2.198-.9 3.891-2.188 5.343c-1.315 1.48-2.972 2.647-4.488 3.842zM22.75 9.137c0-2.712-1.535-5.064-3.75-6.077c-2.264-1.035-5.098-.616-7.54 1.92l1.08 1.04c2.058-2.137 4.224-2.333 5.836-1.596c1.659.759 2.874 2.562 2.874 4.713zm-8.176 9.185c-.526.415-.995.779-1.448 1.043s-.816.385-1.126.385v1.5c.69 0 1.326-.265 1.883-.59c.558-.326 1.107-.756 1.62-1.16zm-5.148 0c-.796-.627-1.605-1.226-2.425-1.901l-.954 1.158c.83.683 1.708 1.335 2.45 1.92zm-5.768-5.63a7.25 7.25 0 0 1-.908-3.555h-1.5c0 1.638.42 3.046 1.092 4.275z"
            />
        </StyledSvg>
    );
}

export function HeartFullSvg({
    className,
    ...props
}: SvgProps & { focused?: boolean; className?: string }) {
    return (
        <StyledSvg
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="0.6"
            strokeLinecap="round" // ✅ camelCase
            className={className}
            {...props}>
            <Path
                fill="currentColor"
                d="M8.106 18.247C5.298 16.083 2 13.542 2 9.137C2 4.274 7.5.825 12 5.501l2 1.998a.75.75 0 0 0 1.06-1.06l-1.93-1.933C17.369 1.403 22 4.675 22 9.137c0 4.405-3.298 6.946-6.106 9.11q-.44.337-.856.664C14 19.729 13 20.5 12 20.5s-2-.77-3.038-1.59q-.417-.326-.856-.663"
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
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
            {...props}>
            <Path fill="none" d="m4 12l6-6m-6 6l6 6m-6-6h10.5m5.5 0h-2.5" />
        </StyledSvg>
    );
}

export function LinesIndexSvg({
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
            strokeWidth="1.6"
            strokeLinecap="round" // ✅ camelCase
            className={className}
            {...props}>
            <G fill="none">
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
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
            {...props}>
            <G fill="none">
                <Path d="M10 12h10m0 0l-3-3m3 3l-3 3" />
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

export function StarSvg({
    focused = false,
    className,
    ...props
}: SvgProps & { focused?: boolean; className?: string }) {
    return (
        <StyledSvg
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
            {...props}>
            <Path
                fill="none"
                d="M6.04 7.772c-2.46.557-3.69.835-3.983 1.776c-.292.94.546 1.921 2.223 3.882l.434.507c.476.557.715.836.822 1.18c.107.345.071.717-.001 1.46l-.066.677c-.253 2.617-.38 3.925.386 4.506s1.918.051 4.22-1.009l.597-.274c.654-.302.981-.452 1.328-.452s.674.15 1.329.452l.595.274c2.303 1.06 3.455 1.59 4.22 1.01c.767-.582.64-1.89.387-4.507m1.189-3.824c1.677-1.96 2.515-2.941 2.223-3.882s-1.523-1.22-3.983-1.776l-.636-.144c-.699-.158-1.048-.237-1.329-.45s-.46-.536-.82-1.182l-.328-.588C13.58 3.136 12.947 2 12 2s-1.58 1.136-2.847 3.408"
            />
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

export function DeleteSvg({
    focused = false,
    className,
    ...props
}: SvgProps & { focused?: boolean; className?: string }) {
    return (
        <StyledSvg
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="0.1"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
            {...props}>
            <Path
                fill="currentColor"
                d="M7.616 20q-.667 0-1.141-.475T6 18.386V6h-.5q-.213 0-.356-.144T5 5.499t.144-.356T5.5 5H9q0-.31.23-.54t.54-.23h4.46q.31 0 .54.23T15 5h3.5q.213 0 .356.144t.144.357t-.144.356T18.5 6H18v12.385q0 .666-.475 1.14t-1.14.475zM17 6H7v12.385q0 .269.173.442t.443.173h8.769q.269 0 .442-.173t.173-.442zm-6.335 10.856q.143-.144.143-.356v-8q0-.213-.144-.356T10.307 8t-.356.144t-.143.356v8q0 .213.144.356q.144.144.356.144q.213 0 .357-.144m3.384 0q.143-.144.143-.356v-8q0-.213-.144-.356Q13.904 8 13.692 8q-.213 0-.357.144t-.143.356v8q0 .213.144.356t.357.144t.356-.144M7 6v13z"
            />
        </StyledSvg>
    );
}

export function EditSvg({
    focused = false,
    className,
    ...props
}: SvgProps & { focused?: boolean; className?: string }) {
    return (
        <StyledSvg
            viewBox="0 0 512 512"
            stroke="currentColor"
            strokeWidth="44"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
            {...props}>
            <Path
                fill="none"
                d="M358.62 129.28L86.49 402.08L70 442l39.92-16.49l272.8-272.13zm54.45-54.44l-11.79 11.78l24.1 24.1l11.79-11.79a16.51 16.51 0 0 0 0-23.34l-.75-.75a16.51 16.51 0 0 0-23.35 0"
            />
        </StyledSvg>
    );
}

export function SearchSvg({
    focused = false,
    className,
    ...props
}: SvgProps & { focused?: boolean; className?: string }) {
    return (
        <StyledSvg
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
            {...props}>
            <Path
                fill="none"
                d="m21 21l-3.5-3.5M17 10a7 7 0 1 1-14 0a7 7 0 0 1 14 0Z"
            />
        </StyledSvg>
    );
}

export function FontSizeSvg({
    focused = false,
    className,
    ...props
}: SvgProps & { focused?: boolean; className?: string }) {
    return (
        <StyledSvg
            viewBox="0 0 1024 1024"
            stroke="currentColor"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
            {...props}>
            <Path d="M0 0h1024v1024H0z" fill="none" />
            <Path
                fill="currentColor"
                d="M920 416H616c-4.4 0-8 3.6-8 8v112c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8v-56h60v320h-46c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h164c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8h-46V480h60v56c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V424c0-4.4-3.6-8-8-8M656 296V168c0-4.4-3.6-8-8-8H104c-4.4 0-8 3.6-8 8v128c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-64h168v560h-92c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h264c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8h-92V232h168v64c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8"
            />
        </StyledSvg>
    );
}

export function CheckDoubleSvg({
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
                <Path
                    fill="currentColor"
                    d="M4.565 12.407a.75.75 0 1 0-1.13.986zM7.143 16.5l-.565.493a.75.75 0 0 0 1.13 0zm8.422-8.507a.75.75 0 1 0-1.13-.986zm-5.059 3.514a.75.75 0 0 0 1.13.986zm-.834 3.236a.75.75 0 1 0-1.13-.986zm-6.237-1.35l3.143 3.6l1.13-.986l-3.143-3.6zm4.273 3.6l1.964-2.25l-1.13-.986l-1.964 2.25zm3.928-4.5l1.965-2.25l-1.13-.986l-1.965 2.25zm1.965-2.25l1.964-2.25l-1.13-.986l-1.964 2.25z"
                />
                <Path d="m20 7.563l-4.286 4.5M11 16l.429.563l2.143-2.25" />
            </G>
        </StyledSvg>
    );
}

export function CheckSvg({
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
                fill="currentColor"
                d="m9.55 15.15l8.475-8.475q.3-.3.7-.3t.7.3t.3.713t-.3.712l-9.175 9.2q-.3.3-.7.3t-.7-.3L4.55 13q-.3-.3-.288-.712t.313-.713t.713-.3t.712.3z"
            />
        </StyledSvg>
    );
}

export function XSvg({
    focused = false,
    className,
    ...props
}: SvgProps & { focused?: boolean; className?: string }) {
    return (
        <StyledSvg
            viewBox="0 0 24 25"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
            {...props}>
            <Path fill="none" d="M20 20L4 4m16 0L4 20" />
        </StyledSvg>
    );
}

export function SortAscendingSvg({
    focused = false,
    className,
    ...props
}: SvgProps & { focused?: boolean; className?: string }) {
    return (
        <StyledSvg
            viewBox="0 0 16 16"
            stroke="currentColor"
            strokeWidth="0.1"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
            {...props}>
            <Path
                fill="currentColor"
                d="M3.5 13.5a.5.5 0 0 1-1 0V4.707L1.354 5.854a.5.5 0 1 1-.708-.708l2-1.999l.007-.007a.5.5 0 0 1 .7.006l2 2a.5.5 0 1 1-.707.708L3.5 4.707zm4-9.5a.5.5 0 0 1 0-1h1a.5.5 0 0 1 0 1zm0 3a.5.5 0 0 1 0-1h3a.5.5 0 0 1 0 1zm0 3a.5.5 0 0 1 0-1h5a.5.5 0 0 1 0 1zM7 12.5a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 0-1h-7a.5.5 0 0 0-.5.5"
            />
        </StyledSvg>
    );
}

export function SortDescendingSvg({
    focused = false,
    className,
    ...props
}: SvgProps & { focused?: boolean; className?: string }) {
    return (
        <StyledSvg
            viewBox="0 0 16 16"
            stroke="currentColor"
            strokeWidth="0.1"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
            {...props}>
            <Path
                fill="currentColor"
                d="M3.5 2.5a.5.5 0 0 0-1 0v8.793l-1.146-1.147a.5.5 0 0 0-.708.708l2 1.999l.007.007a.497.497 0 0 0 .7-.006l2-2a.5.5 0 0 0-.707-.708L3.5 11.293zm3.5 1a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5M7.5 6a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1zm0 3a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1zm0 3a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1z"
            />
        </StyledSvg>
    );
}

export function SortUnOrderedSvg({
    focused = false,
    className,
    ...props
}: SvgProps & { focused?: boolean; className?: string }) {
    return (
        <StyledSvg
            viewBox="0 0 24 25"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
            {...props}>
            <Path
                fill="currentColor"
                d="M7 12a2 2 0 1 1-4 0a2 2 0 0 1 4 0m14 0a2 2 0 1 1-4 0a2 2 0 0 1 4 0"
            />
            <Path
                fill="currentColor"
                d="M14 12a2 2 0 1 1-4 0a2 2 0 0 1 4 0"
                opacity=".5"
            />
        </StyledSvg>
    );
}

export function SizeXXSSvg({
    focused = false,
    className,
    ...props
}: SvgProps & { focused?: boolean; className?: string }) {
    return (
        <StyledSvg
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="0.0"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
            {...props}>
            <Path
                fill="currentColor"
                d="M9 7h2l1 2.5L13 7h2l-2 5l2 5h-2l-1-2.5l-1 2.5H9l2-5zm9 0h4v2h-4v2h2a2 2 0 0 1 2 2v2c0 1.11-.89 2-2 2h-4v-2h4v-2h-2a2 2 0 0 1-2-2V9c0-1.1.9-2 2-2M2 7h2l1 2.5L6 7h2l-2 5l2 5H6l-1-2.5L4 17H2l2-5z"
            />
        </StyledSvg>
    );
}

export function SizeXSSvg({
    focused = false,
    className,
    ...props
}: SvgProps & { focused?: boolean; className?: string }) {
    return (
        <StyledSvg
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="0.0"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
            {...props}>
            <Path
                fill="currentColor"
                d="M6 7h2l1 2.5L10 7h2l-2 5l2 5h-2l-1-2.5L8 17H6l2-5zm9 0h4v2h-4v2h2a2 2 0 0 1 2 2v2c0 1.11-.89 2-2 2h-4v-2h4v-2h-2a2 2 0 0 1-2-2V9c0-1.1.9-2 2-2"
            />
        </StyledSvg>
    );
}

export function SizeSSvg({
    focused = false,
    className,
    ...props
}: SvgProps & { focused?: boolean; className?: string }) {
    return (
        <StyledSvg
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="0.0"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
            {...props}>
            <Path
                fill="currentColor"
                d="M11 7c-1.1 0-2 .9-2 2v2a2 2 0 0 0 2 2h2v2H9v2h4c1.11 0 2-.89 2-2v-2a2 2 0 0 0-2-2h-2V9h4V7z"
            />
        </StyledSvg>
    );
}

export function SizeMSvg({
    focused = false,
    className,
    ...props
}: SvgProps & { focused?: boolean; className?: string }) {
    return (
        <StyledSvg
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="0.0"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
            {...props}>
            <Path
                fill="currentColor"
                d="M9 7c-1.1 0-2 .9-2 2v8h2V9h2v7h2V9h2v8h2V9a2 2 0 0 0-2-2z"
            />
        </StyledSvg>
    );
}

export function SizeLSvg({
    focused = false,
    className,
    ...props
}: SvgProps & { focused?: boolean; className?: string }) {
    return (
        <StyledSvg
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="0.0"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
            {...props}>
            <Path fill="currentColor" d="M9 7v10h6v-2h-4V7z" />
        </StyledSvg>
    );
}

export function SizeXLSvg({
    focused = false,
    className,
    ...props
}: SvgProps & { focused?: boolean; className?: string }) {
    return (
        <StyledSvg
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="0.0"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
            {...props}>
            <Path
                fill="currentColor"
                d="M6 7h2l1 2.5L10 7h2l-2 5l2 5h-2l-1-2.5L8 17H6l2-5zm7 0h2v8h4v2h-6z"
            />
        </StyledSvg>
    );
}

export function SizeXXLSvg({
    focused = false,
    className,
    ...props
}: SvgProps & { focused?: boolean; className?: string }) {
    return (
        <StyledSvg
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="0.0"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
            {...props}>
            <Path
                fill="currentColor"
                d="M9 7h2l1 2.5L13 7h2l-2 5l2 5h-2l-1-2.5l-1 2.5H9l2-5zm7 0h2v8h4v2h-6zM2 7h2l1 2.5L6 7h2l-2 5l2 5H6l-1-2.5L4 17H2l2-5z"
            />
        </StyledSvg>
    );
}

export function Size3XLSvg({
    focused = false,
    className,
    ...props
}: SvgProps & { focused?: boolean; className?: string }) {
    return (
        <StyledSvg
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="0.0"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
            {...props}>
            <Path
                fill="currentColor"
                d="M9 7h2l1 2.5L13 7h2l-2 5l2 5h-2l-1-2.5l-1 2.5H9l2-5zm7 0h2v8h4v2h-6zm-8 8c0 1.11-.89 2-2 2H2v-2h4v-2H4v-2h2V9H2V7h4a2 2 0 0 1 2 2v1.5c0 .83-.67 1.5-1.5 1.5c.83 0 1.5.67 1.5 1.5z"
            />
        </StyledSvg>
    );
}

export function BrokenLinesSvg({
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
                <Path d="m14 18l3.5-3l3.5 3" />
                <Path d="M11 14H3m8 4H3M3 6h10.5M20 6h-2.25M20 10H9.5M3 10h2.25" />
            </G>
        </StyledSvg>
    );
}

export function LanguageSvg({
    focused = false,
    className,
    ...props
}: SvgProps & { focused?: boolean; className?: string }) {
    return (
        <StyledSvg
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="0.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
            {...props}>
            <Path
                fill="currentColor"
                d="M6.666 12.46q.54-.325.54-.977t-.54-.99q-.539-.34-1.266-.34t-1.257.34t-.53.99t.53.978t1.257.325t1.266-.325M2.771 8.723q-.162 0-.279-.118t-.117-.282t.117-.278t.28-.114h2.184V6.796q0-.177.121-.298t.299-.121t.298.12q.12.122.12.3V7.93h2.21q.162 0 .279.118t.117.282t-.117.278t-.28.114zm2.62 4.856q-1.07 0-1.84-.548t-.77-1.548q0-1.004.77-1.56T5.4 9.367q1.085 0 1.865.556t.78 1.56t-.78 1.55t-1.873.546m-.394 3.679q-.343 0-.576-.232q-.232-.233-.232-.576v-1.754q0-.177.127-.298q.128-.121.302-.121t.295.12q.12.122.12.3v1.769h5.435q.162 0 .28.117q.116.119.116.282t-.117.278t-.279.115zm5.351-2.606q-.178 0-.298-.121t-.12-.298V7.27q0-.16.13-.277t.289-.117t.277.117t.117.277v3.01h1.56q.162 0 .279.118t.117.282t-.117.278t-.28.114H10.77v3.16q0 .177-.121.298t-.299.121m6.648 1.806q.791 0 1.608-.421q.816-.421 1.52-1.178v-3.34q-.682.112-1.26.261t-1.176.332q-1.298.427-1.928 1.077t-.63 1.484q0 .829.509 1.307t1.357.478m-.141.892q-1.229 0-1.977-.735q-.748-.736-.748-1.944q0-1.146.806-1.952t2.457-1.344q.46-.15 1.138-.294t1.593-.321v-.25q-.012-1.406-.521-2.117q-.51-.71-1.713-.71q-.602 0-1.189.178q-.586.18-1.204.548q-.165.099-.346.072t-.279-.193t-.027-.358t.237-.292q.698-.405 1.441-.63T18 6.785q1.583 0 2.354.995q.771.994.771 2.806v6.119q0 .178-.12.3t-.294.121h-.063q-.164 0-.283-.107t-.13-.272l-.07-.919q-.757.721-1.624 1.122q-.866.401-1.685.401"
            />
        </StyledSvg>
    );
}

export function ResetPreferencesSvg({
    focused = false,
    className,
    ...props
}: SvgProps & { focused?: boolean; className?: string }) {
    return (
        <StyledSvg
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="0.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
            {...props}>
            <Path
                fill="currentColor"
                d="M13.212 13.904h2.577q.191 0 .317.125q.125.125.125.316t-.126.317t-.317.126h-2.576q-.192 0-.317-.125q-.126-.125-.126-.316t.126-.317t.317-.126m1.25 5.654v-1h-1.25q-.192 0-.317-.125q-.126-.126-.126-.317t.126-.317t.317-.126h1.25v-1q0-.192.125-.317t.316-.125t.317.125t.126.317v2.885q0 .191-.125.317q-.125.125-.316.125t-.317-.125t-.126-.317m2.519-1.885h2.577q.191 0 .317.125q.125.125.125.316t-.125.318t-.317.126H16.98q-.192 0-.317-.125q-.126-.126-.126-.317t.126-.317t.317-.126m.442-1.885v-2.884q0-.192.125-.317t.317-.125t.317.125t.126.317v1h1.25q.191 0 .317.125q.125.125.125.316t-.125.317t-.317.126h-1.25v1q0 .192-.125.317q-.125.126-.317.126t-.317-.126t-.126-.317M12 5Q9.075 5 7.038 7.038T5 12q0 2.108 1.11 3.79Q7.222 17.474 9 18.309V15.5q0-.213.144-.356T9.501 15t.356.144t.143.356v3.692q0 .344-.232.576T9.192 20H5.5q-.213 0-.356-.144T5 19.499t.144-.356T5.5 19h2.812q-1.916-1-3.114-2.851T4 12q0-1.665.626-3.119T6.34 6.34t2.54-1.714T12 4q2.562 0 4.56 1.418t2.886 3.688q.073.188.002.378t-.262.265t-.385-.007t-.268-.27q-.756-1.97-2.517-3.221T12 5"
            />
        </StyledSvg>
    );
}
