import Footer from '@/components/common/Footer'
import Nav from '@/components/common/Nav'
import Articles from '@/components/home/Articles'
import BlogUsers from '@/components/home/BlogUsers'
import { Categories } from '@/components/home/Categories'
import Pagination from '@/components/home/Pagination'
import RecentArticle from '@/components/home/RecentArticle'

export default function Home() {
  return (
    
     

      <main className="px-6 py-8">
        <div className="flex justify-between container mx-auto">
          <div className="w-full lg:w-8/12">
            <div className="flex items-center justify-between">
              <h1 className="text-xl font-bold text-gray-700 md:text-2xl">Post</h1>
              {/* <post-filter></post-filter> */}
            </div>
           <div>
            <Articles />
          </div>
          <div className="mt-8">
            <Pagination />
          </div>
        </div>
        <div className="-mx-8 w-4/12 hidden lg:block">
          <div className="px-8">
            <h1 className="mb-4 text-xl font-bold text-gray-700">Authors</h1>
            <BlogUsers />
          </div>
          <div className="mt-10 px-8">
            <h1 className="mb-4 text-xl font-bold text-gray-700">Categories</h1>
            <Categories />
          </div>
          <div className="mt-10 px-8">
            <h1 className="mb-4 text-xl font-bold text-gray-700">Recent Post</h1>
            <RecentArticle />
          </div>
        </div>
    </div>
        </main >


  
  )
}
