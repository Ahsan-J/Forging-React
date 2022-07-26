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
        id: { control: 'text', description: "A unique identifier" },
        color: {control: "color", description: "Highlighting colors the matching subtring"},
        searchText: {control: "string", description: "Searching substring text" },
        text: {control: "string",  description: "Original full text" },
        className: {control: 'text',  description: "Container Class"},
        style: { control: 'object', description: "CSS Style Object" },    
    },
} as ComponentMeta<ComponentType>;


export const Sample: ComponentStory<ComponentType> = (args) => <Highlighter {...args} />;