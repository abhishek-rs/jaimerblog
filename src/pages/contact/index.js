import React from 'react';
import { navigate } from 'gatsby-link';
import Layout from '../../components/Layout';

function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');
}

export default class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isValidated: false };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    // Post message to telegram
    const contactMessage =
      'You have a new message! Name: ' +
      this.state.name +
      ', Email: ' +
      this.state.email +
      ', Message: ' +
      this.state.message;

    fetch(
      `https://api.telegram.org/bot${process.env.GATSBY_TELEGRAM_BOT}/sendMessage?chat_id=${process.env.GATSBY_TELEGRAM_CHAT_ID}&text=` +
        contactMessage,
      { method: 'GET' }
    ).catch((err) => {
      console.log('Sending message to telegram failed: ', err);
    });

    // Submit to netlify forms
    const form = e.target;
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...this.state,
      }),
    })
      .then(() => navigate(form.getAttribute('action')))
      .catch((error) => alert(error));
  };

  render() {
    return (
      <Layout>
        <section className="section">
          <div className="container">
            <div className="contact content">
              <h1>Connect with me</h1>
              <p>
                If you liked my work and would like to talk about any projects
                you'd like for me to work on or if you just wanna say hello, go
                on!
              </p>
              <div className="contact-blocks">
                <form
                  name="contact"
                  className="contact-form"
                  method="post"
                  action="/contact/thanks/"
                  data-netlify="true"
                  data-netlify-honeypot="bot-field"
                  onSubmit={this.handleSubmit}
                >
                  {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
                  <input type="hidden" name="form-name" value="contact" />
                  <div hidden>
                    <label>
                      Don’t fill this out:{' '}
                      <input name="bot-field" onChange={this.handleChange} />
                    </label>
                  </div>
                  <div className="field">
                    <label className="label" htmlFor={'name'}>
                      Name
                    </label>
                    <div className="control">
                      <input
                        className="input"
                        type={'text'}
                        name={'name'}
                        onChange={this.handleChange}
                        id={'name'}
                        required={true}
                        placeholder="Michael Scott"
                      />
                    </div>
                  </div>
                  <div className="field">
                    <label className="label" htmlFor={'email'}>
                      Email
                    </label>
                    <div className="control">
                      <input
                        className="input"
                        type={'email'}
                        name={'email'}
                        onChange={this.handleChange}
                        id={'email'}
                        required={true}
                        placeholder="michael@dundermifflin.com"
                      />
                    </div>
                  </div>
                  <div className="field">
                    <label className="label" htmlFor={'message'}>
                      Message
                    </label>
                    <div className="control">
                      <textarea
                        className="textarea"
                        name={'message'}
                        onChange={this.handleChange}
                        id={'message'}
                        required={true}
                      />
                    </div>
                  </div>
                  <div className="field">
                    <button className="home-link" type="submit">
                      Send
                    </button>
                  </div>
                </form>
                <div className="social-media">
                  <p>Other places you can reach me</p>
                  <div className="group">
                    <a
                      title="facebook"
                      target="_blank"
                      rel="noreferrer"
                      href="https://facebook.com"
                    >
                      Facebook
                    </a>
                    <a
                      title="twitter"
                      target="_blank"
                      rel="noreferrer"
                      href="https://twitter.com"
                    >
                      Twitter
                    </a>
                    <a
                      title="instagram"
                      target="_blank"
                      rel="noreferrer"
                      href="https://instagram.com"
                    >
                      Instagram
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    );
  }
}
