// import logo from './logo.svg';
import './App.css';
import {Temp} from './components/Temp'
import {DushState} from './components/DushState'

function App() {
  return (
    <>
      <h1 className="app_title">Душнила</h1>;
      <div className='main'>
        <DushState/>
        <Temp/>
      </div>
           
    </>
    
  );
}

export default App;
