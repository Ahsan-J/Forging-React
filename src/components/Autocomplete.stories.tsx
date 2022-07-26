import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { AutoComplete, IDropdownItem } from '../../lib/components';
import { COMPONENT_PREFIX } from '../helper/constant';
import genre from '../data/genre.json';

type ComponentType = typeof AutoComplete;

const options = genre?.reduce((result, value) => {
    result[value.id] = { label: value.name };
    return result;
}, {} as { [key in string]: IDropdownItem })

export default {
    title: `${COMPONENT_PREFIX}/AutoComplete`,
    component: AutoComplete,
    args: {
        options,
        placeholder: "Auto Complete"
    },
    argTypes: {
        className: {control: 'text', description: "Container Class"},
        id: { control: 'text', description: "A unique identifier" },
        highlightColor: {control: "color", description: "Highlighting Color the option that matches the text input"},
        label: {control: "string", description: "Form Label the input field. Useful for forms" },
        multiple: {control: "boolean", description: "Allows selecting multilpe badges"},
        placeholder: {control: "string", description: "Placeholer for Input"},
        onItemClick: {action: 'onItemClicked', description: "Event triggered when clicking an item"},
        onChange: {action: 'onChange', description: "Event triggered when field value is changed"},
        onBlur: {action: 'onBlur', description: "Event triggered when input element is focused out"},
        onFocus: {action: 'onFocus',description: "Event triggered when input element is focused in"},
        name: {control: 'text', description: "Form input name. Useful when submitting Forms"},
        labelClass: {control: 'text', description: "Class for Label"},
        badgeClass: {control: 'text', description: "Class for Badge"},
        style: { control: 'object', description: "CSS Style Object" },  
    },
    parameters: { controls: { exclude: ['type'] } }
} as ComponentMeta<ComponentType>;


const Template: ComponentStory<ComponentType> = (args) => <AutoComplete {...args} />;

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