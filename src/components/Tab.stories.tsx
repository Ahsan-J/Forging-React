import React, { useState } from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Tab } from '../../lib/components';
import { COMPONENT_PREFIX } from '../helper/constant';

type ComponentType = typeof Tab;

const data = {
    "Tab 1": <>Tab Content 1</>,
    "Tab 2": <>Tab Content 2</>,
    "Tab 3": <>Tab Content 3</>,
    "Tab 4": <>Tab Content 4</>,
}

export default {
    title: `${COMPONENT_PREFIX}/Tab`,
    component: Tab,
    args: {
        data
    },
    argTypes: {
        id: { control: 'text', description: "A unique identifier" },
        className: { control: 'text', description: "Container Class" },
        style: { control: 'object', description: "CSS Style Object" },
    },
} as ComponentMeta<ComponentType>;

export const Simple: ComponentStory<ComponentType> = (args) => <Tab {...args} />;

export const Dynamic : ComponentStory<ComponentType> = (args) => {
    const [data, setData] = useState(args.data);
    
    const onAddTab = (newKey: string) => {
        setData(d => ({...d, [newKey]: <>{newKey} content</>}))
        if (args.onAddTab) args.onAddTab(newKey);
    }
    
    const onTabClose = (key: string) => {
        setData(d => {
            const t = Object.assign({}, d);
            delete t[key];
            return t;
        })
        if (args.onTabClose) args.onTabClose(key);
    }

    return <Tab {...args} data={data} onAddTab={onAddTab} onTabClose={onTabClose}/>
};

Dynamic.argTypes = {
    onAddTab: {action: 'onAddTab', description: "Event triggered when adding a new tab"},
    onTabClose: {action: 'onTabClose', description: "Event triggered when closing an existing tab"},
};