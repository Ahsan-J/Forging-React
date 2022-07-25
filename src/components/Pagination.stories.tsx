import React from 'react';
import { Pagination } from '../../lib/components';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { COMPONENT_PREFIX } from '../helper/constant';

type ComponentType = typeof Pagination;

export default {
    title: `${COMPONENT_PREFIX}/Pagination`,
    component: Pagination,
    args: {
        
    },
    argTypes: {
        showNumberLength: {control: 'number'},
        onItemClick: {action: 'onItemClick'},
        onNextClick: {action: 'onNextClick'},
        onPreviousClick: {action: "onPreviousClick"},
        total: {control: 'number', name: "Total Pages"},
        currentPage: {control: 'number', name: "Current Page"},
        className: {control: 'text', name: 'Class', description: "Container Class"},
        style: { control: 'object', name: "Style" },  
    },
} as ComponentMeta<ComponentType>;

const Template : ComponentStory<ComponentType> = (args) => <Pagination {...args} />

export const Standalone = Template.bind({});
Standalone.args = {
    total: 50,
    currentPage: 1,
    
}
