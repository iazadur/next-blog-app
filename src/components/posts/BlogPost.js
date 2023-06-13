'use client'

import Link from "next/link";


const BlogPost = ({ post }) => {
  const { _id, title, body } = post || {};
  return (
    <Link href={`/${_id}`}>
      <div style={{
        border: '1px solid #efefef',
        padding: '20px',
        borderRadius: '4px',
        marginBottom: '20px'
        
      }}>
        <h1 className="mb-4 text-xl font-bold text-gray-700">{title}</h1>
        <p>{body}</p>
      </div>
    </Link>
  );
};

export default BlogPost;
