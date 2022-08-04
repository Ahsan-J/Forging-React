import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Timeline } from '../../lib/components';
import { COMPONENT_PREFIX } from '../helper/constant';
import moment from 'moment';

type ComponentType = typeof Timeline;

const experiences = [
    { // DMS Global
        position: "Full Stack Developer",
        type: "Full Time",
        employer: "DMS Global",
        from: "02-11-2020",
        to: null,
        location: {
            name: "Al Seef, Bahrain",
            link: null
        },
        logo: "/img/Global.png",
        url: "https://dmsglobal.net/",
    },
    { // Cloud Coherence
        position: "Full Stack Developer",
        type: "Freelance",
        employer: "Cloud Coherence",
        from: "02-07-2020",
        to: "01-11-2020",
        location: {
            name: "Karachi, Pakistan",
            link: "https://goo.gl/maps/mqymHWTXzta13Xw87"
        },
        url: "https://cloudcoherence.io/",
        logo: "/img/Coherence.png",
    },
    { // TCIG
        position: "Full Stack developer",
        employer: "The Cohen International Group (TCIG)",
        type: "Full Time",
        from: "20-01-2019",
        to: "09-04-2020",
        location: {
            name: "Al Seef, Bahrain",
            link: "https://goo.gl/maps/5oi9H7BoLZicgvQM7"
        },
        logo: "/img/TCIG.png",
        url: "http://tcig.co/",
    },
    { // Doozielabs
        position: "Full Stack developer",
        type: "Part Time",
        logo: "/img/Doozielabs.png",
        employer: "Doozielabs",
        from: "03-10-2017",
        to: "15-01-2019",
        location: {
            name: "Karachi, Pakistan",
            link: "https://g.page/DoozieLabs?share"
        },
        url: "http://doozielabs.com/",
    },
]

const renderItem = (item: any) => {
    return (
        <div>
            <div className="row mb-1">
                <div className="col-sm-12">
                    <h5 className="text-primary"><a href={item.url}>{item.employer}</a></h5>
                    <h5 className="text-muted mb-0">{item.position}</h5>
                    <div className="d-flex flex-row">
                        <p className=" mb-0">
                            Location:&nbsp;
                            {item.location.link ? (
                                <a href={item.location.link}>{item.location.name}</a>
                            ) : (
                                item.location.name
                            )}
                        </p>
                    </div>
                    <div className="d-flex flex-row">
                        <h6 className="mb-0">{moment(item.from, "DD-MM-YYYY").format("MMM YYYY")}</h6>
                        &nbsp;-&nbsp;
                        <h6 className="mb-0">{item.to ? moment(item.to, "DD-MM-YYYY").format("MMM YYYY") : "Present"}</h6>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default {
    title: `${COMPONENT_PREFIX}/Timeline`,
    component: Timeline,
    args: {
        data: experiences,
        renderItem,
    },
    argTypes: {
        keyExtractor: { action: 'onKeyExtraction', description: "Use to calculate unique value for each row" },
        data: { control: 'object', description: "A list of data to map over" },
        id: { control: 'text', description: "A unique identifier" },
        className: { control: 'text', description: "Container Class" },
        renderItem: { description: "A custom render function to render each value" },
        style: { control: 'object', description: "CSS Style Object" },
    },
    parameters: { controls: { exclude: ['type'] } }
} as ComponentMeta<ComponentType>;


const Template: ComponentStory<ComponentType> = (args) => (
    <div style={{backgroundColor: "var(--bs-light)"}}>
        <Timeline {...args} />
    </div>
);

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
    type: "success"
};

export const Link = Template.bind({});
Link.args = {
    type: "link",
};

export const Dark = Template.bind({});
Dark.args = {
    type: "dark",
};