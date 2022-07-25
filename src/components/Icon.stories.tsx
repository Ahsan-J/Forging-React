import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Icon } from '../../lib/components';
import iconsets from '../../lib/components/Icon/iconsets.js';
import { COMPONENT_PREFIX } from '../helper/constant';

type ButtonType = typeof Icon

export default {
    title: `${COMPONENT_PREFIX}/Icon`,
    component: Icon,
    argTypes: {
        fill: {control: "color", name:"Fill", description: "Icon Fill Color"},
        height: { control: 'text', name:"Height", description: "Height of Icon's svg", defaultValue:"16rem" },
        width: { control: 'text', name:"Width", description: "Width of Icon's svg", defaultValue:"16rem" },
        name: { control: "select", name: "Name", options: Object.keys(iconsets), description: "Icon name"},
        onClick: { action: 'onClick' },
        style: { control: 'object', name: "Style" },
    },
} as ComponentMeta<ButtonType>;


export const Sample: ComponentStory<ButtonType> = (args) => <Icon {...args} />;