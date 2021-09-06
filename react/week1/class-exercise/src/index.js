import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Post from './App';
import getPosts from './getPosts';

const posts = getPosts();


function HomeScreen() {
  const renderedPosts = console.log(posts);
  console.log(renderedPosts);
  return (
    <div>
      {posts.map((aPost) => {
        return <Post author={aPost.author} text={aPost.text} commentsList={aPost.comments} />;
      })}
    </div>
  );
}

const element = document.getElementById('root');
ReactDOM.render(<HomeScreen />, element);
