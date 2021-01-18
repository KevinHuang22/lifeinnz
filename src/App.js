
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import StudyInNZ from './Study/StudyInNZ';

function App() {
  return (
    <Router>   
      <div className="App">
        <Header/>
        <Switch>
           <Route path="/" exact component={Home} />
           <Route path="/study" component={StudyInNZ} />
           <Route path="/" component={Home} />
         </Switch>
         <Footer/>
      </div>
    </Router>
  );
}

export default App;
