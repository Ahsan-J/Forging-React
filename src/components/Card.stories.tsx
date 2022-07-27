import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Card } from '../../lib/components';
import { COMPONENT_PREFIX } from '../helper/constant';

type ComponentType = typeof Card

export default {
    title: `${COMPONENT_PREFIX}/Card`,
    component: Card,
    argTypes: { 
        title: { control: 'text', description: "Card Title. Displayed inside card body" },
        subtitle: { control: 'text', description: "Card SubTitle. Displayed inside card body. After title" },
        className: {control: 'text', description: "Container Class"},
        style: { control: 'object', description: "CSS Style Object" },
        footer: {description: "A ReactNode type element displayed at the Bottom of Card "},
        header: {description: "A ReactNode type element displayed at the Top of Card "},
    },
    parameters: { controls: { exclude: ['type'] } },
} as ComponentMeta<ComponentType>;


const Template: ComponentStory<ComponentType> = (args) => <Card {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    type: "primary",
    children: "Primary"
}

export const Secondary = Template.bind({});
Secondary.args = {
    type: "secondary",
    children: "Secondary"
};

export const Light = Template.bind({});
Light.args = {
    type: "light",
    children: "Light"
};

export const Warning = Template.bind({});
Warning.args = {
    type: "warning",
    children: "Warning"
};

export const Danger = Template.bind({});
Danger.args = {
    type: "danger",
    children: "Danger"
};

export const Info = Template.bind({});
Info.args = {
    type: "info",
    children: "Info"
};

export const Success = Template.bind({});
Success.args = {
    type: "success",
    children: "Success"
};

export const Link = Template.bind({});
Link.args = {
    type: "link",
    children: "Link"
};

export const Dark = Template.bind({});
Dark.args = {
    type: "dark",
    children: "Dark"
};