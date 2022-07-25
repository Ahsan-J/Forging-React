import React from 'react';
import { Carousel } from '../../lib/components';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { COMPONENT_PREFIX } from '../helper/constant';

type ComponentType = typeof Carousel;

export default {
    title: `${COMPONENT_PREFIX}/Carousel`,
    component: Carousel,
    args: {
        
    },
    argTypes: {
    
    },
} as ComponentMeta<ComponentType>;

export const Sample : ComponentStory<ComponentType> = (args) => <Carousel {...args} />
