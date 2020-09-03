import React from 'react';
import Layout from '../../components/Layout';
import ArticleRoll from '../../components/ArticleRoll';
import ScrollDown from '../../components/ScrollDown';
export default class ArticleIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <div
          className="full-width-image-container margin-top-0"
          style={{
            backgroundImage: `url('/img/articles.jpg')`,
          }}
        >
          <h1 className="section-page-heading has-text-weight-bold is-size-1">
            Articles
          </h1>
          <ScrollDown />
        </div>
        <section className="section">
          <div className="container">
            <div className="content section-content">
              <p className="section-intro">
                Entries submitted to international magazines and websites
              </p>
              <ArticleRoll />
            </div>
          </div>
        </section>
      </Layout>
    );
  }
}
