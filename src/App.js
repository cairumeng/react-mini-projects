import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Home from './pages/Home/Home'
import Todolist from './pages/Todolist/Todolist'
import CountdownTimer from './pages/CountdownTimer/CountdownTimer'
import PasswordGenerator from './pages/PasswordGenerator/PasswordGenerator'
import HackerNews from './pages/HackerNews/App'
import Calculator from './pages/Calculator/Calculator'
import Pokemon from './pages/Pokemon/App'
import TicTacToe from './pages/TicTacToe/TicTacToe'

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/projects/todo-list" component={Todolist} />
        <Route exact path="/projects/countdown-timer" component={CountdownTimer} />
        <Route exact path="/projects/password-generator" component={PasswordGenerator} />
        <Route path="/projects/hacker-news" component={HackerNews} />
        <Route path="/projects/calculator" component={Calculator} />
        <Route path="/projects/pokemon" component={Pokemon} />
        <Route path="/projects/tic-tac-toe" component={TicTacToe} />
      </Switch>
    </Router>
  )
}

export default App
