'use client'

import { useDeleteCommentMutation, useGetAllCommentQuery } from "@/redux/features/comments/commentApi"
import moment from "moment"


export default function AllComments({ comments }) {
    const [deleteComment] = useDeleteCommentMutation()
    const handleDelete = (id) => {
        deleteComment(id)
    }
    return (
        <div className="mt-6">
            <h3 className="text-xl font-bold mb-4">Comments</h3>
            {comments?.length > 0 ? (
                <ul className="space-y-4 mb-4">
                    {comments.map((comment) => (
                        <li key={comment.id} className="bg-white rounded-md p-4 shadow">
                            <div className="flex items-center mb-2">
                                <img
                                    src={comment.author.thumbnail}
                                    alt={comment.author.username}
                                    className="w-8 h-8 rounded-full mr-2"
                                />
                                <span className="font-bold">{comment.author.username}</span>
                            </div>
                            <p className="text-gray-600">{comment.comment}</p>
                            <div className="mt-2 text-gray-500 text-sm flex justify-between items-center">
                                <span className="mr-2">{moment(comment.createdAt).format('MMM D YYYY')}</span>

                                <span onClick={() => handleDelete(comment._id)} className="text-sm font-semibold cursor-pointer text-red-600">Delete</span>
                            </div>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No comments yet.</p>
            )}
        </div>
    )
}
