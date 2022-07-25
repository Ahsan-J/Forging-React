import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Button } from '../../lib/components';
import iconsets from '../../lib/components/Icon/iconsets.js';
import { COMPONENT_PREFIX } from '../helper/constant';

type ButtonType = typeof Button

export default {
    title: `${COMPONENT_PREFIX}/Button`,
    component: Button,
    argTypes: {
        id: { control: 'text' },
        className: { control: 'text', name: 'Class', description: "Container Class for Button" },
        iconName: { control: "select", name: "Icon Name", options: Object.keys(iconsets) },
        outline: { control: 'boolean', defaultValue: false, name: "Outline" },
        block: { control: 'boolean', defaultValue: true, name: "Block" },
        size: { control: 'radio', name: "Size", options: ["large", "small", "normal"], defaultValue: "normal", description: "Resize the button" },
        disabled: { name: "Disabled", control: 'boolean', defaultValue: false },
        htmlType: { name: "Type", control: 'select', options: ['button', 'submit'] },
        onClick: { action: 'clicked' },
        style: { control: 'object', name: "Style" },
        loader: { control: 'boolean', defaultValue: false },
    },
    parameters: { controls: { exclude: ['type'] } }
} as ComponentMeta<ButtonType>;


const Template: ComponentStory<ButtonType> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    type: "primary",
    children: "Primary"
}

export const Secondary = Template.bind({});
Secondary.args = {
    type: "secondary",
    children: "Secondary"
};

export const Light = Template.bind({});
Light.args = {
    type: "light",
    children: "Light"
};

export const Warning = Template.bind({});
Warning.args = {
    type: "warning",
    children: "Warning"
};

export const Danger = Template.bind({});
Danger.args = {
    type: "danger",
    children: "Danger"
};

export const Info = Template.bind({});
Info.args = {
    type: "info",
    children: "Info"
};

export const Success = Template.bind({});
Success.args = {
    type: "success",
    children: "Success"
};

export const Link = Template.bind({});
Link.args = {
    type: "link",
    children: "Link"
};

export const Dark = Template.bind({});
Dark.args = {
    type: "dark",
    children: "Dark"
};