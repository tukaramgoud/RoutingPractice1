import {Switch, Route, BrowserRouter} from 'react-router-dom'
import Header from './components/Header'
import Contact from './components/Contact'
import Home from './components/Home'
import About from './components/About'
import NotFound from './components/NotFound'
import './App.css'

const App = () => (
  <div className="main-app">
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/About" component={About} />
        <Route path="/Contact" component={Contact} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  </div>
)

export default App
