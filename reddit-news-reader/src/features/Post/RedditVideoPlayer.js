  import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPosts, setVideoURL } from '../reducers/redditSlice';
import VideoPlayer from 'your-video-player-library';

const RedditVideoPlayer = () => {
  const videoURL = useSelector((state) => state.reddit.videoURL);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts('/r/videos')); // Fetch posts from the videos subreddit
  }, [dispatch]);

  const handlePostClick = (post) => {
    if (post.videoURL) {
      console.log('Before dispatching setVideoURL:', videoURL);
      dispatch(setVideoURL(post.videoURL)); // Set the video URL in the state
      console.log('After dispatching setVideoURL:', videoURL);
    }
  };

  return (
    <div>
      {videoURL && <VideoPlayer src={videoURL} autoplay />}
      {/* Render the posts */}
    </div>
  );
};

export default RedditVideoPlayer;
