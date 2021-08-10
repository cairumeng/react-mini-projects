import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import dayjs from 'dayjs'
import LocalizedFormat from 'dayjs/plugin/localizedFormat'
import relativeTime from 'dayjs/plugin/relativeTime'
dayjs.extend(LocalizedFormat)
dayjs.extend(relativeTime)

const Comments = () => {
  let { id } = useParams()
  const [content, setContent] = useState({})
  useEffect(() => {
    axios.get(`https://hn.algolia.com/api/v1/items/${id}`).then((response) => {
      document.title = setContent(response.data)
    })
  }, [])
  return (
    <>
      <div className="text-lg font-bold mt-10">{content.title}</div>
      <div className="text-gray-500">
        {content.points} pts by{' '}
        <Link to={`/projects/hacker-news/users/${content.author}`}>{content.author}</Link> -{' '}
        {dayjs(content.created_at).format('L LT')}
      </div>
      <div className="text-xl font-bold mt-10">Comments:</div>
      {content.children?.length === 0 ? (
        <div className="text-gray-500">No comments</div>
      ) : (
        content.children?.map((comment, index) => (
          <div key={index} className="mt-5 border-l-2 border-red-500 pl-4">
            <div className="text-gray-500">
              <Link to={`/projects/hacker-news/users/${comment.author}`}>{comment.author}</Link> /{' '}
              {dayjs().to(dayjs(comment.created_at))}
            </div>
            <div dangerouslySetInnerHTML={{ __html: comment.text }} />
          </div>
        ))
      )}
    </>
  )
}
export default Comments
