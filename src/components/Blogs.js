import React, { useContext } from 'react'
import { blogContext } from '../App'
import { useParams } from 'react-router-dom'

const Blogs = () => {
    const {blog}=useContext(blogContext)
    const {id}=useParams()
    const findId=blog.find((item)=>item.id===parseInt(id))
  return (
    <div>
      <h1>{findId.tittle}</h1>
      <p>{findId.body}</p>
    </div>
  )
}

export default Blogs