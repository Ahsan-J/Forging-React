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
        id: { control: 'text' },
        highlightColor: {control: "color", name:"Highlighting Color", description: "Colors the option that matches the text input"},
        label: {control: "string", name:"Form Label", description: "Label the input field. Useful for forms" },
        multiple: {control: "boolean", name:"Multiple", description: "Allows selecting multilpe badges"},
        placeholder: {control: "string", name: "Placeholder", description: "Placeholer for Input"},
        onItemClick: {action: 'onItemClicked'},
        onChange: {action: 'onChange'},
        onBlur: {action: 'onBlur'},
        onFocus: {action: 'onFocus'},
        name: {control: 'text', name:'Name', description: "Form input name. Useful when submitting Forms"},
        labelClass: {control: 'text', name: 'Label Class', description: "Class for Label"},
        badgeClass: {control: 'text', name: 'Badge Class', description: "Class for Badge"},
        style: { control: 'object', name: "Style" },  
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