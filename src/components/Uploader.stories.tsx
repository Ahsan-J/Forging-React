import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Uploader } from '../../lib/components';
import iconsets from '../../lib/components/Icon/iconsets.js';
import { COMPONENT_PREFIX } from '../helper/constant';

type ComponentType = typeof Uploader

export default {
    title: `${COMPONENT_PREFIX}/Uploader`,
    component: Uploader,
    argTypes: {
        id: { control: 'text', description: "A unique identifier" },
        className: { control: 'text', description: "Container Class" },
        iconName: { control: "select",  options: Object.keys(iconsets), description: "Set of icons supported" },
        onChange: {action: 'onChange', description: "Event triggered when files are changed"},
        multiple:{ control: 'boolean', defaultValue: false, description: "Allow Selecting multiple files" },
        name: {control: 'text', description: "Form input name. Useful when submitting Forms"},
        title: {control: 'text',  description: "Button Label"},
        files: {control: 'file',  description: "Controlling Uploader input using state"},
        accept: {control: 'object',  description: "Allow HTML file picker to filter the provided extension"},
        style: { control: 'object', description: "CSS Style Object" },
    },
    parameters: { controls: { exclude: ['type'] } }
} as ComponentMeta<ComponentType>;


const Template: ComponentStory<ComponentType> = (args) => <Uploader {...args} />;

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