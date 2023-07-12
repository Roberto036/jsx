import './App.css';
import About from './Components/About';
import Carous from './Components/Carousel';
import Navb from './Components/Navbar';
// import Home from './Components/Home';


function App() {
  return (
    <div className="App">
      <About />
      <Navb/>
      <Carous /> 
      {/*<Home/>*/}
    </div>
  );
}

export default App;
