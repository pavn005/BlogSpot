import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import axios from 'axios'

const Home = () => {
  // Initialize posts as an empty array
  const [posts, setPosts] = useState([])

  const cat = useLocation().search;

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Change to GET request if you're fetching data
        const response = await axios.get(`http://localhost:5000/api/posts${cat}`)
        // Ensure the response.data is an array
        setPosts(Array.isArray(response.data) ? response.data : [])
      } catch (error) {
        console.error("Error fetching posts:", error)
        setPosts([]) // Set empty array on error
      }
    }
    fetchData()
  }, [cat])

  // Add loading state handling
  if (!posts.length) {
    return <div className="home">Loading posts...</div>
  }

  const getText = (html) => {
    const doc = new DOMParser().parseFromString(html, "text/html");
    return doc.body.textContent || "";
  }


  return (
    <div className="home">
      <div className="posts">
        {posts.map(post => (
          <div className="post" key={post.id}>
            <div className="img">
              <img src={`../uploads/${post.img}`} alt="" />
            </div>
            <div className="content">
              <Link to={`/post/${post.id}`} className="link">
                <h1>{post.title}</h1>
              </Link>
              <p>{getText(post.desc)}</p>
              <button>Read More</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home