import logo from './logo.svg';
import './App.css';

import React, {useState,useEffect} from 'react';
import axios from 'axios';

function App(){
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get('https://localhost:7163/api/Students')
    .then(response => {
      setPosts(response.data);
    })
    .catch(error => {
      console.error(error);
    });
  }, []);


  return(
    <ul>
      {posts.map(post => (
        <li key = {post.id}>{post.title}</li>
      ))}
    </ul>
  );
}



export default App;
