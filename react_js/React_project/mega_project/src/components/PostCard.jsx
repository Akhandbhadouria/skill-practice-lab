import React from 'react'
import service from '../appwrite/configration'
import { Link } from 'react-router-dom'
function PostCard({$id,title,featuredImage}) {
  return (
   <Link to={`/post/${$id}`} className="block">
    <div className="card overflow-hidden hover:shadow-xl transition duration-200 ease-in-out">
        <div className="aspect-video bg-gray-100 overflow-hidden">
            <img src={service.getFilePreview(featuredImage)} alt={title} className="w-full h-full object-cover" />
        </div>
        <div className="p-4">
          <h2 className="text-lg heading line-clamp-2">{title}</h2>
        </div>
    </div>
   </Link>
  )
}

export default PostCard