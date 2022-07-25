import React, { useState } from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Tab } from '../../lib/components';
import { COMPONENT_PREFIX } from '../helper/constant';

type ButtonType = typeof Tab;

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
        className: { control: 'text', name: 'Class', description: "Container Class for Tab" },
        id: { control: 'text' },
        // spinDuration: { control: 'number', name: "Spin Duration", description: "Duration to complete a single cycle", defaultValue: 800 },
        // size: { control: 'radio', name: "Size", options: ["large", "small", "normal"], defaultValue: "normal", description: "Resize the button" },
        style: { control: 'object', name: "Style" },
        // loader: { control: 'boolean', defaultValue: false },
    },
} as ComponentMeta<ButtonType>;

export const Simple: ComponentStory<ButtonType> = (args) => <Tab {...args} />;

export const Dynamic : ComponentStory<ButtonType> = (args) => {
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
    onAddTab: {action: 'onAddTab'},
    onTabClose: {action: 'onTabClose'},
};