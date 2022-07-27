import React from 'react';
import { Alert } from '../../lib/components';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { COMPONENT_PREFIX } from '../helper/constant';

type ComponentType = typeof Alert;

export default {
    title: `${COMPONENT_PREFIX}/Alert`,
    component: Alert,
    args: {
        title: "Alert",
        show: true,
    },
    argTypes: {
        renderIcon: {description: "Render custom icon for Alert"},
        className: { control: 'text', description: "Container Class" },
        id: { control: 'text', description: "A unique identifier" },
        style: { control: 'object', description: "CSS Style Object" },
        show: { control: 'boolean', defaultValue: true, description: "Controlling show or hiding. Overrides default behavior" },
        title: { control: 'text', description: "Alert title"},
        autoDismissTimeout: { control: 'number', description: "Timeout for auto dismissal"},
        onShow: { action: 'onShow', description: "Event triggered when propting to show Alert" },
        onDismiss: { action: 'onDismissed' }
    },
    parameters: { controls: { exclude: ['type'] } }
} as ComponentMeta<ComponentType>;

const Template : ComponentStory<ComponentType> = (args) => <Alert {...args} />

export const Primary = Template.bind({});
Primary.args = {
    title: "Primary Alert",
    type: "primary",
}
export const Secondary = Template.bind({});
Secondary.args = {
    title: "Secondary Alert",
    type: "secondary",
}
export const Danger = Template.bind({});
Danger.args = {
    title: "Primary Alert",
    type: "danger",
}
export const Dark = Template.bind({});
Dark.args = {
    title: "Dark Alert",
    type: "dark",
}
export const Info = Template.bind({});
Info.args = {
    title: "Info Alert",
    type: "info",
}
export const Light = Template.bind({});
Light.args = {
    title: "Light Alert",
    type: "light",
}
export const Link = Template.bind({});
Link.args = {
    title: "Link Alert",
    type: "link",
}
export const Success = Template.bind({});
Success.args = {
    title: "Success Alert",
    type: "success",
}

export const Warning = Template.bind({});
Warning.args = {
    title: "Success Alert",
    type: "warning",
}
