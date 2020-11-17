import './App.css'
import HomeScreen from './components/screens/HomeScreen'
import PostScreen from './components/screens/PostScreen'
import CreateScreen from './components/screens/CreateScreen'
import Header from './components/ui/Header'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Footer from './components/ui/Footer'

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path='/' exact component={HomeScreen} />
        <Route path='/posts/:id' component={PostScreen} />
        <Route path='/create' component={CreateScreen} />
      </Switch>
      <Footer />
    </Router>
  )
}

export default App
