import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Icon } from '../../lib/components';
import iconsets from '../../lib/components/Icon/iconSets';
import { COMPONENT_PREFIX } from '../helper/constant';

type ComponentType = typeof Icon

export default {
    title: `${COMPONENT_PREFIX}/Icon`,
    component: Icon,
    argTypes: {
        className: { control: 'text', description: "Container Class" },
        fill: {control: "color", description: "Icon Fill Color"},
        height: { control: 'text', description: "Height of Icon's svg", defaultValue:"16rem" },
        width: { control: 'text', description: "Width of Icon's svg", defaultValue:"16rem" },
        name: { control: "select", options: Object.keys(iconsets), description: "Set of icons supported"},
        onClick: { action: 'onClick', description: "Click action" },
        style: { control: 'object', description: "CSS Style Object" },
    },
} as ComponentMeta<ComponentType>;


export const Sample: ComponentStory<ComponentType> = (args) => <Icon {...args} />;