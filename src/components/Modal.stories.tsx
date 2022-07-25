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
        animationDirection: { control: 'select', name: "Animation Direction", options: ["top", "bottom", "left", "right"]},
        id: { control: 'text' },
        onBackdrop: { action: 'onBackdrop'},
        onDismiss: {action: 'onDismiss'},
        showChildren: { control: 'boolean', defaultValue: false, name: "Show Children" },
        show: { control: 'boolean', defaultValue: true, name: "Show" },
        wrapper: {control: 'string', name: "Wrapping Element", defaultValue: 'div'},
        style: { control: 'object', name: "Style" },
    },
} as ComponentMeta<ComponentType>;

export const Sample: ComponentStory<ComponentType> = (args) => <Modal {...args} />;