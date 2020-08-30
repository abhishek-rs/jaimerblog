import React from 'react';
import Layout from '../../components/Layout';
import ShortStoryRoll from '../../components/ShortStoryRoll';

export default class ShortStoryIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <div
          className="full-width-image-container margin-top-0"
          style={{
            backgroundImage: `url('/img/books.jpg')`,
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
            Short Stories
          </h1>
        </div>
        <section className="section">
          <div className="container">
            <div className="content">
              <ShortStoryRoll />
            </div>
          </div>
        </section>
      </Layout>
    );
  }
}
