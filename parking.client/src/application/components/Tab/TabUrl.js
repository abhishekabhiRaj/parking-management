import React, { useCallback } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import classNames from "classnames"; // Optional, for better class handling
import PropTypes from 'prop-types';

export const TabUrl = ({ tabId, tabs }) => {
  const navigate = useNavigate();
  const location = useLocation();

  // Memoize the handleTab function to avoid unnecessary re-renders
  const handleTab = useCallback((path) => {
    navigate(path);
  }, [navigate]);

  return (
    <ul className="nav nav-pills nav-justified" id={tabId} role="tablist">
      {tabs.map((item, index) => {
        const isActive = location.pathname === item.path;

        return (
          <li
            key={item.path}
            onClick={() => handleTab(item.path)}
            className={classNames("nav-item", { "me-3": index < tabs.length - 1 })}
            role="presentation"
          >
            <button
              className={classNames("nav-link text-capitalize", {
                active: isActive,
              })}
              id={`tab-${item.title}`}
              role="tab"
            >
              {item.title}
            </button>
          </li>
        );
      })}
    </ul>
  );
};

TabUrl.propTypes = {
    tabId: PropTypes.string.isRequired,
    tabs: PropTypes.arrayOf(PropTypes.shape({
      // Replace with the actual shape of objects in the array
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      path: PropTypes.string.isRequired,
      // Add other fields as needed
    })).isRequired,
  };