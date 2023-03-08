import React, { useState } from 'react';
import './Post.css';
import ReactPlayer from 'react-player';
import { TbArrowBigDownFilled, TbArrowBigDown, TbArrowBigUpFilled, TbArrowBigUp} from 'react-icons/tb';
import {BiMessage} from 'react-icons/bi';
import Skeleton from 'react-loading-skeleton';
import moment from 'moment';
import shortenNumber from '../../utils/shortenNumber';
import Box from '../../components/Box/Box';
import Comment from '../Comment/Comment';
import Avatar from '../Avatar/Avatar';

const Post = (props) => {
  const [voteRating, setvoteRating] = useState(0);

  const { post, onToggleComments } = props;

  /**
   * @param {number} newValue The new vote value
   */
  const onVote = (newValue) => {
    if (newValue === voteRating) {
      setvoteRating(0);
    } else if (newValue === 1) {
      setvoteRating(1);
    } else {
      setvoteRating(-1);
    }
  };
  
  const renderComments = () => {
    if (post.errorComments) {
      return (
        <div>
          <h3>Error loading comments</h3>
        </div>
      );
    }

    if (post.loadingComments) {
      return (
        <div>
          <Skeleton />
          <Skeleton />
          <Skeleton />
          <Skeleton />
        </div>
      );
    }
 
    if (post.showingComments){
      return (
        <div>
          {post.comments.map((comment) => (
            <Comment comment={comment} key={comment.id} />
          ))}
        </div>
      );
    }

    return null;
  };

  return (
    <article key={post.id}>
      <Box>  
        <div className="post-wrapper">

          <div className="votes-container">

          <button
            type="button"
            className={`vote-action up-vote ${voteRating === 1 && 'active'}`}
            onClick={() => onVote(1)}
            aria-label="upvote"
          >
            {voteRating === 1 ? (
              <TbArrowBigUpFilled className="vote-action" />
            ) : (
              <TbArrowBigUp className="vote-action" />
            )}
          </button>

          <p className={`post-votes-value ${voteRating === 1 ? 'up-vote' : voteRating === -1 ? 'down-vote' : ''}`}>
            {shortenNumber(post.ups, 1)}
          </p>

          <button
            type="button"
            className={`vote-action down-vote ${voteRating === -1 && 'active'}`}
            onClick={() => onVote(-1)}
            aria-label="downvote"
          >
            {voteRating === -1 ? (
              <TbArrowBigDownFilled className="vote-action" />
            ) : (
              <TbArrowBigDown className="vote-action" />
            )}
          </button>

          </div>
          <div className="post-container">        
          <h3 className='current-article-title'>{post.title}</h3>
          {post.media && post.media.reddit_video ? (
            <ReactPlayer
              width="100%"
              src={post.media.reddit_video.fallback_url}
              controls
              loop={true}
              preload='auto'
              className={`post-media ${post.over_18 && 'over-18-content'}`}
            />
          ) : !post.kind === 't1_' ? (
            <div className='post-image-container'>
            {post.url && <img src={post.url} alt="" style={"display:none;"} className="image-post"/>}
              </div>
          ) : (
            <div className='post-image-container'>
            {post.url && <img src={post.url} alt="" className="image-post"/>}
              </div>
          )}
          <div className="avatar">
            <span>
              <Avatar naem={post.author} />
              <span className="author-username">By {post.author}</span>
              <span className="author-username">{post.author}</span>
            </span>
            <span>{moment.unix(post.created_utc).fromNow()}</span>
            <span className="post-comments-container">
              <hr / >
              <button
                type="button"
                className={`vote-action-button ${post.showingComments && 'showing-comments'}`}
                onClick={() => onToggleComments(post.permalink)}
                aria-label="Show comments">

                <BiMessage className="vote-action" />
              </button>
              {shortenNumber(post.num_comments, 1)}
            </span>
          </div>

          {renderComments()}
        </div>
      </div>
    </Box>
  </article>
  );
};;

export default Post;
