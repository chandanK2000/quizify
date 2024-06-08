import React from 'react';
import { Link } from 'react-router-dom';
import { freeResources } from '../../../courseData';

const Sidebar = ({ selectedLinks }) => {
  return (
    <div className="sidebar">
      <nav className="nav flex-column">
        <h5 className="sidebar-heading">Free Resources</h5>
        <ul className="list-unstyled">
          {freeResources.map((resource, index) => (
            <li key={index}>
              <Link className="nav-link" to="#" onClick={() => selectedLinks(resource.subcategories)}>
                {resource.category}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
