import React from 'react';
import ContentLoader from 'react-content-loader';
import { TbArrowBigUp, TbArrowBigDown } from 'react-icons/tb';
import { BiMessage } from 'react-icons/bi';

const PostLoading = () => {
  return (
    <article className="post">
      <ContentLoader className="post-container">
        <div className="post-votes-container">
          <button
            type="button"
            className="vote-action-button up-vote"
            aria-label="upvote"
          >
            <TbArrowBigUp className="vote-action" />
          </button>
          <rect
            className="rec-img"
            x="0"
            y="0"
            rx="5"
            ry="5"
            width="70"
            height="70"
          />
          <button
            type="button"
            className="vote-action-button down-vote"
            aria-label="downvote"
          >
            <TbArrowBigDown className="vote-action" />
          </button>
        </div>
        <div className="post-content">
          <h3 className="post-title">
            <ContentLoader
              className="post-header-bar"
              width={250}
              height={14}
              viewBox="0 0 250 14"
              backgroundColor="#f2f2f2"
              foregroundColor="#e0e0e0"
            >
              <rect x="0" y="0" rx="4" ry="4" width="250" height="14" />
            </ContentLoader>
          </h3>
          <div className="post-image-container">
            <ContentLoader
              className="post-content-bar"
              width={300}
              height={10}
              viewBox="0 0 300 10"
              backgroundColor="#f2f2f2"
              foregroundColor="#e0e0e0"
            >
              <rect x="0" y="0" rx="3" ry="3" width="300" height="10" />
            </ContentLoader>
          </div>
          <div className="post-details">
            <span>
              <ContentLoader
                className="post-content-bar"
                width={100}
                height={10}
                viewBox="0 0 100 10"
                backgroundColor="#f2f2f2"
                foregroundColor="#e0e0e0"
              >
                <rect x="0" y="0" rx="2" ry="2" width="100" height="10" />
              </ContentLoader>
            </span>
            <span>
              <ContentLoader
                className="post-content-bar"
                width={100}
                height={10}
                viewBox="0 0 100 10"
                backgroundColor="#f2f2f2"
                foregroundColor="#e0e0e0"
              >
                <rect x="0" y="0" rx="2" ry="2" width="100" height="10" />
              </ContentLoader>
            </span>
            <span className="post-comments-container">
              <button
                type="button"
                className="vote-action-button"
                aria-label="Show comments"
              >
                <ContentLoader
                  className="post-content-bar"
                  width={10}
                  height={8}
                  viewBox="0 0 10 8"
                  backgroundColor="#f2f2f2"
                  foregroundColor="#e0e0e0"
                >
                  <rect x="0" y="0" rx="2" ry="2" width="10" height="8" />
                </ContentLoader>
                <BiMessage className="vote-action" />
              </button>
            </span>
            <span>
              <ContentLoader
                className="post-content-bar"
                width={70}
                height={8}
                viewBox="150 125 70 8"
                backgroundColor="#f2f2f2"
                foregroundColor="#e0e0e0"
              >   
                <rect x="150" y="125" rx="2" ry="2" width="70" height="8" />
              </ContentLoader>
            </span>
            <span>
              <ContentLoader
                className="post-content-bar"
                width={10}
                height={8}
                viewBox="340 125 10 8"
                backgroundColor="#f2f2f2"
                foregroundColor="#e0e0e0"
              >    
                <rect x="340" y="125" rx="2" ry="2" width="40" height="8" />
              </ContentLoader>
            </span>
          </div>
        </div>
      </ContentLoader>
    </article>
  );
};

export default PostLoading;
  