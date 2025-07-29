import React from 'react'

const Menu = () => {

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
    <div className='menu'>
      <h1>Other Posts You may like !</h1>
      {posts.map(post=>(
          <div className="post" key={post.id}>
          <img src={post.img} alt="" />
          <h2>{post.title}</h2>
          <button>Read More</button>  
          </div>))}
    </div>
  )
}

export default Menu