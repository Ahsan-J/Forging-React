import React, { useRef } from 'react';
import { Alert } from '../../lib/components';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { TITLE_PREFIX } from '../helper/constant';

Alert.displayName = "Alert";

export default {
    title: `${TITLE_PREFIX}/Alert`,
    component: Alert,
    args: {
        title: "Alert",
        autoDismissTimeout: 2000,
        onDismiss: () => console.log("Here dismissed"),
    },
    argTypes: {
        title: { control: 'text' },
        autoDismissTimeout: { control: ''},
        onShow: { action: 'clicked' },
        onDismiss: { action: 'dismissed' }
    },
} as ComponentMeta<typeof Alert>;

export const Primary: ComponentStory<typeof Alert> = (args) => {
    console.log(args)
    const alertRef = useRef<HTMLDivElement>(null);
    // args.onShow = () => {
    //     console.log("OnShow", args)
    // }
    return <Alert onDismiss={args.onDismiss} title={args.title} autoDismissTimeout={args.autoDismissTimeout} type="primary" ref={alertRef} />
};
