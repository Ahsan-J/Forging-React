import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Avatar, Icon } from '../../lib/components';
import { COMPONENT_PREFIX } from '../helper/constant';

type ComponentType = typeof Avatar;

export default {
    title: `${COMPONENT_PREFIX}/Avatar`,
    component: Avatar,
    args: {
        style: {height: "5rem", width: '5rem', fontSize: "2rem"},
    },
    argTypes: {
        id: { control: 'text' },
        style: { control: 'object', name: "Style" },
    },
    parameters: { controls: { exclude: ['type'] } }
} as ComponentMeta<ComponentType>;


const Template: ComponentStory<ComponentType> = (args) => <Avatar {...args} />;

export const WithName = Template.bind({});
WithName.args = {
    name: "Forgin React",
}

export const WithImage = Template.bind({});
WithImage.args = {
    src: require('../data/Luffy.jpg')
};

export const WithChildren = Template.bind({});
WithChildren.args = {
    name: "Forgin React",
    children: (
        <Icon name="pencil" style={{position:'absolute', bottom: 2, right: 2}}/>
    )
};