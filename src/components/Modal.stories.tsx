import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { Modal } from '../../lib/components';
import { COMPONENT_PREFIX } from '../helper/constant';

type ComponentType = typeof Modal;

export default {
    title: `${COMPONENT_PREFIX}/Modal`,
    component: Modal,
    args: {
        children: "Sample Modal Body",
    },
    argTypes: {
        className: { control: 'text', description: "Container Class" },
        animationDirection: { control: 'select', description: "Animation Direction", options: ["top", "bottom", "left", "right"]},
        id: { control: 'text', description: "A unique identifier" },
        onBackdrop: { action: 'onBackdrop', description: "Event Triggered when clicked on Backdrop"},
        onDismiss: {action: 'onDismiss', description: "Event Triggered when dismiss button is cliked"},
        showChildren: { control: 'boolean', defaultValue: false },
        show: { control: 'boolean', defaultValue: true, description: "Controlling state to handle modal show" },
        wrapper: {control: 'string', description: "Wrapping Element", defaultValue: 'div'},
        style: { control: 'object', description: "CSS Style Object" },
    },
} as ComponentMeta<ComponentType>;

export const Sample: ComponentStory<ComponentType> = (args) => <Modal {...args} />;