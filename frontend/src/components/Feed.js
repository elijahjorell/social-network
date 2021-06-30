import React, {useState} from 'react';
import Post from "./Post";

const postsSource = [
  {author: "Elijah Esmero", project: "Making a Calculator in Python", text: "What's 9+10?"},
  {author: "Vanessa Williams", project: "Starting a filipino restaurant!", text: "Mabuhay World!"},
  {author: "Vanessa Williams", project: "Starting a filipino restaurant!", text: "Let's get whacky!"}
];

const Feed = () => {
  const [posts,] = useState(postsSource);

  return (
    <div className="Feed">
      {
        posts.map((post) => {
          return (
            <Post data={post}/>
          )
        })
      }
    </div>
  );
};

export default Feed;