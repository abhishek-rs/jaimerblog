import React from 'react';
import { Helmet } from 'react-helmet';
import Layout from '../../components/Layout';
import AcademicBlogRoll from '../../components/AcademicBlogRoll';
import ScrollDown from '../../components/ScrollDown';

export default class BlogIndexPage extends React.Component {
    render() {
        return (
            <Layout>
                <Helmet title={`Section | Academic Blog`} />
                <div
                    className="full-width-image-container margin-top-0"
                    style={{
                        backgroundImage: `url('/img/academic-blog.jpg')`,
                    }}
                >
                    <h1 className="section-page-heading has-text-weight-bold is-size-1">
                        My Academic Blog
                    </h1>
                    <ScrollDown />
                </div>
                <section className="section">
                    <div className="container">
                        <div className="content section-content">
                            <p className="section-intro">
                                Read blogs I wrote during my studies in language
                                acquisition and teaching English as a foreign
                                language
                            </p>
                            <AcademicBlogRoll />
                        </div>
                    </div>
                </section>
            </Layout>
        );
    }
}
