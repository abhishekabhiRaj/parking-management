import React, { useEffect, useState } from 'react';
import "./Sidebar.css";
import { SingleMenu, SingleMenuWithDropdown } from './components/Menu';
import { sidebarList } from '.';

const Sidebar = ({ isSidebarMax }) => {
    const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);

    const toggleSubmenu = () => {
        setIsSubmenuOpen(!isSubmenuOpen);
    };

    useEffect(() => {
        if (!isSidebarMax) setIsSubmenuOpen(false);
    }, [isSidebarMax])

    return (
        <div className='sidebar'>
            {
                sidebarList.map((item, i) => {
                    if (!item.haveSubMenu) {
                        return (
                            <SingleMenu
                                key={i}
                                isSidebarMax={isSidebarMax}
                                path={item.path}
                                title={item.title}
                                icon={item.icon}
                            />
                        )
                    } else {
                        return (
                            <SingleMenuWithDropdown
                                key={i}
                                isSubmenuOpen={isSubmenuOpen}
                                toggleSubmenu={toggleSubmenu}
                                isSidebarMax={isSidebarMax}
                                subMenuList={item.subMenu}
                                title={item.title}
                                icon={item.icon}
                            />
                        )
                    }
                })
            }
        </div>
    );
};

export default Sidebar;

