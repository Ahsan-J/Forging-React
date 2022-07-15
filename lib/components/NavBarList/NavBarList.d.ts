import React from 'react';
export declare type NavItemType = {
    id?: string | number;
    url?: string;
    title: string;
    dropdownItems?: Array<NavItemType>;
};
declare type propTypes = {
    className?: string;
    data: Array<NavItemType>;
    type?: "NavBar" | "Tab";
    renderListItem?: (item: NavItemType, index?: number) => (JSX.Element | null);
    ref?: React.Ref<HTMLUListElement>;
    onItemClose?: (item: NavItemType) => void;
    onAddItem?: () => void;
    active?: NavItemType['title'];
    onClick?: (title: NavItemType['title'], event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
};
declare const NavBarList: React.ForwardRefExoticComponent<Pick<React.PropsWithChildren<propTypes>, "type" | "active" | "data" | "className" | "children" | "onClick" | "renderListItem" | "onItemClose" | "onAddItem"> & React.RefAttributes<HTMLUListElement>>;
export default NavBarList;
