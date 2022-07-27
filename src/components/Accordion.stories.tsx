import React from 'react';
import { Accordion } from '../../lib/components';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { COMPONENT_PREFIX } from '../helper/constant';

const accordions = {
  "Accordion Item #1": (
    <>
      <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
    </>
  ),
  "Accordion Item #2": (
    <>
      <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
    </>
  ),
  "Accordion Item #3": (
    <>
      <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
    </>
  )
}

type ComponentType = typeof Accordion;

export default {
  title: `${COMPONENT_PREFIX}/Accordion`,
  component: Accordion,
  args: {
    accordions,
  },
  argTypes: {
    multiple: { control: 'boolean', defaultValue: false, description: "Allow collapsing multiple items at a time" },
    onAccordionCollapse: { action: 'onAccordionCollapse', description: "Event triggered when collapsing an Item. Receives link of collapsing item" },
    disabled: { control: 'object', description: "List of disabled links" },
    className: { control: 'text', description: "Container Class" },
    id: { control: 'text', description: "A unique identifier" },
    style: { control: 'object', description: "CSS Style Object" },
    renderCustomTitle: { description: "Overrides the default title generation" },
    accordions: { control: 'object', description: "A key based accordion items. where key is link and value is React Node" },
  },
  parameters: { controls: { exclude: ['type'] } }
} as ComponentMeta<ComponentType>;

const Template: ComponentStory<ComponentType> = (args) => <Accordion {...args} />
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
