export const apiUri = 'https://www.reddit.com';

// get Subreddit search Posts
export const getSubredditPosts = async (subreddit) => {
  const response = await fetch(`${apiUri}${subreddit}.json`);
  const json = await response.json();
  const posts = json.data.children.map((post) => post.data);
  return posts.map((post) => ({
    ...post,
    url: post.media && post.media.type === 'video' ? post.media.reddit_video.fallback_url : post.url,
    videoURL: post.media && post.media.type === 'video' ? post.media.reddit_video.fallback_url : null,
  }))
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
  const comments = json[1].data.children.map((subreddit) => subreddit.data);
  return comments.map((comment) => ({
    ...comment,
    body_html: decodeURI(comment.body_html),
    url: comment.media && comment.media.type === 'video' ? comment.media.reddit_video.fallback_url : null,
  }))
};
