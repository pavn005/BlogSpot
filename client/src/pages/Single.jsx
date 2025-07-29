import React from 'react'
import { Link } from 'react-router-dom'
import Menu from '../components/Menu'
import Delete from '../img/delete.png'
import Edit from '../img/edit.png'
const Single = () => {

  return (
    <div className="single">
      <div className="content">
        <img src="https://images.pexels.com/photos/7008010/pexels-photo-7008010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
      <div className="user">
        <img src="https://images.pexels.com/photos/7008010/pexels-photo-7008010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
        <div className="info">
          <span>Pavan</span>
          <p>Posted 2 hrs ago</p>
        </div>
        <div className="edit">
          <Link to='/write?edit='>
          <img src={Edit} alt="" />
          </Link>
          <img src={Delete} alt="" />
        </div>
      </div>
      <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.</h1>
      <p>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque ex repellendus iste quidem veritatis id excepturi nam, perferendis dolore dolorum iure ullam, quod tempore doloribus, commodi possimus minus sequi obcaecati?
        .Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque ex repellendus iste quidem veritatis id excepturi nam, perferendis dolore dolorum iure ullam, quod tempore doloribus, commodi possimus minus sequi obcaecati?
      </p>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque ex repellendus iste quidem veritatis id excepturi nam, perferendis dolore dolorum iure ullam, quod tempore doloribus, commodi possimus minus sequi obcaecati?
        .Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque ex repellendus iste quidem veritatis id excepturi nam, perferendis dolore dolorum iure ullam, quod tempore doloribus, commodi possimus minus sequi obcaecati?
      </p>
      </p>
      </div>
      <Menu />
    </div>
  )
}

export default Single