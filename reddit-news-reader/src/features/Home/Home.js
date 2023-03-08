import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SkeletonTheme } from 'react-loading-skeleton';
import Post from '../Post/Post'; 
import PostLoading from '../Post/PostLoading';
import '../Post/PostLoading.css';
import {
  fetchPosts,
  selectFilteredPosts,
  setSearchTerm,
  fetchComments,
} from '../../store/redditSlice';
import './Home.css';

const Home = () => {
  const reddit = useSelector((state) => state.reddit);
  const { isLoading, error, searchTerm, selectedSubreddit } = reddit;
  const posts = useSelector(selectFilteredPosts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts(selectedSubreddit));
  }, [dispatch, selectedSubreddit]); // add dispatch to the dependency array

  // Fetches comments and sets the toggle up
  const onToggleComments = (index) => {
    const getComments = (permalink) => {
      dispatch(fetchComments(index, permalink));
    }
    return getComments
  }

  // what to do if and when the post is pending
  if (isLoading) {
    return (
      <SkeletonTheme 
        baseColor="#202020" 
        highlightColor="#444"
        animationDirection="horizontalLeft"
        isLoading={true}
      >
        <div className="subreddit-container">
          <div className="post-loading-container">
            <PostLoading />
            <PostLoading />
            <PostLoading />
          </div>
          <div className="post-loading-container">
            <PostLoading />
            <PostLoading />
            <PostLoading />
          </div>
        </div>
      </SkeletonTheme>
    );
  }
  // what to do if there is an error with post loading
  if (error) {
    return (
      <div className="error">
        <h2>Sorry...</h2>
        <p>Something went wrong with the post.</p>
        <button 
          type="button" 
          onClick={() => dispatch(fetchPosts(selectedSubreddit))}
        >
          Try Again
        </button>
      </div>
    )
  }
  // what to do an error ocours when searching for subreddits
  if (posts.length === 0) {
    return (
      <div className="error">
        <h2>No search matching "{searchTerm}"</h2>
        <button type="button" onClick={() => dispatch(setSearchTerm(''))}>
          Go home
        </button>
      </div>
    );
  }

  return (
    <div>
      {posts.map((post, index) => (
        <Post
          key={post.id}
          post={post}
          onToggleComments={onToggleComments(index)}
        />
      ))}
    </div>
  );
};

export default Home;
