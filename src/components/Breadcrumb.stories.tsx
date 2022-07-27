import React from 'react';
import { Breadcrumb, IBreadcrumbItem } from '../../lib/components';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { COMPONENT_PREFIX } from '../helper/constant';

type ComponentType = typeof Breadcrumb;

const items: {[link in string]: IBreadcrumbItem} = {
    "/home": {
        title: "Home",
        iconName: "house",
    },
    "/home/library": {
        title: "Library",
        iconName: "book",
    },
    "/home/library/data": {
        title: "Data",
        iconName:  "calculator",
    }
}

export default {
  title: `${COMPONENT_PREFIX}/Breadcrumb`,
  component: Breadcrumb,
  args: {
    items,
  },
  argTypes: {
    renderItems: {description: "Overrides the default render for each items"},
    active: {control: 'text', description: "Active link. Must be in one of the route passed. Defaults to last link in items"},
    disabled: { control: 'object', description: "List of disabled links" },
    onClick: { action: 'onClick', description: "Event triggered when clicking a link" },
    size: { control: 'select', options: ["large", "small", "normal"], defaultValue: "normal", description: "Resize link button" },
    iconOnActive: { control: 'boolean', description: "Restrict icons to be shown only for active icons"},
    className: { control: 'text', description: "Container Class" },
    id: { control: 'text', description: "A unique identifier" },
    style: { control: 'object', description: "CSS Style Object" },
  },
  parameters: { controls: { exclude: ['type'] } }
} as ComponentMeta<ComponentType>;

const Template: ComponentStory<ComponentType> = (args) => <Breadcrumb {...args} />
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
