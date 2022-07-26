import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Collapse } from '../../lib/components';
import { COMPONENT_PREFIX } from '../helper/constant';

type ComponentType = typeof Collapse

export default {
    title: `${COMPONENT_PREFIX}/Collapse`,
    component: Collapse,
    argTypes: {
        className: {control: 'text', description: "Container Class"},
        title: {control: "text", description: "Element or String for the Collapse trigger button"},
        collapse: { control: 'boolean', defaultValue: true, description: "Collapsing controlling state" },    
        style: { control: 'object', description: "CSS Style Object" },
    },
    parameters: { controls: { exclude: ['children'] } },
} as ComponentMeta<ComponentType>;

export const Sample: ComponentStory<ComponentType> = (args) => <Collapse {...args} />
Sample.args = {
    title: "Click to see Luffy",
    children: (
        <img style={{width: "100%"}} src={require('../data/Luffy.jpg')} />
    )
}