'use client'
import { useGetAllPostsQuery } from "@/redux/features/posts/postsApi"
import moment from "moment/moment"
import Link from "next/link"

const posts = [
    {
        id: 1,
        date: "Jun 1, 2020",
        tag: "Laravel",
        title: "Build Your New Idea with Laravel Freamwork.",
        body: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora expedita dicta totam aspernatur doloremque. Excepturi iste iusto eos enim reprehenderit nisi, accusamus delectus nihil quis facere in modi ratione libero!",
        image: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=731&q=80",
        userName: "Alex John"
    },
    {
        id: 2,
        date: "mar 4, 2019",
        tag: "Design",
        title: "Accessibility tools for designers and developers",
        body: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora expedita dicta totam aspernatur doloremque. Excepturi iste iusto eos enim reprehenderit nisi, accusamus delectus nihil quis facere in modi ratione libero!",
        image: "https://images.unsplash.com/photo-1464863979621-258859e62245?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=333&q=80",
        userName: "Jane Doe"
    },
    {
        id: 3,
        date: "Feb 14, 2019",
        tag: "PHP",
        title: "PHP: Array to Map",
        body: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora expedita dicta totam aspernatur doloremque. Excepturi iste iusto eos enim reprehenderit nisi, accusamus delectus nihil quis facere in modi ratione libero!",
        image: "https://images.unsplash.com/photo-1531251445707-1f000e1e87d0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=281&q=80",
        userName: "Lisa Way"
    },
    {
        id: 4,
        date: "Dec 23, 2018",
        tag: "Django",
        title: "Django Dashboard - Learn by Coding",
        body: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora expedita dicta totam aspernatur doloremque. Excepturi iste iusto eos enim reprehenderit nisi, accusamus delectus nihil quis facere in modi ratione libero!",
        image: "https://images.unsplash.com/photo-1500757810556-5d600d9b737d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=735&q=80",
        userName: "Steve Matt"
    },
    {
        id: 5,
        date: "Mar 10, 2018",
        tag: "Testing",
        title: "TDD Frist",
        body: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora expedita dicta totam aspernatur doloremque. Excepturi iste iusto eos enim reprehenderit nisi, accusamus delectus nihil quis facere in modi ratione libero!",
        image: "https://images.unsplash.com/photo-1502980426475-b83966705988?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=373&q=80",
        userName: "Khatab Wedaa"
    },
]
export default function Articles() {
    const { data } = useGetAllPostsQuery()
    const ran = Math.floor(Math.random() * 10)
    return (
        <>
            {
                data?.data?.posts?.map((data, index) => (<div key={index} className="max-w-4xl mt-6 px-10 py-6 bg-white rounded-lg shadow-md">
                    <div className="flex justify-between items-center">
                        <span className="font-light text-gray-600">{moment().format("MMM D YYYY")}</span>
                        <a className="px-2 py-1 bg-gray-600 text-gray-100 font-bold rounded hover:bg-gray-500" href="#">{data.body.slice(ran, ran +3)}</a>
                    </div>
                    <div className="mt-2">
                     
                        <Link className="text-2xl text-gray-700 font-bold hover:underline" href={`/${data.id}`}>{data.title}</Link>
                        <p className="mt-2 text-gray-600">{data.body}</p>
                    </div>
                    <div className="flex justify-between items-center mt-4">
                        <Link className="text-blue-500 hover:underline" href={`/${data.id}`}>Read more</Link>
                        <div>
                            <a className="flex items-center" href="#">
                                <img className="mx-4 w-10 h-10 object-cover rounded-full hidden sm:block" src={data.author?.thumbnail} alt="avatar"/>
                                <h1 className="text-gray-700 font-bold hover:underline">{data.author?.username}</h1>
                            </a>
                        </div>
                    </div>
                </div>
                ))

            }
        </>
    )
}
