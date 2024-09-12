import React, { useCallback, useState } from "react";
import "./Layout.css";

const Header = React.lazy(() => import('../Header/Header'));
const Sidebar = React.lazy(() => import('../Sidebar/Sidebar'));

const Layout = ({ children }) => {
    const [isSidebarMax, setIsSidebarMax] = useState(false);
     // Use useCallback to prevent re-creating the function on every render
     const handleToggleSidebar = useCallback(() => {
        setIsSidebarMax((prev) => !prev);
    }, []);

    return (
        <div className="layout">
            <Header handleShowSidebar={handleToggleSidebar} />
            <div className="d-flex"> 
                <section className={isSidebarMax?"sidebar-max":"sidebar-min"}>
                    <Sidebar isSidebarMax={isSidebarMax} />
                </section>
                <section className={isSidebarMax?"p-2 content-min":"p-2 content-max"}>
                    {children}
                </section>
            </div>
        </div>
    );
}

export default Layout;