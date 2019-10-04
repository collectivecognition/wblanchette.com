import  React from 'react';
import Markdown from 'react-markdown';

import Layout from '../../components/Layout';
import posts from '../../util/posts';

export default class extends React.Component {
  static async getInitialProps({ res, query }) {
    let content, post;

    try {
      post = posts.find(p => p.id === query.id);

      if (!post) {
        throw(new Error());
      } else {
        content = (await require(`../../docs/posts/${post.path}`)).default;
      }
    } catch (e) {
      content = 'Not found';
    }

    return { content, post };
  }

  render() {
    return (
      <Layout>
        <div>
          <h1>{ this.props.post.title }</h1>
          <Markdown
            source={this.props.content}
          />
        </div>
        <style jsx global>{`
        `}</style>
      </Layout>
    );
  }ß
};
