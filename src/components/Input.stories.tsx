import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Input } from '../../lib/components';
import { COMPONENT_PREFIX } from '../helper/constant';

type ComponentType = typeof Input;

export default {
    title: `${COMPONENT_PREFIX}/Input`,
    component: Input,
    args: {
        placeholder: "Sample Placeholder",
        label: "Sample Label",
    },
    argTypes: {
        label: {control: "string", description: "Label the input field. Useful for forms" },
        labelClass: { control: 'text', description: "Label Class" },
        htmlType: {control: 'select', description: "HTML Input element type", options: ["button","checkbox","color","date","datetime-local","email","file","hidden","image","month","number","password","radio","range","reset","search","submit","tel","text","time","url","week"]},
        error: {control: 'text', description: "Show error box with text specified"},
    },
} as ComponentMeta<ComponentType>;


const Sample: ComponentStory<ComponentType> = (args) => <Input {...args} />;

export const Floating = Sample.bind({});
Floating.args = {
    type: "floating",
}

export const FloatingTextarea = Sample.bind({});
FloatingTextarea.args = {
    type: "floating-textarea",
}

export const Default = Sample.bind({});
Default.args = {
    type: "default",
}

export const DefaultTextarea = Sample.bind({});
DefaultTextarea.args = {
    type: "textarea",
}