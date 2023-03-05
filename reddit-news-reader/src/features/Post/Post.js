import React, { useState } from 'react';
import SkeletonContent from 'react-native-skeleton-content'
import './Post.css';
import { TbArrowBigDownFilled, TbArrowBigDown, TbArrowBigUpFilled, TbArrowBigUp} from 'react-icons/tb';
import {BiMessage} from 'react-icons/bi';
import moment from 'moment';
import shortenNumber from '../../utils/shortenNumber';
import Box from '../../components/Box/Box';
import Comment from '../Comment/Comment';
import Avatar from '../Avatar/Avatar';
import './Post.css'

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

  const renderUpVote = () => {
    if (voteRating === 1) {
      return <TbArrowBigUpFilled className="vote-action" />;
    }
    return <TbArrowBigUp className="vote-action" />;
  };

  const renderDownVote = () => {
    if (voteRating === -1) {
      return <TbArrowBigDownFilled className="vote-action" />;
    }
    return <TbArrowBigDown className="vote-action" />;
  };

  const getVoteType = () => {
    if (voteRating === 1) {
      return 'up-vote';
    }
    if (voteRating === -1) {
      return 'down-vote';
    }
    return '';
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
          <SkeletonContent />
          <SkeletonContent />
          <SkeletonContent />
          <SkeletonContent />
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
              aria-label="upvote">
              {renderUpVote()}
            </button>

            <p className={`post-votes-value ${getVoteType()}`}>
              {shortenNumber(post.ups, 1)}
            </p>

            <button
              type="button"
              className={`vote-action down-vote ${voteRating === -1 && 'active'}`}
              onClick={() => onVote(-1)}
              aria-label="downvote">
              {renderDownVote()}
            </button>

          </div>
          <div className="post-container">        
          <h3 className='current-article-title'>{post.title}</h3>

          <div className='post-image-container'>
            <img src={post.url} alt="" className="image-post"/>
          </div>
            
          <div>
            <span>
              <Avatar naem={post.author} />
              <span className="author-username">By {post.author}</span>
              <span className="author-username">{post.author}</span>
            </span>
            <span>{moment.unix(post.created_utc).fromNow()}</span>
            <span className="post-comments-container">
              <hr />
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
