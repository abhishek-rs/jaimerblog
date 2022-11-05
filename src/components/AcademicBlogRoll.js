import React from 'react';
import PropTypes from 'prop-types';
import { graphql, StaticQuery } from 'gatsby';
import PostRoll from './PostRoll';

class AcademicBlogRoll extends React.Component {
    render() {
        const { data } = this.props;
        const { edges: posts } = data.allMarkdownRemark;
        return <PostRoll posts={posts} />;
    }
}

AcademicBlogRoll.propTypes = {
    data: PropTypes.shape({
        allMarkdownRemark: PropTypes.shape({
            edges: PropTypes.array,
        }),
    }),
};

export default () => (
    <StaticQuery
        query={graphql`
            query AcademicBlogRollQuery {
                allMarkdownRemark(
                    sort: { order: DESC, fields: [frontmatter___date] }
                    filter: {
                        frontmatter: {
                            templateKey: { eq: "academic-blog-post" }
                        }
                    }
                ) {
                    edges {
                        node {
                            excerpt(pruneLength: 400)
                            id
                            fields {
                                slug
                            }
                            frontmatter {
                                title
                                templateKey
                                date(formatString: "MMMM DD, YYYY")
                                featuredpost
                                featuredimage {
                                    childImageSharp {
                                        fluid(maxWidth: 1200, quality: 100) {
                                            ...GatsbyImageSharpFluid
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        `}
        render={(data, count) => <AcademicBlogRoll data={data} count={count} />}
    />
);
