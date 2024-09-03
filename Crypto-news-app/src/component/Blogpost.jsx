import React from 'react'

const Blogpost = ({ blog }) => {
    return (
        <div key={blog.id} className=' bg-white shadow-lg shadow-black '>
            <img src={blog.imageurl} alt={blog.source} className=' w-full h-40' />
            <div className=' space-y-2 p-2 '>
                <p className='font-semibold'>{blog?.title}</p>
                <p className=' text-xs  line-clamp-4 '>{blog?.body}</p>
                <p className=' font-bold'><span className=' text-red-500'>Source : </span>{blog.source}</p>
            </div>
        </div>
    )
}

export default Blogpost
