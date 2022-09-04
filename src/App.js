import './App.css';
import Login from "./components/Login";
import HomePage from './components/HomePage';
import MovieDetail from './components/MovieDetail';
import Favorites from './components/Favorites'
import {Route,Switch} from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
function App() {
  return (
    <div className="App">
      <Navbar/>
     <Switch>
       <Route exact path="/" component={Login}/>
       <Route path="/home" component={HomePage}/>
       <Route path="/detail/:id" component={MovieDetail}/>
       <Route path="/favorites" component={Favorites}/>
     </Switch>
     <Footer/>
    </div>
  );
}
export default App;
