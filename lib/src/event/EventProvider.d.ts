import React from "react";
import AppEvent from "../helpers/event";
type propType = {
    event?: AppEvent;
};
declare const EventProvider: React.NamedExoticComponent<React.PropsWithChildren<propType>>;
export default EventProvider;
