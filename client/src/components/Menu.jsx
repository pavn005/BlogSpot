import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Menu = ({cat}) => {

  const [posts, setPosts] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Change to GET request if you're fetching data
        const response = await axios.get(`http://localhost:5000/api/posts/?cat=${cat}`)
        // Ensure the response.data is an array
        setPosts(Array.isArray(response.data) ? response.data : [])
      } catch (error) {
        console.error("Error fetching posts:", error)
        setPosts([]) // Set empty array on error
      }
    }
    fetchData()
  }, [cat])
  //const posts = [
    // {
    //   id:1,
    //   title: "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.",
    //   desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus, quos, quia, voluptatum. Quisquam, voluptatibus, quos, quia, voluptatum.",
    //   img: "https://images.pexels.com/photos/7008010/pexels-photo-7008010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    // },
    // {
    //   id:2,
    //   title: "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.",
    //   desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus, quos, quia, voluptatum. Quisquam, voluptatibus, quos, quia, voluptatum.",
    //   img: "https://images.pexels.com/photos/7008010/pexels-photo-7008010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    // },
    // {
    //   id:3,
    //   title: "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.",
    //   desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus, quos, quia, voluptatum. Quisquam, voluptatibus, quos, quia, voluptatum.",
    //   img: "https://images.pexels.com/photos/7008010/pexels-photo-7008010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    // },
    // {
    //   id:4,
    //   title: "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.",
    //   desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus, quos, quia, voluptatum. Quisquam, voluptatibus, quos, quia, voluptatum.",
    //   img: "https://images.pexels.com/photos/7008010/pexels-photo-7008010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    // }
  //]

  return (
    <div className='menu'>
      <h1>Other Posts You may like !</h1>
      {posts.map(post=>(
          <div className="post" key={post.id}>
          <img src={`../uploads/${post.img}`} alt="" />
          <h2>{post.title}</h2>
          <button>Read More</button>  
          </div>))}
    </div>
  )
}

export default Menu