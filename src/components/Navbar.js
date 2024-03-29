import React from 'react';
import { Link } from 'gatsby';
import { useState } from 'react';

const Navbar = class extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            active: false,
            navBarActiveClass: '',
        };
    }

    toggleHamburger = () => {
        // toggle the active boolean in the state
        this.setState(
            {
                active: !this.state.active,
            },
            // after state has been updated,
            () => {
                // set the class in state for the navbar accordingly
                this.state.active
                    ? this.setState({
                          navBarActiveClass: 'is-active',
                      })
                    : this.setState({
                          navBarActiveClass: '',
                      });
            }
        );
    };

    render() {
        return (
            <nav
                className="navbar"
                role="navigation"
                aria-label="main-navigation"
            >
                <div className="container">
                    <div className="navbar-brand">
                        {/* Hamburger menu */}
                        <Link
                            to="/"
                            className="navbar-item logo logo-burger"
                            title="Logo"
                        >
                            Jaime Ellenberger
                        </Link>
                        <div
                            className={`navbar-burger burger ${this.state.navBarActiveClass}`}
                            data-target="navMenu"
                            onClick={() => this.toggleHamburger()}
                        >
                            <span />
                            <span />
                            <span />
                        </div>
                    </div>
                    <div
                        id="navMenu"
                        className={`navbar-menu ${this.state.navBarActiveClass}`}
                    >
                        <div className="navbar-end navbar-centered has-text-centered">
                            <Link
                                className="navbar-item"
                                to="/for-young-readers"
                            >
                                Young readers
                            </Link>
                            <Link className="navbar-item" to="/short-stories">
                                Short stories
                            </Link>
                            <Link className="navbar-item" to="/article">
                                Articles
                            </Link>
                            <Link
                                to="/"
                                className={`navbar-item logo ${
                                    this.state.active
                                        ? 'logo-inactive'
                                        : 'logo-active'
                                }`}
                                title="Logo"
                            >
                                Jaime Ellenberger
                            </Link>
                            <NavGroup label={'Blogs'}>
                                <Link className="navbar-item" to="/blog">
                                    Personal Blog
                                </Link>
                                <Link
                                    className="navbar-item"
                                    to="/academic-blog"
                                >
                                    Academic Blog
                                </Link>
                            </NavGroup>
                            <Link className="navbar-item small-only" to="/blog">
                                Personal Blog
                            </Link>
                            <Link
                                className="navbar-item small-only"
                                to="/academic-blog"
                            >
                                Academic Blog
                            </Link>
                            <Link className="navbar-item" to="/contact">
                                Contact
                            </Link>
                            <Link className="navbar-item" to="/about">
                                About
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>
        );
    }
};

export default Navbar;

const NavGroup = ({ label, children }) => {
    const [showOptions, setShowOptions] = useState(false);
    const handleFocus = (show) => () => setShowOptions(show);

    return (
        <div
            className="navbar-item navbar-group large-only"
            onMouseEnter={handleFocus(true)}
            onMouseLeave={handleFocus(false)}
            onFocusCapture={handleFocus(true)}
            onBlurCapture={handleFocus(false)}
        >
            <div className="nav-group-label">{label}</div>
            <div
                className={`nav-group-content ${
                    showOptions ? 'group-active' : ''
                }`}
            >
                {children}
            </div>
        </div>
    );
};
