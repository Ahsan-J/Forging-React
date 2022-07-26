import React from 'react';
import { RandomImage } from '../../lib/components';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { COMPONENT_PREFIX } from '../helper/constant';

type ComponentType = typeof RandomImage;

export default {
    title: `${COMPONENT_PREFIX}/RandomImage`,
    component: RandomImage,
    args: {
        size: 20,
    },
    argTypes: {
        size: { control: "number", description: "Total number of random boxes" },
        className: { control: 'text', description: "Container Class" },
        style: { control: 'object', description: "CSS Style Object" },
    },
    parameters: { controls: { exclude: ['type'] } }
} as ComponentMeta<ComponentType>;

export const Sample: ComponentStory<ComponentType> = (args) => <RandomImage {...args} />
