import React from 'react';
import styles from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
  return (
    <div>
      My posts
      <div>
        <textarea>v</textarea>
        <button>Add post</button>

      </div>
      <div className={styles.posts}>
        <Post message="Hi, Yo" likesCount='23' />
        <Post message="I'm in to IT" likesCount='12'/>
      </div>
    </div>
  )

}

export default MyPosts;