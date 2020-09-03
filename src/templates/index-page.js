import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql } from 'gatsby';
import Layout from '../components/Layout';
import FeaturedPostRoll from '../components/FeaturedPostRoll';
import ScrollDown from '../components/ScrollDown';

export const IndexPageTemplate = ({
  image,
  profileImage,
  title,
  heading,
  subheading,
  mainpitch,
  description,
}) => (
  <div>
    <div
      className="full-width-image margin-top-0"
      style={{
        backgroundImage: `url(${
          !!image.childImageSharp ? image.childImageSharp.fluid.src : image
        })`,
        backgroundPosition: `top left`,
        backgroundAttachment: `fixed`,
      }}
    >
      <div className="hero-backdrop"></div>
      <div className="index-intro-container">
        <div className="profile-image margin-top-0">
          <img
            src={
              !!profileImage.childImageSharp
                ? profileImage.childImageSharp.fluid.src
                : profileImage
            }
            alt={'profile-image'}
          />
        </div>
        <div className="profile-intro">
          <h1>{title}</h1>
          <p>{subheading}</p>
        </div>
        <ScrollDown />
      </div>
    </div>
    <section className="section section--gradient">
      <div className="container">
        <div className="section">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <div className="content">
                <div className="content">
                  <div className="tile">
                    <h1 className="title landing-title">{mainpitch.title}</h1>
                  </div>
                  <div className="tile">
                    <p className="subtitle">{mainpitch.description}</p>
                  </div>
                </div>
                <div className="column is-12">
                  <p className="landing-title">Recent posts</p>
                  <FeaturedPostRoll />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
);

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  profileImage: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
};

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        profileImage={frontmatter.profileImage}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        mainpitch={frontmatter.mainpitch}
        description={frontmatter.description}
      />
    </Layout>
  );
};

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        profileImage {
          childImageSharp {
            fluid(maxWidth: 240, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heading
        subheading
        mainpitch {
          title
          description
        }
        description
      }
    }
  }
`;
