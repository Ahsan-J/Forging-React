import React from 'react';
type propTypes = {
    className?: string;
    style?: React.CSSProperties;
    renderTimer?: (duration: number) => React.ReactNode;
    total?: number;
    play?: boolean;
    duration?: number;
    formatDuration?: (d: number) => string;
};
export interface ITimerInstance {
    duration: number;
    id: string;
    formatDuration: (d: number) => string;
    play: () => void;
    pause: () => void;
}
declare const Timer: (props: propTypes & {
    children?: React.ReactNode | undefined;
} & React.RefAttributes<ITimerInstance>) => React.ReactElement | null;
export default Timer;
