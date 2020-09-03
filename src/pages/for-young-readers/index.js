import React from 'react';
import Layout from '../../components/Layout';
import FYRRoll from '../../components/FYRRoll';
import ScrollDown from '../../components/ScrollDown';
export default class FYRIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <div
          className="full-width-image-container margin-top-0"
          style={{
            backgroundImage: `url('/img/young.jpg')`,
          }}
        >
          <h1 className="section-page-heading has-text-weight-bold is-size-1">
            For young readers
          </h1>
          <ScrollDown />
        </div>
        <section className="section">
          <div className="container">
            <div className="content section-content">
              <p className="section-intro">
                Stories and more for growing minds
              </p>
              <FYRRoll />
            </div>
          </div>
        </section>
      </Layout>
    );
  }
}
