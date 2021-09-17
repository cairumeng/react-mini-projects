import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import { Link } from 'react-router-dom'
dayjs.extend(relativeTime)

const PostList = ({ posts }) => {
  return (
    <div className="mt-10">
      {posts?.map((post, index) => (
        <div key={index}>
          <a href={post.url} target="_blank" className="text-lg font-bold">
            {post.title}
          </a>
          <div className="divide-x-2 divide-gray-400 mb-5">
            <span className="pr-3">
              {post.points} pt{post.points > 1 && 's'} by{' '}
              <Link to={`/gallery/hacker-news/users/${post.author}`}>{post.author}</Link>
            </span>
            <span className="px-3">{dayjs().to(dayjs(post.created_at))}</span>
            <Link className="pl-3" to={`/gallery/hacker-news/comments/${post.objectID}`}>
              {post.num_comments} comment{post.num_comments > 1 && 's'}
            </Link>
          </div>
        </div>
      ))}
    </div>
  )
}
export default PostList
