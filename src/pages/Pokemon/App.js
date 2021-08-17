import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Types from './components/Types/Types'
import CardList from './components/CardList'
import Card from './components/Card'
import { CardsContextProvider } from './context/useCards'
import Breadcrumb from './components/Breadcrumb'

const App = () => {
  return (
    <CardsContextProvider>
      <Router>
        <Breadcrumb />

        <Switch>
          <Route exact path="/projects/pokemon/:type/:id" component={Card} />
          <Route exact path="/projects/pokemon/:type" component={CardList} />
          <Route exact path="/projects/pokemon" component={Types} />
        </Switch>
      </Router>
    </CardsContextProvider>
  )
}

export default App
