import React from 'react';
import moment from 'moment';
import ReactMarkdown from 'react-markdown';
import { TiArrowSortedDown, TiArrowSortedUp } from 'react-icons/ti';
import Avatar from '../Avatar/Avatar';

const Comment = (props) => {
  const { comment } = props;
  const commentLike = comment.like;

  const renderLikes = () => {
    if (!commentLike) {
      return '';
    } else if (commentLike > 0) {
      return <TiArrowSortedUp className="vote-comment" />;
    } else if (commentLike < 0) {
      return <TiArrowSortedDown className="vote-comment" />;
    } else {
      return '';
    }
  };

  return (
    <div className="comment">
      <ReactMarkdown source={comment.body} />
      <div className="comment-metadata">
        <Avatar name={comment.author} />
        <p className="comment-author">{comment.author}</p>
        <p className="comment-created-time">
          {moment.unix(comment.created_utc).fromNow()}
        </p>
        <p className="comment-likes">{renderLikes()}</p>
      </div>
    </div>
  );
};

export default Comment;
