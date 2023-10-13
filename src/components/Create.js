import React, { useContext, useRef } from 'react'
import { blogContext } from '../App'
import { Link } from 'react-router-dom'

const Create = () => {
    const {blog,setBlog}=useContext(blogContext)
    const reff1=useRef({})
    const reff2=useRef({})
    const handleChange=()=>{
  const newreff1=reff1.current.value;
  const newreff2=reff2.current.value;
  const value={tittle:newreff1,body:newreff2,id:Date.now()}
  setBlog([...blog,value])
  console.log(value);

}
  return (
    <div>
        <h1>Create Blog</h1>
        <textarea placeholder='Enter your tittle...' rows={3} cols={50} ref={reff1}/><br/> 
        <textarea placeholder='Enter your text...' rows={20} cols={50} ref={reff2}/><br/>
        <Link to='tittle'>
        <button onClick={handleChange}>Save</button>
        </Link>
    </div>
  )
}

export default Create