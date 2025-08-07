import React, { useState, useContext, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import Menu from '../components/Menu'
import Delete from '../img/delete.png'
import Edit from '../img/edit.png'
import axios from 'axios'
import moment from 'moment'
import { AuthContext } from '../context/AuthContext.jsx'

const Single = () => {
  const [post, setPost] = useState({})
  const location = useLocation()
  const navigate = useNavigate()
  const postId = location.pathname.split('/')[2]
  const { currentUser } = useContext(AuthContext)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/posts/${postId}`)
        // Don't convert to array, just use the response data directly
        setPost(response.data)
      } catch (error) {
        console.error("Error fetching post:", error)
        setPost({}) // Set empty object on error, not array
      }
    }
    fetchData()
  }, [postId])

  // Add loading state
  if (!post.title) {
    return <div>Loading...</div>
  }

  const handleDelete = async () => {
  try {
    await axios.delete(`http://localhost:5000/api/posts/${postId}`, {
      withCredentials: true  // Important for sending cookies
    });
    navigate("/");
  } catch (error) {
    console.error("Error deleting post:", error);
  }
};

const getText = (html) => {
    const doc = new DOMParser().parseFromString(html, "text/html");
    return doc.body.textContent || "";
  }

const formatDate = (dateString) => {
  try {
    return moment(new Date(dateString)).fromNow();
  } catch (error) {
    console.error("Invalid date:", dateString);
    return "Date unavailable";
  }
}

  return (
    <div className="single">
      <div className="content">
        <img src={`../uploads/${post.img}`} alt="" />
        <div className="user">
          {post.userImg && <img src={post.userImg} alt="" />}
          <div className="info">
            <span>{post.username}</span>
            <p>Posted {formatDate(post.date)}</p>
          </div>
          {currentUser?.username === post.username && (
            <div className="edit">
              <Link to={`/write?edit=${postId}`} state={post}>
                <img src={Edit} alt="" />
              </Link>
              <img onClick={handleDelete} src={Delete} alt="" />
            </div>
          )}
        </div>
        <h1>{post.title}</h1>
        <p>{getText(post.desc)}</p>
      </div>
      <Menu cat={post.cat}/>
    </div>
  )
}

export default Single


// TO include user.img and post.img and post.desc in single page we made these changes
// Removed Array.isArray() check - a single post should be an object, not an array
// Changed error state to empty object {} instead of empty array []
// Added null check for currentUser?.username
// Added loading state check
// Fixed the edit link to include the postId
// Added proper React imports
// Added proper error handling

// Make sure your backend API endpoint /api/posts/:id returns a single post object

// Also verify in your browser's Network tab (F12) that the API is returning the correct data structure.