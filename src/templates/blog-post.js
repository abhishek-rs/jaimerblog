import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import { kebabCase } from 'lodash';
import { Helmet } from 'react-helmet';
import { graphql, Link } from 'gatsby';
import Layout from '../components/Layout';
import Content, { HTMLContent } from '../components/Content';
import {
  templateKeyToType,
  templateKeyToBgImage,
} from '../helpers/conversionHelper';

export const BlogPostTemplate = ({
  content,
  contentComponent,
  description,
  tags,
  title,
  helmet,
}) => {
  const PostContent = contentComponent || Content;

  return (
    <section className="section post-section">
      {helmet || ''}
      <div className="container content">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <h1 className="title is-size-2 post-title">{title}</h1>
            <p className="post-description">{description}</p>
            <PostContent content={content} className="post-body" />
            {tags && tags.length ? (
              <div style={{ marginTop: `4rem` }}>
                <h3 className="tag-title">Tags</h3>
                <ul className="taglist blog-taglist">
                  {tags.map((tag) => (
                    <li key={tag + `tag`}>
                      <Link
                        className="home-link"
                        to={`/tags/${kebabCase(tag)}/`}
                      >
                        {tag}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
};

BlogPostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.object,
};

const BlogPost = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      {post.frontmatter.featuredimage ? (
        <Img
          className={'post-top-image margin-top-0'}
          fluid={post.frontmatter.featuredimage.childImageSharp.fluid}
        />
      ) : (
        <div
          className="post-top-image margin-top-0"
          style={{
            backgroundImage: `url('${
              templateKeyToBgImage[post.frontmatter.templateKey]
            }')`,
          }}
        ></div>
      )}
      <BlogPostTemplate
        content={post.html}
        contentComponent={HTMLContent}
        description={post.frontmatter.description}
        helmet={
          <Helmet
            titleTemplate={`%s | ${
              templateKeyToType[post.frontmatter.templateKey]
            }`}
          >
            <title>{`${post.frontmatter.title}`}</title>
            <meta
              name="description"
              content={`${post.frontmatter.description}`}
            />
          </Helmet>
        }
        tags={post.frontmatter.tags}
        title={post.frontmatter.title}
      />
    </Layout>
  );
};

BlogPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
};

export default BlogPost;

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
        tags
        templateKey
        featuredimage {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;
