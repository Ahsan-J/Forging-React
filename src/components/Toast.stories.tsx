import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Toast } from '../../lib/components';
import { COMPONENT_PREFIX } from '../helper/constant';

type ComponentType = typeof Toast

export default {
    title: `${COMPONENT_PREFIX}/Toast`,
    component: Toast,
    args: {
        show: true,
    },
    argTypes: {
        id: { control: 'text', description: "A unique identifier" },
        className: { control: 'text', description: "Container Class" },
        autoDismissTimeout: { control: 'number', description: "Total time duration in seconds that timer will run", defaultValue: 800 },
        onDismiss: {action: "onDismiss", description: "Event triggered when dismissing a toast"},
        show: { control: 'boolean', defaultValue: true, description: "Controlling show or hiding. Overrides default behavior" },
        style: { control: 'object', description: "CSS Style Object" },
        title: { control: 'text', description: "Toast Title" },
        direction: {control: "", options: ["top-right", "top-left", "bottom-right", "bottom-left", "top-middle", "bottom-middle"], description: "Direction to open the Toast", defaultValue: "top-right"},
        progress: { control: 'boolean', defaultValue: true, description: "Show Progress with Toast" },
    },
    parameters: { controls: { exclude: ['type'] } }
} as ComponentMeta<ComponentType>;

const Template: ComponentStory<ComponentType> = (args) => <Toast {...args} />;

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