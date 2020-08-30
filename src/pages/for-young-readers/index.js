import React from 'react';

import Layout from '../../components/Layout';
import FYRRoll from '../../components/FYRRoll';

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
          <h1
            className="has-text-weight-bold is-size-1"
            style={{
              backgroundColor: '#427AA1',
              color: 'white',
              padding: '1rem',
            }}
          >
            For younguns
          </h1>
        </div>
        <section className="section">
          <div className="container">
            <div className="content">
              <FYRRoll />
            </div>
          </div>
        </section>
      </Layout>
    );
  }
}
