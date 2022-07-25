import React from 'react';
export interface INavItem {
    id?: string | number;
    url?: string;
    title: string;
    dropdownItems?: Array<INavItem>;
}
declare type propTypes = {
    className?: string;
    data: Array<INavItem>;
    type?: "NavBar" | "Tab";
    renderListItem?: (item: INavItem, index?: number) => (JSX.Element | null);
    onItemClose?: (item: INavItem) => void;
    onAddItem?: () => void;
    active?: INavItem['title'];
    onClick?: (title: INavItem['title'], event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
};
declare const NavBarList: React.ForwardRefExoticComponent<propTypes & React.RefAttributes<HTMLUListElement>>;
export default NavBarList;
