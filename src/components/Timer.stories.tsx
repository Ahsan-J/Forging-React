import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Timer } from '../../lib/components';
import { COMPONENT_PREFIX } from '../helper/constant';

type ButtonType = typeof Timer

export default {
    title: `${COMPONENT_PREFIX}/Timer`,
    component: Timer,
    args: {
        total: 60,
    },
    argTypes: {
        className: { control: 'text', name: 'Class', description: "Container Class for Timer" },
        total: { control: 'number', name: "Total Duration", description: "Total time duration in seconds that timer will run", defaultValue: 800 },
        style: { control: 'object', name: "Style" },
        duration: {control: 'number', name: "Current Duration", description: "Current Duration. Useful for controlled timer"},
        play: { control: 'boolean', defaultValue: true },
    },
    parameters: { controls: { exclude: ['type'] } }
} as ComponentMeta<ButtonType>;

export const Sample: ComponentStory<ButtonType> = (args) => <Timer {...args} />;
