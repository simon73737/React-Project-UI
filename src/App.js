import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Menubar from './Components/Menubar';

function App() {
  return (
    <>
      <Router>
        <Menubar />
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/login' element={<Login/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
