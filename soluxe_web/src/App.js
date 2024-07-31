import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Homepage from './Pages/Homepage';
import New from './Pages/New';
import Men from './Pages/Men';
import Women from './Pages/Women';
import Accessories from './Pages/Accessories';
import Outlet from './Pages/Outlet';
import OurStory from './Pages/OurStory';
import SignUp from './Pages/SignUp';
import Login from './Pages/Login';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Homepage/>}></Route>
        <Route path='/new' element={<New/>}></Route>
        <Route path='/men' element={<Men/>}></Route>
        <Route path='/women' element={<Women/>}></Route>
        <Route path='/accessories' element={<Accessories/>}></Route>
        <Route path='/outlet' element={<Outlet/>}></Route>
        <Route path='ourstory' element={<OurStory/>}></Route>
        <Route path='/signup' element={<SignUp/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
      
      </Routes>
      
      </BrowserRouter>
      
    </div>
  );
}

export default App;
