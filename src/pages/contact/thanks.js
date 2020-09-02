import React from 'react';
import Layout from '../../components/Layout';

export default () => (
  <Layout>
    <section className=" section">
      <div className="thank-you container">
        <div className="content">
          <h1>Thank you!</h1>
          <p>
            I will get back to as soon as possible. Have a lovely day!{' '}
            <span style={{ color: 'red' }}>&hearts;</span>
          </p>
          <a href="/" className="home-link">
            Home
          </a>
        </div>
      </div>
    </section>
  </Layout>
);
