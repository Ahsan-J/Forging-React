import React from 'react';
import { Drawer } from '../../lib/components';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { COMPONENT_PREFIX } from '../helper/constant';

type ComponentType = typeof Drawer;

export default {
    title: `${COMPONENT_PREFIX}/Drawer`,
    component: Drawer,
    args: {
        
    },
    argTypes: {
        onOpen: {action: 'onOpen'},
    },
} as ComponentMeta<ComponentType>;

export const Sample : ComponentStory<ComponentType> = (args) => <Drawer {...args} />
