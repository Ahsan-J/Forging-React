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
        options: {control: 'object', description: "A key value options to display"},
        renderSelectedValue: {description: "Function that returns custom Item for selected value"},
        renderItem: {description: "Function that returns custom Item for dropdown list"},
        value: {control: "select", description: "Controlled dropdown", options: Object.keys(options)},
        defaultKey: { control: 'select', description: "Default value selected on mount", options: Object.keys(options)},
        iconName: { control: "select", options: Object.keys(iconsets), description: "Set of icons supported" },
        label: {control: "string", description: "Label the input field. Useful for forms" },
        placeholder: {control: "string", description: "Placeholer an empty value"},
        onItemClick: {action: 'onItemClicked', description: "Event triggered when clicking an item"},
        name: {control: 'text', description: "Form input name. Useful when submitting Forms"},
        outline: { control: 'boolean', defaultValue: false, description: "Make button outline" },
        block: { control: 'boolean', defaultValue: true, description: "Make Button full width" },
        disabled: { control: 'boolean', defaultValue: false, description: "Make Button disable to function" },
        className: {control: 'text', description: "Container Class"},
        style: { control: 'object', description: "CSS Style Object" },  
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