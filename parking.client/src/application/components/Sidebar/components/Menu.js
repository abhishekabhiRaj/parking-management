import classNames from "classnames";
import * as BsIcons from "react-icons/bs";
import React from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from 'prop-types';


{/* Single menu item */ }
const SingleMenu = ({ isSidebarMax, path, title, icon }) => {
    const navigate = useNavigate();
    const IconComponent = BsIcons[icon];
    return (
        <section className='sidebar-menu' onClick={() => navigate(path)}>
            <p className={classNames({ "sidebar-menu--icon": !isSidebarMax })}>
                {IconComponent && <IconComponent size={16} />}
            </p>
            {isSidebarMax && <span className="ms-2">{title}</span>}
        </section>
    )
}

SingleMenu.propTypes = {
    isSidebarMax: PropTypes.bool.isRequired,
    path: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
};


{/* Single menu item */ }
const SingleMenuWithDropdown = ({ title, isSubmenuOpen, isSidebarMax, toggleSubmenu, subMenuList, icon }) => {
    const navigate = useNavigate();
    const IconComponent = BsIcons[icon];

    return (
        <div className='sidebar-menu-dropdown'>
            <section className='sidebar-menu' onClick={() => { isSidebarMax && toggleSubmenu() }}>
                <p className={classNames({ "sidebar-menu--icon": !isSidebarMax })}>
                    {IconComponent && <IconComponent size={16} />}
                </p>
                {isSidebarMax && <span className="ms-2">{title}</span>}
            </section>

            {/* Submenu items, visible only if isSubmenuOpen is true */}
            {isSubmenuOpen && (
                <div className='sidebar-menu-dropdown-menu'>
                    <div className='sidebar-menu-dropdown-menu-show'>
                        {
                            subMenuList.map((item, i) => (
                                <section key={i} className='sidebar-menu' onClick={() => navigate(item.path)}>
                                    {isSidebarMax && <span className="ms-2">{item.title}</span>}
                                </section>
                            ))
                        }
                    </div>
                </div>
            )}
        </div>
    )
}

SingleMenuWithDropdown.propTypes = {
    isSidebarMax: PropTypes.bool.isRequired,
    isSubmenuOpen: PropTypes.bool.isRequired,
    // path: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    toggleSubmenu: PropTypes.func.isRequired,
    subMenuList: PropTypes.arrayOf(PropTypes.shape({
        // Replace with the actual shape of objects in the array
        title: PropTypes.string.isRequired,
        haveSubMenu: PropTypes.bool.isRequired,
        path: PropTypes.string.isRequired,
        // Add other fields as needed
    })).isRequired,
};

export { SingleMenu, SingleMenuWithDropdown }
