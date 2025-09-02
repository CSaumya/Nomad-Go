import React from 'react'
import {Link} from 'react-router-dom'; 

const BlogCards = ({img,date,title,description,author}) => {
  return (
    <Link to ={`/blogs/${title}`}
    onClick={() => {
        window.scrollTo(0,0);
    }}
    state={{img, date, title, description, author}}
    >
    <div className='p-4 shadow-lg transition-all duration-500 hover:shadow-xl'>
        <div className='overflow-hidden'>
            <img src={img} alt="" className='mx-auto h-[220px] w-full object-cover transition duration-700 hover:skew-2 hover:scale-110' />
        </div>
        <div className='flex justify-between text-gray-500 pt-3'>
        <div>
            <p>{date}</p>
        </div>
        <div>
            <p>{author}</p>
        </div>
        </div>
        <div className='space-y-2 py-3'>
            <p className='font-bold line-clamp-1'>{title}</p>
        </div>
        <div>
            <p className='line-clamp-2'>{description}</p>
        </div>
    </div>
    </Link>
  )
}

export default BlogCards
   