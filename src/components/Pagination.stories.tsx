import React from 'react';
import { Pagination } from '../../lib/components';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { COMPONENT_PREFIX } from '../helper/constant';

type ComponentType = typeof Pagination;

export default {
    title: `${COMPONENT_PREFIX}/Pagination`,
    component: Pagination,
    args: {
        total: 50,
        currentPage: 1,
    },
    argTypes: {
        showNumberLength: { control: 'number' },
        onItemClick: { action: 'onItemClick', description: "Event Triggered when clicking an index number" },
        onNextClick: { action: 'onNextClick', description: "Event Triggered when clicking next icon" },
        onPreviousClick: { action: "onPreviousClick", description: "Event Triggered when clicking previous icon" },
        total: { control: 'number', description: "Total number Pages" },
        currentPage: { control: 'number', description: "Current Page number" },
        className: { control: 'text', description: "Container Class" },
        style: { control: 'object', description: "CSS Style Object" },
        outline: { control: 'object', defaultValue: false, description: "Boolean or Array of indexes to outline" },
        disabled: { control: 'object', defaultValue: false, description: "Boolean or Array of indexes to disable" },
        size: { control: 'select', options: ["large", "small", "normal"], defaultValue: "normal", description: "Resize the button" },
    },
    parameters: { controls: { exclude: ['type'] } }
} as ComponentMeta<ComponentType>;

const Template: ComponentStory<ComponentType> = (args) => <Pagination {...args} />

export const Primary = Template.bind({});
Primary.args = {
    type: "primary",
}

export const Secondary = Template.bind({});
Secondary.args = {
    type: "secondary",
};

export const Light = Template.bind({});
Light.args = {
    type: "light",
};

export const Warning = Template.bind({});
Warning.args = {
    type: "warning",
};

export const Danger = Template.bind({});
Danger.args = {
    type: "danger",
};

export const Info = Template.bind({});
Info.args = {
    type: "info",
};

export const Success = Template.bind({});
Success.args = {
    type: "success",
};

export const Link = Template.bind({});
Link.args = {
    type: "link",
};

export const Dark = Template.bind({});
Dark.args = {
    type: "dark",
};