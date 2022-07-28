import React from 'react';
interface propTypes {
    className?: string;
    style?: React.CSSProperties;
    renderTimer?: (duration: number) => React.ReactNode;
    total?: number;
    play?: boolean;
    duration?: number;
    formatDuration?: (d: number) => string;
}
export interface ITimerInstance {
    duration: number;
    id: string;
    formatDuration: (d: number) => string;
    play: () => void;
    pause: () => void;
}
declare const Timer: React.ForwardRefExoticComponent<propTypes & {
    children?: React.ReactNode;
} & React.RefAttributes<ITimerInstance>>;
export default Timer;
