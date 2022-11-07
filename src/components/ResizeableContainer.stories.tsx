import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ResizableContainer } from '../../lib/components';
import { COMPONENT_PREFIX } from '../helper/constant';

type ComponentType = typeof ResizableContainer;

export default {
    title: `${COMPONENT_PREFIX}/ResizableContainer`,
    component: ResizableContainer,
    args: {
        allowDrag: true,
        rounded: false,
        allowResize: true,
    },
    argTypes: {
        id: { control: 'text', description: "A unique identifier" },
        className: { control: 'text', description: "Container Class" },
        style: { control: 'object', description: "CSS Style Object" },
        allowDrag: { control: 'boolean', defaultValue: true, description: "Make container draggable" },
        allowResize: { control: 'boolean', defaultValue: true, description: "Make container resizable" },
        rounded: { control: "boolean", defaultValue: false, description: "Make container rounded"},
        minimumWidth: { control: 'number', default: 20, description: "Limit the minimun width allowed when resizing" },
        minimumHeight: { control: 'number', default: 20, description: "Limit the minimun height allowed when resizing" },
        height: { control: 'number', defaultValue: 100, description: "Starting height of resizable div"},
        width: { control: 'number', defaultValue: 100, description: "Starting width of resizable div"},
    },
} as ComponentMeta<ComponentType>;

export const Template : ComponentStory<ComponentType> = (args) => {
    return <ResizableContainer {...args} />
};

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
