import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Badge } from '../../lib/components';
import { COMPONENT_PREFIX } from '../helper/constant';

type ButtonType = typeof Badge

export default {
    title: `${COMPONENT_PREFIX}/Badge`,
    component: Badge,
    argTypes: {
        id: { control: 'text' },
        rounded: { control: 'boolean', defaultValue: false, name: "Rounded", description: "Makes the Badge rounded" },
        color: {control: 'color', description:"Custom color for Badge"},
        onRemove: {action: 'onRemove'},
        className: { control: 'text' },
        onClick: { action: 'clicked' },
        style: { control: 'object', name: "Style" },
    },
    parameters: { controls: { exclude: ['type'] } },
} as ComponentMeta<ButtonType>;


const Template: ComponentStory<ButtonType> = (args) => <Badge {...args} />;

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