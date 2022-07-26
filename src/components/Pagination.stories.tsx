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
        onItemClick: {action: 'onItemClick',description: "Event Triggered when clicking an index number"},
        onNextClick: {action: 'onNextClick', description: "Event Triggered when clicking next icon"},
        onPreviousClick: {action: "onPreviousClick", description: "Event Triggered when clicking previous icon"},
        total: {control: 'number', description: "Total number Pages"},
        currentPage: {control: 'number', description: "Current Page number"},
        className: { control: 'text', description: "Container Class" },
        style: { control: 'object', description: "CSS Style Object" },
    },
} as ComponentMeta<ComponentType>;

const Template : ComponentStory<ComponentType> = (args) => <Pagination {...args} />

export const Standalone = Template.bind({});
Standalone.args = {
    total: 50,
    currentPage: 1,
    
}
