import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Timer } from '../../lib/components';
import { COMPONENT_PREFIX } from '../helper/constant';

type ComponentType = typeof Timer

export default {
    title: `${COMPONENT_PREFIX}/Timer`,
    component: Timer,
    args: {
        total: 60,
    },
    argTypes: {
        renderTimer: { description: "A custom renderer to override default timer UI" },
        formatDuration: { description: "A custom formatter for timer" },
        id: { control: 'text', description: "A unique identifier" },
        className: { control: 'text', description: "Container Class" },
        style: { control: 'object', description: "CSS Style Object" },
        total: { control: 'number', description: "Total time duration in seconds that timer will run", defaultValue: 800 },
        duration: { control: 'number', description: "Current Duration. Useful for controlled timer" },
        play: { control: 'boolean', defaultValue: true, description: "Play or Pause the timer" },
    },
    parameters: { controls: { exclude: ['type'] } }
} as ComponentMeta<ComponentType>;

export const Sample: ComponentStory<ComponentType> = (args) => <Timer {...args} />;
