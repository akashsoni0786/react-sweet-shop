import './App.css';
import { Route, Routes } from 'react-router';
import SignInSide from './Login';
import SignUp from './Signup';
import Home from './Home2';

function App() {
  return (
    <Routes>
    <Route path='/' element={<SignInSide />}/>
    <Route path='/signup' element={<SignUp />}/>
    <Route path='/home' element={<Home />}/>
   </Routes>
  );
}

export default App;
