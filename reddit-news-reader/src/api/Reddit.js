export const apiUri = 'https://www.reddit.com';

// get Subreddit search Posts
export const getSubredditPosts = async (subreddit) => {
  const response = await fetch(`${apiUri}${subreddit}.json`);
  const json = await response.json();
  return json.data.children.map((post) => post.data);
};
// get Subbreddits
export const getSubreddits = async () => {
  const response = await fetch(`${apiUri}/subreddits.json`);
  const json = await response.json();
  return json.data.children.map((subreddit) => subreddit.data);
};

// get Commenets from posts
export const getPostComments = async (permalink) => {
  const response = await fetch(`${apiUri}${permalink}.json`);
  const json = await response.json();
  return json[1].data.children.map((subreddit) => subreddit.data);
};
