import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SkeletonContent from 'react-native-skeleton-content';
import Post from '../Post/Post'; // Need to do!!!
import PostLoading from '../Post/PostLoading'; // need to do!!!
import {
  fetchPosts,
  selectFilteredPosts,
  setSearchTerm,
  fetchComments,
} from '../../store/redditSlice';
import './Home.css';

const Home = () => {
  const reddit = useSelector((state) => state.reddit);
  // 1. isLoading and error are used to conditionally render a loading animation or an error message.
  // 2. searchTerm and selectedSubreddit are used as inputs to the fetchPosts and fetchComments actions. 
  const { isLoading, error, searchTerm, selectedSubreddit } = reddit;
  // posts is used to render a list of post filtered post for the search.
  const posts = useSelector(selectFilteredPosts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts(selectedSubreddit));
  }, [selectedSubreddit]);

  // Fetches comments and sets the toggle  up
  const onToggleComments = (index) => {
    const getComments = (permalink) => {
   dispatch(fetchComments(index, permalink));
  }
  return getComments
  }

  //what to do if and when the post is pending
  if (isLoading) {
    return (
      <SkeletonContent
        containerStyle={{flex: 1, width: 300}}
        animationDirection="horizontalLeft"
        isLoading={true}
      >
        <PostLoading />
      </SkeletonContent>
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
