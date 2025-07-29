import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  
  const posts = [
    {
      id:1,
      title: "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus, quos, quia, voluptatum. Quisquam, voluptatibus, quos, quia, voluptatum.",
      img: "https://images.pexels.com/photos/7008010/pexels-photo-7008010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id:2,
      title: "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus, quos, quia, voluptatum. Quisquam, voluptatibus, quos, quia, voluptatum.",
      img: "https://images.pexels.com/photos/7008010/pexels-photo-7008010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id:3,
      title: "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus, quos, quia, voluptatum. Quisquam, voluptatibus, quos, quia, voluptatum.",
      img: "https://images.pexels.com/photos/7008010/pexels-photo-7008010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id:4,
      title: "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus, quos, quia, voluptatum. Quisquam, voluptatibus, quos, quia, voluptatum.",
      img: "https://images.pexels.com/photos/7008010/pexels-photo-7008010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    }
  ]
  
  return (
    <div className="home">
      <div className="posts">
        {posts.map(post=>(
          <div className="post" key={post.id}>
            <div className="img">
              <img src={post.img} alt="" />
            </div>
            <div className="content">
              <Link to={`/post/${post.id}`} className="link">
              <h1>{post.title}</h1>
              </Link>
              <p>{post.desc}</p>
              <button>Read More</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home