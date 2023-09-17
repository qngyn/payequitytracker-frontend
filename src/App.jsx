import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Layout from './components/Layout'
import Error from './pages/Error'
import IntroPage from './pages/IntroPage'
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import AuthRequired from './components/AuthRequired'
import LayoutAfter from './components/LayoutAfter'
import Forum from './pages/Forum'
import Profile from './pages/Profile'
import Survey from './pages/Survey'
import Confirmation from './pages/Confimation'

function App() {
  return (
    <BrowserRouter>
      <Routes>  
          <Route path="/" element={<IntroPage />} />
          <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<Signup />}/>
          <Route path="confirmation" element={<Confirmation />} />"
          <Route path="/survey" element={<Survey />} />

            <Route element={<LayoutAfter />}>
              <Route path="/home" element={<Home />}/>
              <Route path="/forum" element={<Forum />} />
              <Route path="/profile" element={<Profile />} />
            </Route>
        <Route path="*" element={<Error />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
