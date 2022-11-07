import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ImageCropper } from '../../lib/components';
import { COMPONENT_PREFIX } from '../helper/constant';

type ComponentType = typeof ImageCropper;

export default {
    title: `${COMPONENT_PREFIX}/ImageCropper`,
    component: ImageCropper,
    args: {
        title: "Title of the modal",
        width: "20rem",
        showUploader: true,
        rounded: false,
    },
    argTypes: {
        id: { control: 'text', description: "A unique identifier" },
        className: { control: 'text', description: "Container Class" },
        style: { control: 'object', description: "CSS Style Object" },
        name: {control: 'text', description: "Form input name. Useful when submitting Forms"},
        onCrop: { action: 'onCrop', description: "Success callback when new cropped file is ready" },
        rounded: { control: "boolean", defaultValue: false, description: "Make cropped image rounded"},
        showUploader: { control: 'boolean', defaultValue: true, description: "Whether to show built-in uploader or not" },
        src: { control: 'object', description: "Optional src of image as File or as URL string" },
        width: { control: 'text', default: "20rem", description: "Maintain cropping image aspect ratio by fixing width" },
        title: { control: 'text', description: "Define the title of the modal. Default to filename" },
    },
} as ComponentMeta<ComponentType>;

export const Template : ComponentStory<ComponentType> = (args) => {
    return <ImageCropper {...args} />
};

export const Primary = Template.bind({});
Primary.args = {
    type: "primary",
}
export const Secondary = Template.bind({});
Secondary.args = {
    type: "secondary",
}
export const Danger = Template.bind({});
Danger.args = {
    type: "danger",
}
export const Dark = Template.bind({});
Dark.args = {
    type: "dark",
}
export const Info = Template.bind({});
Info.args = {
    type: "info",
}
export const Light = Template.bind({});
Light.args = {
    type: "light",
}
export const Link = Template.bind({});
Link.args = {
    type: "link",
}
export const Success = Template.bind({});
Success.args = {
    type: "success",
}

export const Warning = Template.bind({});
Warning.args = {
    type: "warning",
}
