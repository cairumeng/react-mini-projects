import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Spinner from '../../../components/Spinner/Spinner'
import './HackerNews.css'
import PostList from './PostList'
const urlTags = {
  ask: 'ask_hn',
  show: 'show_hn',
  polls: 'poll',
}

const HackerNews = () => {
  const [content, setContent] = useState([])
  const [page, setPage] = useState({ current: 0 })
  const [nbPages, setNbPages] = useState(0)
  const [isLoading, setLoading] = useState(true)

  let { slug } = useParams()

  useEffect(() => {
    const url = slug
      ? `http://hn.algolia.com/api/v1/search_by_date?tags=${urlTags[slug]}&page=${page.current}`
      : `https://hn.algolia.com/api/v1/search?tags=front_page&page=${page.current}`

    axios.get(url).then((response) => {
      page.current === 0
        ? setContent(response.data.hits)
        : setContent([...content, ...response.data.hits])
      setNbPages(response.data.nbPages)
      setLoading(false)
    })
  }, [page])

  useEffect(() => {
    setLoading(true)
    setPage({ current: 0 })
  }, [slug])

  if (isLoading) return <Spinner />
  return (
    <>
      <PostList posts={content} />
      {page.current < nbPages - 1 && (
        <div
          className="text-gray-300 cursor-pointer"
          onClick={() => setPage({ current: page.current + 1 })}
        >
          [MORE]
        </div>
      )}
    </>
  )
}

export default HackerNews
