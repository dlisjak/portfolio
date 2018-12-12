import React from 'react';
import { NavLink, Link } from 'react-router-dom';

class Menu extends React.Component {
  render() {
    const menuItems = [
      { label: 'Domov', link: '/' },
      //{ label: 'O nas', link: '/o-nas' },
      //{ label: 'Storitve', link: '/storitve' },
      { label: 'Portfolio', link: '#portfolio' }
      //{ label: 'Kontakt', link: '/kontakt' }
    ];

    const menu = menuItems.map(({ label, link }) => {
      return (
        <li key={label}>
          <NavLink
            exact
            to={link}
            className="menu-item"
            activeClassName="active-menu"
          >
            {label}
          </NavLink>
        </li>
      );
    });

    return (
      <nav className="gtco-nav" role="navigation">
        <div className="gtco-container">
          <div className="row">
            <div className="col-sm-2 col-xs-12">
              <div id="gtco-logo">
                <Link to="/">
                  <img src="images/logo.png" alt="Logo" />
                </Link>
              </div>
            </div>
            <div className="col-xs-10 text-right menu-1">
              <ul>{menu}</ul>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default Menu;
