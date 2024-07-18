import React, { useState } from "react";
import { Link } from "react-router-dom";

import { menu } from "../../assets/data/menu";

import "./Header.css";

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <header className="header">
      <button
        className="menu-toggle"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        Menu
      </button>
      {isOpen && (
        <nav className="menu">
          <ol>
            {menu.map((menuItem) => (
              <li key={menuItem.id} className="menu-item">
                <Link
                  to={menuItem.path}
                  onClick={() => setIsOpen((prev) => !prev)}
                >
                  {menuItem.label}
                </Link>
                {menuItem.subMenu.length > 0 && (
                  <ol className="sub-menu">
                    {menuItem.subMenu.map((subMenuItem) => (
                      <li key={subMenuItem.id} className="menu-item">
                        <Link
                          to={subMenuItem.path}
                          onClick={() => setIsOpen((prev) => !prev)}
                        >
                          {subMenuItem.label}
                        </Link>
                      </li>
                    ))}
                  </ol>
                )}
              </li>
            ))}
          </ol>
        </nav>
      )}
    </header>
  );
};

export default Header;
