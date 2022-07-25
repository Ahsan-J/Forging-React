import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Highlighter } from '../../lib/components';
import { COMPONENT_PREFIX } from '../helper/constant';

type ComponentType = typeof Highlighter;

export default {
    title: `${COMPONENT_PREFIX}/Highlighter`,
    component: Highlighter,
    args: {
        text: "The Quick brown fox Jumps over the lazy dog",
        searchText: "jumps"
    },
    argTypes: {
        id: { control: 'text' },
        color: {control: "color", name:"Highlighting Color", description: "Colors the matching subtring"},
        searchText: {control: "string", name:"Searching Text", description: "Searching substring text" },
        text: {control: "string", name:"Original Text", description: "Original full text" },
        className: {control: 'text', name: 'Conainer Class', description: "Class for container"},
        style: { control: 'object', name: "Style" },  
    },
} as ComponentMeta<ComponentType>;


export const Sample: ComponentStory<ComponentType> = (args) => <Highlighter {...args} />;