import './App.css';
import { Route, Routes } from 'react-router';
import SignInSide from './Login';
import SignUp from './Signup';

function App() {
  return (
    <Routes>
    <Route path='/' element={<SignInSide />}/>
    <Route path='/signup' element={<SignUp />}/>
   </Routes>
  );
}

export default App;
