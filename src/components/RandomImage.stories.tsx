import React from 'react';
import { RandomImage } from '../../lib/components';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { COMPONENT_PREFIX } from '../helper/constant';

type ComponentType = typeof RandomImage;

export default {
    title: `${COMPONENT_PREFIX}/RandomImage`,
    component: RandomImage,
    args: {
        rectangleSize: 20,
    },
    argTypes: {
        rectangleSize: { control: "number", name: "Total", description: "Total value in number to calculate percentage against" },
        className: { control: 'text', name: 'Class', description: "Container Class for Progress" },
        style: { control: 'object', name: "Style" },
    },
    parameters: { controls: { exclude: ['type'] } }
} as ComponentMeta<ComponentType>;

export const Sample: ComponentStory<ComponentType> = (args) => <RandomImage {...args} />
