import './App.css';
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import CreatePost from './pages/CreatePost';
import Error from './pages/Error';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/createpost" element={<CreatePost/>} />
        <Route path="/login" element={<Login/>}/>
        <Route path="*" element={<Error/>}/>
      </Routes>
    </Router>
  );
}

export default App;
