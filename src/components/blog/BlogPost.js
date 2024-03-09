import React from 'react'

const BlogPost = ({src, date, children}) => {
  return (
    <div className="flex flex-col items-center lg:block">
      <img src={src} className="w-64 h-64"/>
      <p className="text-secondary mt-8">{date}</p>
      {children}
    </div>
  )
}

export default BlogPost
