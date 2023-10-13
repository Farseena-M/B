import React, { useContext } from 'react'
import { blogContext } from '../App'
import { Link } from 'react-router-dom';

const Tittle = () => {
    const {blog} =useContext(blogContext);
  return (
    <>
    {
        blog.map((item)=>{
            return(
                <div key={item.id}>

                    <Link to={`/blogs/${item.id}`}>
                    <h1 className='tittle'>{item.tittle}</h1>
                    </Link>
                </div>
            )
        })
    }
    </>
  )
}

export default Tittle