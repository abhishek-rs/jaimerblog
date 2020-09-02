import React from 'react';
import Layout from '../../components/Layout';
import ShortStoryRoll from '../../components/ShortStoryRoll';
import ScrollDown from '../../components/ScrollDown';
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
          <h1 className="section-page-heading has-text-weight-bold is-size-1">
            Short Stories
          </h1>
          <ScrollDown />
        </div>
        <section className="section">
          <div className="container">
            <div className="content">
              <p className="section-intro">
                Stories crossing multiple genres, styles, and audiences. Find
                one for you!
              </p>
              <ShortStoryRoll />
            </div>
          </div>
        </section>
      </Layout>
    );
  }
}
