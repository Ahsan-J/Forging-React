import React from 'react';
import { NavBar } from '../../lib/components';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { COMPONENT_PREFIX } from '../helper/constant';

type ComponentType = typeof NavBar;

export default {
    title: `${COMPONENT_PREFIX}/NavBar`,
    component: NavBar,
    args: {
        
    },
    argTypes: {
        id: { control: 'text' },
        theme: {control: "select", options: ['dark', 'light'], name:"Theme", description: "Dark/Light Theme"},
        fixed: {control: "select", options: ['bottom', 'top'], name: "Fixed", description: "If provided, fix the Navbar relative to parent container"},
        size: {control: "select", options: ['large', 'medium', 'small', 'x-large', 'xx-large'], name: "Size", description: "Size of Navbar"},
        className: {control: 'text', name: 'Class', description: "Container Class Navbar"},
        style: { control: 'object', name: "Style" },  
    },
    parameters: { controls: { exclude: ['type'] } }
} as ComponentMeta<ComponentType>;

const Template : ComponentStory<ComponentType> = (args) => <NavBar {...args} />

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
export const Success = Template.bind({});
Success.args = {
    type: "success",
}

export const Warning = Template.bind({});
Warning.args = {
    type: "warning",
}
