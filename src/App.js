
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './pages/Home';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <div>
        <Header/>
      </div>
      <Home/>
      <div>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
