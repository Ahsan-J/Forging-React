import React, { useRef } from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Button } from '../../lib/components';
import { IButtonInstance } from '../../lib/components/Button/Button';
import iconsets from '../../lib/components/Icon/iconsets.js';
import { TITLE_PREFIX } from '../helper/constant';

Button.displayName = "Button";

export default {
    title: `${TITLE_PREFIX}/Button`,
    component: Button,
    argTypes: {
        id: { control: 'text' },
        iconName: { control: "select", name: "Icon Name", options: Object.keys(iconsets) },
        outline: { control: 'boolean', defaultValue: false, name: "Outline" },
        block: { control: 'boolean', defaultValue: true, name: "Block" },
        size: { control: 'radio', name: "Size", options: ["large", "small", "normal"], defaultValue: "normal", description: "Resize the button" },
        disabled: { name: "Disabled", control: 'boolean', defaultValue: false },
        htmlType: { name: "Type", control: 'select', options: ['button', 'submit'] },
        onClick: { action: 'clicked' },
        style: { control: 'object', name: "Style" },
    },
} as ComponentMeta<typeof Button>;


export const Primary: ComponentStory<typeof Button> = (args) => {
    const btnRef = useRef<IButtonInstance & HTMLButtonElement>(null);
    return <Button {...args} ref={btnRef} type="primary">Primary</Button>
};

export const Secondary: ComponentStory<typeof Button> = (args) => {
    return <Button {...args} type="secondary">Secondary</Button>
};
export const Dark: ComponentStory<typeof Button> = (args) => {
    return <Button {...args} type="dark">Dark</Button>
};
export const Light: ComponentStory<typeof Button> = (args) => {
    return <Button {...args} type="light">Light</Button>
};
export const Warning: ComponentStory<typeof Button> = (args) => {
    return <Button {...args} type="warning">Warning</Button>
};
export const Danger: ComponentStory<typeof Button> = (args) => {
    return <Button {...args} type="danger">Danger</Button>
};
export const Info: ComponentStory<typeof Button> = (args) => {
    return <Button {...args} type="info">Info</Button>
};
export const Link: ComponentStory<typeof Button> = (args) => {
    return <Button {...args} type="link">Link</Button>
};
export const Success: ComponentStory<typeof Button> = (args) => {
    return <Button {...args} type="success">Success</Button>
};