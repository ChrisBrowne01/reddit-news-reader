import React from 'react';
import moment from 'moment';
import ReactMarkdown from 'react-markdown';
import ReactPlayer from 'react-player';
import { TiArrowSortedDown, TiArrowSortedUp } from 'react-icons/ti';
import Avatar from '../Avatar/Avatar';
import './Comment.css'

const Comment = (props) => {
  const { comment } = props;
  const commentLike = comment.like;

  const renderLikes = () => {
    return commentLike === 0 ? null :
      commentLike > 0 ? <TiArrowSortedUp className="vote-comment" /> : <TiArrowSortedDown className="vote-comment" />;
  };  

  return (
    <div className="comment">
      <ReactMarkdown source={comment.body} />
      {comment.media && comment.media.reddit_video ? (
        <ReactPlayer
          url={comment.media.reddit_video.fallback_url}
          width="100%"
          height="auto"
          controls
        />
      ) : null}
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
