import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Box from '../../components/Box/Box';
import { fetchSubreddits, selectSubreddits } from '../../store/subRedditSlice';
import './Subreddits.css';
import { setSelectedSubreddit, selectSelectedSubreddit } from '../../store/redditSlice';
import getRandomNumber from '../../utils/getRandomNumber';

const Subreddits = () => {
  const dispatch = useDispatch();
  const subreddits = useSelector(selectSubreddits);
  const selectedSubreddit = useSelector(selectSelectedSubreddit);

  useEffect(() => {
    dispatch(fetchSubreddits());
  }, [dispatch]);

  return (
    <Box>
      <h2>Subreddits</h2>
      <ul>
        {subreddits && subreddits.map((subreddit) => (
          <li key={subreddit.id}
            className={`${
              selectedSubreddit === subreddit.url && `selected-subreddit`
            }`}
          >
            <button
              type="button"
              onClick={() => dispatch(setSelectedSubreddit(subreddit.url))}
            >
              <img
                src={subreddit.icon_img || `https://www.redditstatic.com/avatars/defaults/v2/avatar_default_${getRandomNumber(1, 7)}.png`}
                alt={`${subreddit.display_name}`}
                className="subreddit-icon"
                style={{ border: `3px solid ${subreddit.primary_color}` }}
              />
              {subreddit.display_name}
            </button>
          </li>
        ))}
      </ul>
    </Box>
  );
};

export default Subreddits;
