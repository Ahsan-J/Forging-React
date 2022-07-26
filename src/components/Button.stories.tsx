import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Button } from '../../lib/components';
import iconsets from '../../lib/components/Icon/iconsets.js';
import { COMPONENT_PREFIX } from '../helper/constant';

type ComponentType = typeof Button

export default {
    title: `${COMPONENT_PREFIX}/Button`,
    component: Button,
    argTypes: {
        id: { control: 'text', description: "A unique identifier" },
        className: { control: 'text', description: "Container Class" },
        iconName: { control: "select", options: Object.keys(iconsets), description: "Set of icons supported" },
        outline: { control: 'boolean', defaultValue: false, description: "Make button outline" },
        block: { control: 'boolean', defaultValue: true, description: "Make Button full width" },
        size: { control: 'select', options: ["large", "small", "normal"], defaultValue: "normal", description: "Resize the button" },
        disabled: { control: 'boolean', defaultValue: false, description: "Make Button disable to function" },
        htmlType: {control: 'select', options: ['button', 'submit'], description: "Form HTML Button type" },
        onClick: { action: 'clicked', description: "Click action" },
        style: { control: 'object', description: "CSS Style Object" },
        loader: { control: 'boolean', defaultValue: false, description: "Replace a Spinner Element with Icon" },
    },
    parameters: { controls: { exclude: ['type'] } }
} as ComponentMeta<ComponentType>;


const Template: ComponentStory<ComponentType> = (args) => <Button {...args} />;

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