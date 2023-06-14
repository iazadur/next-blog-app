'use client'
import AllComments from '@/components/posts/AllComments';
import BlogPost from '@/components/posts/BlogPost';
import CommentFrom from '@/components/posts/CommentFrom';
import { useGetAnPostQuery } from '@/redux/features/posts/postsApi';


export default function PostDetail({ params }) {
    const { data, isLoading, isError, error } = useGetAnPostQuery(params?.postId)
    let content = null;
    if (isLoading) {
        content = <div>Loading...</div>
    }
    if (!isLoading && isError) {
        content = <p>{error}</p>
    }
    if (!isLoading && !isError && data?.data?.post.title === undefined) {
        content = <p>No Found data</p>
    }

    if (!isLoading && !isError && data?.data?.post.title) {
        content = <div className='container flex flex-col min-h-[calc(100vh-110px)]'>
            <BlogPost post={data?.data?.post} />
            <CommentFrom id={data?.data?.post?._id} />
            <AllComments comments={data?.data?.post?.comments} />
        </div>
    }
    return (
        <>
            {content}
        </>
    );
};


