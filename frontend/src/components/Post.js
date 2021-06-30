import React from 'react';

const Post = ({ data }) => {
  return (
    <div className="Post">
      <div className="post-header">
        <div className="display-picture" />
        <div className="post-header-content">
          <div className="horizontal-half">
            <b>{data.author}</b> 9h
          </div>
          <div className="horizontal-half">
            <i>'{data.project}'</i>
          </div>
        </div>
      </div>
      <div className="post-text">
        {data.text}
      </div>
    </div>
  );
};

export default Post;