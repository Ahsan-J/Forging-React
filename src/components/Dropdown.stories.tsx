import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Dropdown, IDropdownItem } from '../../lib/components';
import { COMPONENT_PREFIX } from '../helper/constant';
import genre from '../data/genre.json';
import iconsets from '../../lib/components/Icon/iconsets.js';

type ComponentType = typeof Dropdown;

const options = genre?.reduce((result, value) => {
    result[value.id] = { label: value.name };
    return result;
}, {} as { [key in string]: IDropdownItem })

export default {
    title: `${COMPONENT_PREFIX}/Dropdown`,
    component: Dropdown,
    args: {
        options,
        placeholder: "Select Genre"
    },
    argTypes: {
        value: {control: "select", name:"Value", description: "Controlled dropdown", options: Object.keys(options)},
        defaultKey: { control: 'select', name:"Default Value", description: "Default value selected on mount", options: Object.keys(options)},
        iconName: { control: "select", name: "Icon Name", options: Object.keys(iconsets) },
        label: {control: "string", name:"Form Label", description: "Label the input field. Useful for forms" },
        placeholder: {control: "string", name: "Placeholder", description: "Placeholer for Dropdown"},
        onItemClick: {action: 'onItemClicked'},
        name: {control: 'text', name:'Name', description: "Form input name. Useful when submitting Forms"},
        outline: { control: 'boolean', defaultValue: false, name: "Outline" },
        disabled: { name: "Disabled", control: 'boolean', defaultValue: false },
        className: {control: 'text', name: 'Badge Class', description: "Class for Badge"},
        style: { control: 'object', name: "Style" },  
    },
    parameters: { controls: { exclude: ['type'] } }
} as ComponentMeta<ComponentType>;


const Template: ComponentStory<ComponentType> = (args) => <Dropdown {...args} />;

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