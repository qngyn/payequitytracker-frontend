import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Layout from './components/Layout'
import Error from './pages/Error'
import IntroPage from './pages/IntroPage'
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'

function App() {
  return (
    <BrowserRouter>
      <Routes>  
        <Route element={<Layout />}>
          <Route path="/" element={<IntroPage />} />
          <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<Signup />}/>
        </Route>
        <Route path="*" element={<Error />}/>
      </Routes>
    
    </BrowserRouter>
  )
}

export default App
