import React from 'react';
interface propTypes {
    className?: string;
    style?: React.CSSProperties;
    renderTimer?: (duration: number) => JSX.Element | string | null;
    total?: number;
    play?: boolean;
}
export interface ITimerInstance {
    duration: (d: number) => number | void;
    id: string;
    formatDuration: (d: number) => string;
    play: () => void;
    pause: () => void;
}
declare const Timer: React.ForwardRefExoticComponent<propTypes & {
    children?: React.ReactNode;
} & React.RefAttributes<ITimerInstance>>;
export default Timer;
