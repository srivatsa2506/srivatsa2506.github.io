import Home from './components/Home';
import Details from './components/Details';
import Edu from './components/Edu';
import Body from './components/Body';
import Certificates from './components/Certificates';
import Bottom from './components/Bottom';
import './App.css'
function App() {
  return (
    <div className="App">
      <Home/>
      <Details/>
      <Edu/>
      <Body/>
      <Certificates/>
      <Bottom/>
    </div>
  );
}

export default App;
