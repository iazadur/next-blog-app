'use client'

import { useGetAllCommentQuery } from "@/redux/features/comments/commentApi"


export default function AllComments({ id }) {
    const { data } = useGetAllCommentQuery(id)
    const comments = data?.data?.comments.filter(comment => comment.post_id === id)
    return (
        <>
     
            <h3 className="mb-4 text-xl font-bold text-gray-700">All Comments</h3>
            {
                comments?.map((comment, key) => <div key={key} style={{
                    border: '1px solid #efefef',
                    padding: '10px',
                    borderRadius: '4px',
                    marginBottom: '10px'
                }}>{comment?.comment}</div>)
            }
        </>
    )
}
