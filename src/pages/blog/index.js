import React from 'react';
import Layout from '../../components/Layout';
import BlogRoll from '../../components/BlogRoll';
import ScrollDown from '../../components/ScrollDown';
export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <div
          className="full-width-image-container margin-top-0"
          style={{
            backgroundImage: `url('/img/blog.jpg')`,
          }}
        >
          <h1 className="section-page-heading has-text-weight-bold is-size-1">
            My Blog
          </h1>
          <ScrollDown />
        </div>
        <section className="section">
          <div className="container">
            <div className="content">
              <p className="section-intro">
                Read about my personal experiences while teaching and traveling
                abroad
              </p>
              <BlogRoll />
            </div>
          </div>
        </section>
      </Layout>
    );
  }
}
