import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Spinner } from '../../lib/components';
import { COMPONENT_PREFIX } from '../helper/constant';

type ComponentType = typeof Spinner

export default {
    title: `${COMPONENT_PREFIX}/Spinner`,
    component: Spinner,
    args: {
        loader: true,
    },
    argTypes: {
        className: { control: 'text', description: "Container Class" },
        id: { control: 'text', description: "A unique identifier" },
        spinDuration: { control: 'number', description: "Duration to complete a single cycle", defaultValue: 800 },
        size: { control: 'radio', options: ["large", "small", "normal"], defaultValue: "normal", description: "Resize the button" },
        style: { control: 'object', description: "CSS Style Object" },
        loader: { control: 'boolean', defaultValue: false, description: "Show or hide element" },
    },
    parameters: { controls: { exclude: ['type'] } }
} as ComponentMeta<ComponentType>;


const Template: ComponentStory<ComponentType> = (args) => <Spinner {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    type: "primary",
}

export const Secondary = Template.bind({});
Secondary.args = {
    type: "secondary",
};

export const Light = Template.bind({});
Light.args = {
    type: "light",
};

export const Warning = Template.bind({});
Warning.args = {
    type: "warning",
};

export const Danger = Template.bind({});
Danger.args = {
    type: "danger",
};

export const Info = Template.bind({});
Info.args = {
    type: "info",
};

export const Success = Template.bind({});
Success.args = {
    type: "success",
};

export const Link = Template.bind({});
Link.args = {
    type: "link",
};

export const Dark = Template.bind({});
Dark.args = {
    type: "dark",
};