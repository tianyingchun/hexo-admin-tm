import _ from 'lodash';
import path from 'path';
import moment from 'moment';
import cx from 'classnames';
import { Component } from 'react';
import { NewPost } from './NewPost';
import { Link } from 'react-router-dom';
import { Rendered } from '../shared/Rendered';
import { postService } from '../../services/PostService';
import { IPost } from '../../models/IPost';
import { IRouteProps } from '../IRouteProps';

export class Posts extends Component<IRouteProps, any> {
  constructor(props) {
    super(props);
    this.state = {
      selected: 0,
      posts: [],
    };
  }

  public onNew = (post) => {
    const posts = this.state.posts.slice();
    posts.unshift(post);
    this.setState({ posts });
    this.props.history.push(`/posts/${post._id}`, {
      postId: post._id,
    });
  }

  public goTo = (id) => (e) => {
    if (e) { e.preventDefault(); }
    this.props.history.push(`/posts/${id}`, {
      postId: id,
    });
  }

  public componentWillMount() {
    this.loadData(this.props);
  }

  public componentWillReceiveProps(nextProps) {
    this.loadData(nextProps);
  }

  public async loadData(props) {
    const posts = await postService.posts();
    const items = _.sortBy(
      _.filter(posts, (post: IPost) => !post.isDiscarded),
      ['isDraft', 'date'],
    ).reverse();
    this.setState({
      posts: items,
    });
  }

  public render() {
    if (!this.state.posts) {
      return <div className="posts">Loading...</div>;
    }
    const current = this.state.posts[this.state.selected] || {};
    const url = window.location.href.replace(/^.*\/\/[^\/]+/, '').split('/');
    const rootPath = url.slice(0, url.indexOf('admin')).join('/');
    return (
      <div className="posts">
        <ul className="posts_list">
          <NewPost onNew={this.onNew} />
          {
            this.state.posts.map((post, i) =>
              <li key={post._id} className={cx({
                'posts_post': true,
                'posts_post--draft': post.isDraft,
                'posts_post--selected': i === this.state.selected,
              })}
                onDoubleClick={this.goTo(post._id)}
                onClick={this.setState.bind(this, { selected: i }, null)}
              >
                <span className="posts_post-title">
                  {post.title}
                </span>
                <span className="posts_post-date">
                  {moment(post.date).format('MMM Do YYYY')}
                </span>
                <a className="posts_perma-link" target="_blank" href={path.join(rootPath, '/', post.path)}>
                  <i className="fa fa-link" />
                </a>
                <Link className="posts_edit-link" to={{ pathname: `posts/${post._id}` }}>
                  <i className="fa fa-pencil" />
                </Link>
              </li>,
            )
          }
        </ul>
        <div className={cx({
          'posts_display': true,
          'posts_display--draft': current.isDraft,
        })}>
          {current.isDraft && <div className="posts_draft-message">Draft</div>}
          <Rendered className="posts_content" text={current.content} />
        </div>
      </div>
    );
  }
}
