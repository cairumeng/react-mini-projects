import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Todolist from './gallery/Todolist/Todolist'
import CountdownTimer from './gallery/CountdownTimer/CountdownTimer'
import PasswordGenerator from './gallery/PasswordGenerator/PasswordGenerator'
import HackerNews from './gallery/HackerNews/App'
import Calculator from './gallery/Calculator/Calculator'
import Pokemon from './gallery/Pokemon/App'
import TicTacToe from './gallery/TicTacToe/TicTacToe'
import ShoppingCart from './gallery/ShoppingCart/Home'
import CV from './CV/CV'
import Gallery from './gallery'

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={CV} />
        <Route exact path="/gallery" component={Gallery} />
        <Route exact path="/gallery/todo-list" component={Todolist} />
        <Route exact path="/gallery/countdown-timer" component={CountdownTimer} />
        <Route exact path="/gallery/password-generator" component={PasswordGenerator} />
        <Route path="/gallery/hacker-news" component={HackerNews} />
        <Route path="/gallery/calculator" component={Calculator} />
        <Route path="/gallery/pokemon" component={Pokemon} />
        <Route path="/gallery/tic-tac-toe" component={TicTacToe} />
        <Route path="/gallery/shopping-cart" component={ShoppingCart} />
      </Switch>
    </Router>
  )
}

export default App
