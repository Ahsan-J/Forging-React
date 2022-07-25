import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Collapse } from '../../lib/components';
import { COMPONENT_PREFIX } from '../helper/constant';

type ButtonType = typeof Collapse

export default {
    title: `${COMPONENT_PREFIX}/Collapse`,
    component: Collapse,
    argTypes: {
        title: {control: "text", },
        collapse: { control: 'boolean', defaultValue: true, name: "Collapse" },    
        style: { control: 'object', name: "Style" },
    },
    parameters: { controls: { exclude: ['children'] } },
} as ComponentMeta<ButtonType>;

export const Sample: ComponentStory<ButtonType> = (args) => <Collapse {...args} />
Sample.args = {
    title: "Click to see Luffy",
    children: (
        <img style={{width: "100%"}} src={require('../data/Luffy.jpg')} />
    )
}