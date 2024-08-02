import { Route, Routes } from 'react-router-dom'
import Home from './components/home/Home'
import Auth from './components/auth/Auth'

function App() {

  return (
    <Routes>
      <Route path='/' element={true ? <Home /> : <Auth />}>

      </Route>
    </Routes>
  )
}

export default App
