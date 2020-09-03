import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import PreviewCompatibleImage from './PreviewCompatibleImage';
import NothingToSee from './NothingToSee';
import {
  templateKeyToType,
  templateKeyToPage,
} from '../helpers/conversionHelper';

const PostRoll = ({ posts, showSectionLinks = false }) => (
  <div className="columns is-multiline">
    {posts.length ? (
      posts.map(({ node: post }) => (
        <div className="is-parent column is-6" key={post.id}>
          <article
            className={`blog-list-item tile is-child box post-roll-item ${
              post.frontmatter.featuredpost ? 'is-featured' : ''
            }`}
          >
            <header className="post-header">
              {post.frontmatter.featuredimage ? (
                <div className="featured-thumbnail post-image">
                  <PreviewCompatibleImage
                    imageInfo={{
                      image: post.frontmatter.featuredimage,
                      alt: `featured image thumbnail for post ${post.frontmatter.title}`,
                    }}
                    inRoll={true}
                  />
                </div>
              ) : null}
              <p className="post-meta">
                <Link
                  className="title has-text-primary is-size-4"
                  to={post.fields.slug}
                >
                  {post.frontmatter.title}
                </Link>
                <span> &bull; </span>
                <span className="subtitle is-size-5 is-block">
                  {post.frontmatter.date}
                </span>
              </p>
            </header>
            <p className="post-excerpt">
              {post.excerpt}
              <br />
              <br />
              <Link className="button" to={post.fields.slug}>
                Keep Reading →
              </Link>
              {showSectionLinks && (
                <Link
                  className="button second-button"
                  to={templateKeyToPage[post.frontmatter.templateKey]}
                >
                  {`Check out ${
                    templateKeyToType[post.frontmatter.templateKey]
                  } section →`}
                </Link>
              )}
            </p>
          </article>
        </div>
      ))
    ) : (
      <NothingToSee />
    )}
  </div>
);

PostRoll.propTypes = {
  posts: PropTypes.array,
  showSectionLinks: PropTypes.bool,
};

export default PostRoll;
