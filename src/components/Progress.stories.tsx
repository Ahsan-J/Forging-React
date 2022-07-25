import React from 'react';
import { Progress } from '../../lib/components';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { COMPONENT_PREFIX } from '../helper/constant';

type ComponentType = typeof Progress;

export default {
    title: `${COMPONENT_PREFIX}/Progress`,
    component: Progress,
    args: {
        total: 100,
        progress: 75,
    },
    argTypes: {
        total: { control: "number", name: "Total", description: "Total value in number to calculate percentage against" },
        progress: { control: "number", name: "Progress", description: "The Elapsed value to calculate percentage with" },
        id: { control: 'text' },
        striped: { control: "boolean", name: "Stripped", description: "Strip pattern on progress" },
        animated: { control: "boolean", name: "Animated", description: "Animating the Progress" },
        className: { control: 'text', name: 'Class', description: "Container Class for Progress" },
        style: { control: 'object', name: "Style" },
    },
    parameters: { controls: { exclude: ['type'] } }
} as ComponentMeta<ComponentType>;

const Template: ComponentStory<ComponentType> = (args) => <Progress {...args} />


export const Primary = Template.bind({});
Primary.args = {
    type: "primary",
}
export const Secondary = Template.bind({});
Secondary.args = {
    type: "secondary",
}
export const Danger = Template.bind({});
Danger.args = {
    type: "danger",
}
export const Dark = Template.bind({});
Dark.args = {
    type: "dark",
}
export const Info = Template.bind({});
Info.args = {
    type: "info",
}
export const Light = Template.bind({});
Light.args = {
    type: "light",
}
export const Link = Template.bind({});
Link.args = {
    type: "link",
}
export const Success = Template.bind({});
Success.args = {
    type: "success",
}

export const Warning = Template.bind({});
Warning.args = {
    type: "warning",
}
