import { Switch, Route, Link } from 'react-router-dom'
import Comments from './components/Comments'
import HackerNews from './components/HackerNews'
import User from './components/User'

const App = () => {
  return (
    <div className="container mx-auto mt-10 px-5 md:px-20">
      <div className="flex divide-x-2 divide-gray-400 md:text-2xl font-bold">
        <Link className="pr-3" to="/gallery/hacker-news">
          HNR
        </Link>
        <Link className="px-3" to="/gallery/hacker-news/ask">
          ASK
        </Link>
        <Link className="px-3" to="/gallery/hacker-news/show">
          SHOW
        </Link>
        <Link className="px-3" to="/gallery/hacker-news/polls">
          POLLS
        </Link>
      </div>

      <Switch>
        <Route exact path="/gallery/hacker-news/:slug?" component={HackerNews} />
        <Route exact path="/gallery/hacker-news/users/:name" component={User} />
        <Route exact path="/gallery/hacker-news/comments/:id" component={Comments} />
      </Switch>
    </div>
  )
}

export default App
