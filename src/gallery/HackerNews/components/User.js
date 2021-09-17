import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import PostList from './PostList'
dayjs.extend(relativeTime)
const User = () => {
  const { name } = useParams()
  const [author, setAuthor] = useState({})
  const [posts, setPosts] = useState([])
  const [comments, setComments] = useState([])
  useEffect(() => {
    axios
      .get(`http://hn.algolia.com/api/v1/users/${name}`)
      .then((response) => setAuthor(response.data))

    axios
      .get(`http://hn.algolia.com/api/v1/search?tags=comment,author_${name}`)
      .then((response) => setComments(response.data.hits))

    axios
      .get(`http://hn.algolia.com/api/v1/search?tags=story,author_${name}`)
      .then((response) => setPosts(response.data.hits))
  }, [])

  return (
    <div className="mt-10">
      <div>
        <div className="text-xl font-bold">
          {author.username}({author.karma})
        </div>
        <div className="mt-3">
          <strong>Joined:</strong> {dayjs().to(dayjs(author.created_at))}
        </div>
        <div className="mt-1">
          <strong>Posts:</strong> {author.submission_count}
        </div>
        <div className="mt-1">
          <strong>Comments:</strong> {author.comment_count}
        </div>
      </div>
      <div className="mt-10">
        <div className="text-xl font-bold mb-3">Posts:</div>
        <PostList posts={posts} />
      </div>
      <div className="mt-10">
        <div className="text-xl font-bold">Comments:</div>
        {comments?.map((comment, index) => (
          <div key={index} className="mt-3 border-l-2 border-red-500 pl-4">
            <div className="text-gray-500">
              {comment.author} / {dayjs().to(dayjs(comment.created_at))} {'> '}
              <a href={comment.story_url}>{comment.story_title}</a>
            </div>
            <div dangerouslySetInnerHTML={{ __html: comment.comment_text }} />
          </div>
        ))}
      </div>
    </div>
  )
}
export default User
