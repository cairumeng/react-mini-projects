import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Home from './pages/Home/Home'
import Todolist from './pages/Todolist/Todolist'
import CountdownTimer from './pages/CountdownTimer/CountdownTimer'
import PasswordGenerator from './pages/PasswordGenerator/PasswordGenerator'
import HackerNews from './pages/HackerNews/App'

function App() {
  return (
    <>
      <Header />
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/projects/todo-list" component={Todolist} />
          <Route exact path="/projects/countdown-timer" component={CountdownTimer} />
          <Route exact path="/projects/password-generator" component={PasswordGenerator} />
          <Route path="/projects/hacker-news" component={HackerNews} />
        </Switch>
      </Router>
    </>
  )
}

export default App
