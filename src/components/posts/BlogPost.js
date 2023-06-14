'use client'

import moment from "moment";
import Link from "next/link";


const BlogPost = ({ post }) => {
  const { _id, title, body, author, updatedAt } = post || {};
  return (
    <Link href={`/${_id}`}>
      <div style={{
        border: '1px solid #efefef',
        padding: '20px',
        borderRadius: '4px',
        marginBottom: '20px'

      }}>
        <h1 className="mb-4 text-xl font-bold text-gray-700">{title}</h1>
        <div className="mb-2">
          <p className="text-sm font-semibold leading-6 text-gray-900">{author.username}</p>
          <p className="mt-1 text-xs leading-5 text-gray-500"> <time dateTime={updatedAt}>{moment(updatedAt).format('MMM DD YYYY')}</time>
          </p>
        </div>
        <p>{body}</p>
      </div>
    </Link>
  );
};

export default BlogPost;
