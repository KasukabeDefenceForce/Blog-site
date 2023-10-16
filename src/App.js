import './App.css';
import {Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import CreatePost from './pages/CreatePost';
import Error from './pages/Error';
import Navbar from './components/Navbar';
import { useState } from 'react';
import { signOut } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import {auth}  from './firebase-config.js';

function App() {
  const [isAuth , setIsAuth] = useState(localStorage.getItem("isAuth"))
  let navigate = useNavigate();

  const signUserOut = () => {
      signOut(auth).then(() => {
          localStorage.clear();
          setIsAuth(false)
          navigate("/login")
      })
  }
  return (
    <div>
      <Navbar isAuth={isAuth} signUserOut={signUserOut}/>
      <Routes>
        <Route path="/" element={<Home isAuth={isAuth}/>} />
        <Route path="/createpost" element={<CreatePost isAuth={isAuth}/>} />
        <Route path="/login" element={<Login setIsAuth={setIsAuth}/>}/>
        <Route path="*" element={<Error/>}/>
      </Routes>
    </div>
  );
}

export default App;
