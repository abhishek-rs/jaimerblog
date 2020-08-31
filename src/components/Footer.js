import React from 'react';
import { Link } from 'gatsby';
import facebook from '../img/social/facebook.svg';
import instagram from '../img/social/instagram.svg';
import twitter from '../img/social/twitter.svg';

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer">
        <div className="content">
          <div className="container">
            <div style={{ maxWidth: '100vw' }} className="columns">
              <div className="footer-column column is-4">
                <section className="menu">
                  <ul className="menu-list">
                    <li>
                      <Link to="/" className="navbar-item">
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/for-young-readers">
                        Young readers
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/article">
                        Articles
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/short-stories">
                        Short stories
                      </Link>
                    </li>
                  </ul>
                </section>
              </div>
              <div className="footer-column column is-4">
                <section>
                  <ul className="menu-list">
                    <li>
                      <Link className="navbar-item" to="/blog">
                        Blog
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/about">
                        About
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/contact">
                        Contact
                      </Link>
                    </li>
                  </ul>
                </section>
              </div>
              <div className="footer-column column is-4 social">
                <a
                  title="facebook"
                  target="_blank"
                  rel="noreferrer"
                  href="https://facebook.com"
                >
                  <img
                    src={facebook}
                    alt="Facebook"
                    style={{ width: '1em', height: '1em' }}
                  />
                </a>
                <a
                  title="twitter"
                  target="_blank"
                  rel="noreferrer"
                  href="https://twitter.com"
                >
                  <img
                    className="fas fa-lg"
                    src={twitter}
                    alt="Twitter"
                    style={{ width: '1em', height: '1em' }}
                  />
                </a>
                <a
                  title="instagram"
                  target="_blank"
                  rel="noreferrer"
                  href="https://instagram.com"
                >
                  <img
                    src={instagram}
                    alt="Instagram"
                    style={{ width: '1em', height: '1em' }}
                  />
                </a>
              </div>
            </div>
            <div className="copyright">
              <span>
                Designed and developed with{' '}
                <span style={{ color: 'red' }}>&hearts;</span> by{' '}
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/abhishek-rs"
                >
                  Abhishek
                </a>{' '}
                using{' '}
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.gatsbyjs.org/docs/"
                >
                  GatsbyJS
                </a>{' '}
                and{' '}
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/netlify/netlify-cms"
                >
                  NetlifyCMS
                </a>
              </span>
            </div>
          </div>
        </div>
      </footer>
    );
  }
};

export default Footer;
