'use client'
import Image from 'next/image';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import AddPostFrom from './AddPostFrom';
import { useDeletePostMutation, useGetAllPostsQuery } from '@/redux/features/posts/postsApi';
import moment from 'moment';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';

// Sample data
const postsData = [
    { id: 1, title: 'Post 1', content: 'Content of post 1' },
    { id: 2, title: 'Post 2', content: 'Content of post 2' },
    { id: 3, title: 'Post 3', content: 'Content of post 3' },
];

const ProfilePage = () => {

    const [posts, setPosts] = useState(postsData);
    const [showCreateModal, setShowCreateModal] = useState(false);
    const [showEditModal, setShowEditModal] = useState(false);
    const [editingPost, setEditingPost] = useState(null);
    const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
    const [deletingPost, setDeletingPost] = useState(null);

    const handleCreatePost = (newPost) => {
        setPosts([...posts, newPost]);
        setShowCreateModal(false);
    };

    const handleEditPost = (editedPost) => {
        const updatedPosts = posts.map((post) =>
            post.id === editedPost.id ? editedPost : post
        );
        setPosts(updatedPosts);
        setShowEditModal(false);
        setEditingPost(null);
    };

    const [deletePost] = useDeletePostMutation()
    const handleDeletePost = () => {
        deletePost(deletingPost._id)
        setShowDeleteConfirmation(false);
        setDeletingPost(null);
    };

    const openCreateModal = () => {
        setShowCreateModal(true);
    };

    const closeCreateModal = () => {
        setShowCreateModal(false);
    };

    const openEditModal = (post) => {
        setEditingPost(post);
        setShowEditModal(true);
    };

    const closeEditModal = () => {
        setShowEditModal(false);
        setEditingPost(null);
    };

    const openDeleteConfirmation = (post) => {
        setDeletingPost(post);
        setShowDeleteConfirmation(true);
    };

    const closeDeleteConfirmation = () => {
        setShowDeleteConfirmation(false);
        setDeletingPost(null);
    };
    const { user } = useSelector((state) => state.auth);
    const { data } = useGetAllPostsQuery(user?._id)

    return (
        <div className="container mx-auto p-4">
            <div className="max-w-md mx-auto bg-white shadow-md rounded p-4 mb-4">
                <h2 className="text-2xl font-semibold mb-2">Profile Details</h2>
                <div className="flex justify-between items-center">
                    <div className="">
                        <div className="mb-2">
                            <strong>Name:</strong> {user?.username}
                        </div>
                        <div className="mb-2">
                            <strong>Email:</strong> {user?.email}
                        </div>
                    </div>
                    <div className="">
                        <img src={user?.thumbnail} alt={user?.username} width={50} height={50} />
                    </div>
                </div>
                {/* Add more profile details here */}
                <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    onClick={openCreateModal}
                >
                    Create Post
                </button>
            </div>

            <div className="max-w-md mx-auto bg-white shadow-md rounded p-4">
                <h2 className="text-2xl font-semibold mb-2">Posts</h2>
                <ul>
                    {data?.posts?.map((post, key) => (
                        <li key={key} className="flex justify-between gap-x-6 py-5">
                            <div className="flex gap-x-4">
                                <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src={post.imageUrl} alt="" />
                                <div className="min-w-0 flex-auto">
                                    <p className="text-sm font-semibold leading-6 text-gray-900">{post.title}</p>
                                    <p className="mt-1 text-xs leading-5 text-gray-500"> <time dateTime={post.updatedAt}>{moment(post?.updatedAt).format('MMM DD YYYY')}</time>
                                    </p>
                                </div>
                            </div>
                            <div className="hidden sm:flex sm:flex-col sm:items-end">
                                <p onClick={() => openEditModal(post)} className="text-sm leading-6 text-sky-900 font-semibold cursor-pointer">{"Edit"}</p>
                                <p onClick={() => openDeleteConfirmation(post)} className="mt-1 text-sm leading-5 text-red-500 font-semibold cursor-pointer">{"Delete"}</p>

                            </div>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Create Post Modal */}
            {showCreateModal && (
                <div className="fixed z-10 inset-0 overflow-y-auto">
                    <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
                        <div
                            className="fixed inset-0 transition-opacity"
                            aria-hidden="true"
                        >
                            <div onClick={closeCreateModal} className="absolute inset-0 bg-gray-500 opacity-75"></div>
                        </div>
                        <span
                            className="hidden sm:inline-block sm:align-middle sm:h-screen"
                            aria-hidden="true"
                        >
                            &#8203;
                        </span>
                        <div
                            className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:align-middle sm:max-w-xl sm:w-full"
                            role="dialog"
                            aria-modal="true"
                            aria-labelledby="modal-headline"
                        >
                            <>

                                {/* Form for creating a new post */}
                                <AddPostFrom closeCreateModal={closeCreateModal} />
                                {/* Add your own input fields here */}

                            </>
                        </div>
                    </div>
                </div>
            )}

            {/* Edit Post Modal */}
            {showEditModal && editingPost && (
                <div className="fixed z-10 inset-0 overflow-y-auto">
                    <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
                        <div
                            className="fixed inset-0 transition-opacity"
                            aria-hidden="true"
                        >
                            <div onClick={closeCreateModal} className="absolute inset-0 bg-gray-500 opacity-75"></div>
                        </div>
                        <span
                            className="hidden sm:inline-block sm:align-middle sm:h-screen"
                            aria-hidden="true"
                        >
                            &#8203;
                        </span>
                        <div
                            className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:align-middle sm:max-w-xl sm:w-full"
                            role="dialog"
                            aria-modal="true"
                            aria-labelledby="modal-headline"
                        >
                            <>

                                {/* Form for creating a new post */}
                                <AddPostFrom closeCreateModal={closeEditModal} prevData={editingPost} />
                                {/* Add your own input fields here */}

                            </>
                        </div>
                    </div>
                </div>
            )}

            {/* Delete Confirmation Dialog */}
            {showDeleteConfirmation && deletingPost && (
                <div className="fixed z-10 inset-0 overflow-y-auto">
                    <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
                        <div
                            className="fixed inset-0 transition-opacity"
                            aria-hidden="true"
                        >
                            <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
                        </div>
                        <span
                            className="hidden sm:inline-block sm:align-middle sm:h-screen"
                            aria-hidden="true"
                        >
                            &#8203;
                        </span>
                        <div
                            className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
                            role="dialog"
                            aria-modal="true"
                            aria-labelledby="modal-headline"
                        >
                            <div>
                                <h2 className="text-2xl font-semibold mb-4">Delete Post</h2>
                                <p className="mb-4">
                                    Are you sure you want to delete the post: "{deletingPost.title}"?
                                </p>
                                <div className="flex justify-end">
                                    <button
                                        className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold py-2 px-4 rounded mr-2"
                                        onClick={closeDeleteConfirmation}
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        className="bg-red-500 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded"
                                        onClick={handleDeletePost}
                                    >
                                        Delete
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProfilePage;
