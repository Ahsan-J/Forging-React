import React, { PropsWithChildren } from "react";
import { IconNames } from "../Icon";
import Image from "../Image";
import { Size } from "../../types/theme";
type ImageProps = React.ComponentProps<typeof Image>;
type propTypes = {
    id?: string;
    className?: string;
    style?: React.CSSProperties;
    name?: string;
    src?: string | File | Blob;
    size?: Size;
    loading?: ImageProps['loading'];
    viewerClass?: string;
    onClick?: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void;
    iconName?: IconNames;
    canPreview?: boolean;
};
declare const Avatar: React.MemoExoticComponent<(props: PropsWithChildren<propTypes>) => import("react/jsx-runtime").JSX.Element>;
export default Avatar;
