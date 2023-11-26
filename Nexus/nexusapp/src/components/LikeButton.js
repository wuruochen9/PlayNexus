import React, { useState } from 'react';

const LikeButton = ({ postId, initialLikes }) => {
  const [likes, setLikes] = useState(initialLikes);

  const handleLikeClick = () => {
    setLikes(likes + 1);
  };

  return (
    <div>
      <button onClick={handleLikeClick}>Like</button>
      <p>{likes} {likes === 1 ? 'like' : 'likes'}</p>
    </div>
  );
};

export default LikeButton;