import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Uploader } from '../../lib/components';
import iconsets from '../../lib/components/Icon/iconsets.js';
import { COMPONENT_PREFIX } from '../helper/constant';

type ButtonType = typeof Uploader

export default {
    title: `${COMPONENT_PREFIX}/Uploader`,
    component: Uploader,
    argTypes: {
        id: { control: 'text' },
        className: { control: 'text', name: 'Class', description: "Container Class for Uploader" },
        iconName: { control: "select", name: "Icon Name", options: Object.keys(iconsets) },
        onChange: {action: 'onChange'},
        multiple:{ control: 'boolean', defaultValue: false, name: "Allow Selecting multiple files" },
        name: {control: 'text', name:'Name', description: "Form input name. Useful when submitting Forms"},
        title: {control: 'text', name:'Title', description: "Button Label"},
        files: {control: 'file', name:'Files', description: "Controlling Uploader input using state"},
        accept: {control: 'object', name: "Accept", description: "Allow HTML file picker to filter the provided extension"},
        style: { control: 'object', name: "Style" },
    },
    parameters: { controls: { exclude: ['type'] } }
} as ComponentMeta<ButtonType>;


const Template: ComponentStory<ButtonType> = (args) => <Uploader {...args} />;

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