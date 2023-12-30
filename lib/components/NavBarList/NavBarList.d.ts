import React from 'react';
export interface INavItem {
    id?: string | number;
    url?: string;
    title: string;
    dropdownItems?: Array<INavItem>;
}
type propTypes = {
    className?: string;
    data: Array<INavItem>;
    type?: "NavBar" | "Tab";
    renderListItem?: (item: INavItem, index?: number) => React.ReactNode;
    onItemClose?: (item: INavItem) => void;
    onAddItem?: () => void;
    active?: INavItem['title'];
    onClick?: (title: INavItem['title'], event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
};
declare const NavBarList: (props: propTypes & React.RefAttributes<HTMLUListElement>) => React.ReactElement<any, string | React.JSXElementConstructor<any>> | null;
export default NavBarList;
