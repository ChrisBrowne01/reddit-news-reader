import React from 'react';
import Skeleton from 'react-loading-skeleton';
import './Post.css';
import './PostLoading.css';
import { TbArrowBigUp, TbArrowBigDown} from 'react-icons/tb';
import {BiMessage} from 'react-icons/bi';
import getRandomNumber from '../../utils/getRandomNumber';
import './PostLoading.css'

const PostLoading = () => {
  return (
    <article className="post">
      <div className="post-votes-container">
        <button
          type="button"
          className="vote-action-button up-vote"
          aria-label="upvote"
        >
          <TbArrowBigUp className="vote-action" />
        </button>
        <Skeleton className="post-votes-value post-votes-value-loading" />
        <button
          type="button"
          className="vote-action-button down-vote"
          aria-label="downvote"
        >
          <TbArrowBigDown className="vote-action" />
        </button>
      </div>
      <div className="post-container">
        <h3 className="post-title">
          <Skeleton width={getRandomNumber(100, 200)} />
        </h3>

        <div className="post-image-container">
          <Skeleton height={250} />
        </div>

        <div className="post-details">
          <span>
            <Skeleton width={getRandomNumber(20, 50)} />
          </span>
          <span>
            <Skeleton width={getRandomNumber(50, 100)} />
          </span>
          <span className="post-comments-container">
            <button
              type="button"
              className="vote-action-button"
              aria-label="Show comments"
            >
              <BiMessage className="vote-action" />
            </button>
            <Skeleton width={getRandomNumber(10, 50)} />
          </span>
        </div>
      </div>
    </article>
  );
};

export default PostLoading;
  